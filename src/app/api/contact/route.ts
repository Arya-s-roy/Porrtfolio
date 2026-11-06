import { NextResponse } from "next/server";
import { site } from "@/data/site";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    message?: string;
  };

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in every field." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const bodyText = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  const mailto = `mailto:${site.email}?subject=${subject}&body=${bodyText}`;

  return NextResponse.json({ ok: true, mailto });
}
