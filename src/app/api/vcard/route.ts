import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const user = searchParams.get("user");

  if (!user) {
    return NextResponse.json({ error: "Missing user parameter" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "public", `${user}.vcf`);

  try {
    const file = fs.readFileSync(filePath);

    return new NextResponse(file, {
      status: 200,
      headers: {
        "Content-Type": "text/vcard",
        "Content-Disposition": `inline; filename="${user}.vcf"`, // 👈 permite previsualizar, no descargar
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
