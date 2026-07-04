import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type EarlyAccessPayload = {
  fullName?: string;
  email?: string;
  role?: string;
  organization?: string;
  frustration?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EarlyAccessPayload;

    const fullName = body.fullName?.trim();
    const email = body.email?.trim().toLowerCase();
    const role = body.role?.trim() || null;
    const organization = body.organization?.trim() || null;
    const frustration = body.frustration?.trim() || null;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: "Supabase environment variables are missing." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
      },
    });

    const { error } = await supabase.from("early_access_signups").insert({
      full_name: fullName,
      email,
      user_role: role,
      organization,
      biggest_frustration: frustration,
      source: "early_access_page",
    });

    if (error) {
      console.error("Supabase insert error:", error);

      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the early access list." },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: error.message || "Unable to save your submission." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "You're on the PeakMotion early access list.",
    });
  } catch (error) {
    console.error("Early access API error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}