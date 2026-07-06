import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type EarlyAccessBody = {
  name?: string;
  email?: string;
  role?: string;
  organization?: string;
  message?: string;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EarlyAccessBody;

    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const role = body.role?.trim() || null;
    const organization = body.organization?.trim() || null;
    const message = body.message?.trim() || null;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: "Supabase environment variables are missing." },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("early_access_signups").insert({
      name,
      email,
      role,
      organization,
      message,
    });

    if (error) {
      console.error("Supabase insert error:", error);

      return NextResponse.json(
        { error: "Unable to submit early access signup." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Early access signup submitted." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Early access API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}}