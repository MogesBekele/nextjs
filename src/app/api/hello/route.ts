import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://68209b66259dad2655ad0e66.mockapi.io/users"
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch users" },
        { status: 500 }
      );
    }

    const data = await res.json();

    return NextResponse.json(data); // ✅ This is what was missing
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
