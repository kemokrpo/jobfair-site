import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const folder = url.searchParams.get("folder") || "slike/slider"; // Default folder
    const directory = path.join(process.cwd(), "public", folder); // Corrected to include "public"
    console.log("Fetching images from folder:", folder);

    const files = fs.readdirSync(directory).filter((file) => {
      return /\.(png|jpg|jpeg|gif)$/.test(file);
    });
    console.log("Files found in directory:", files);

    // Ensure the path is relative to the public folder
    const imagePaths = files.map((file) => `/slike/${folder.split('/').pop()}/${file}`);
    return NextResponse.json(imagePaths);
  } catch (error) {
    console.error("Error reading directory:", error);
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
  }
}
