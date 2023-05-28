import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");

  if (!postId) return NextResponse.json({ error: "PostId is missing" });
  if (process.env.NODE_ENV === "development")
    return NextResponse.json({ postId, capture: false });
  try {
    client
      .patch(postId)
      .setIfMissing({ pageView: 0 })
      .inc({ pageView: 1 })
      .commit();
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({ postId, capture: true });
}
