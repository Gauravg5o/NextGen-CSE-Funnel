import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  fullName: string;
  whatsapp: string;
  email: string;
  academicStatus: string;
  targetCity: string;
  preferredSlot: string;
}

const academicStatusLabels: Record<string, string> = {
  class12_appearing: "Class 12th — Appearing",
  class12_passed: "Class 12th — Passed (PCM)",
  dropper: "Dropper",
  first_year_college: "1st Year College",
};

const slotLabels: Record<string, string> = {
  morning: "Morning (10 AM - 1 PM)",
  afternoon: "Afternoon (2 PM - 5 PM)",
  evening: "Evening (6 PM - 9 PM)",
};

export async function POST(request: NextRequest) {
  try {
    const body: LeadPayload = await request.json();

    // ── Validate presence of required fields ─────────────────────────────────
    const required: (keyof LeadPayload)[] = [
      "fullName",
      "whatsapp",
      "email",
      "academicStatus",
      "targetCity",
      "preferredSlot",
    ];

    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const humanAcademicStatus = academicStatusLabels[body.academicStatus] || body.academicStatus;
    const humanSlot = slotLabels[body.preferredSlot] || body.preferredSlot;
    const timestampIST = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // ── Enriched lead data with alias keys for flexible Google Sheet columns ──
    const enrichedLead = {
      fullName: body.fullName,
      name: body.fullName,
      whatsapp: body.whatsapp,
      phone: body.whatsapp,
      mobile: body.whatsapp,
      email: body.email,
      academicStatus: humanAcademicStatus,
      targetCity: body.targetCity,
      city: body.targetCity,
      preferredSlot: humanSlot,
      slot: humanSlot,
      submittedAt: timestampIST,
      timestamp: timestampIST,
      source: "TechGrad CSE Landing Page",
      utmSource: request.headers.get("referer") ?? "direct",
    };

    console.log("[API /leads] New student lead received:", enrichedLead);

    // ── Forward to Google Apps Script Web App (Google Sheets) ─────────────────
    const googleScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (googleScriptUrl) {
      try {
        const sheetResponse = await fetch(googleScriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(enrichedLead),
        });

        const sheetResult = await sheetResponse.text();
        console.log("[Google Sheets Sync Success]:", sheetResponse.status, sheetResult);
      } catch (sheetError) {
        console.error("[Google Sheets Sync Error]:", sheetError);
      }
    } else {
      console.warn("[API /leads] GOOGLE_APPS_SCRIPT_URL environment variable is not defined.");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead recorded and synced successfully",
        data: { id: `lead_${Date.now()}` },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /leads] Handler error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
