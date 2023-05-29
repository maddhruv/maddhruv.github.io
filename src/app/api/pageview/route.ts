import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(request: Request) {
  try {
    const { searchParams, host } = new URL(request.url);
    const postId = searchParams.get("postId");

    console.log({ host });

    if (!postId) return NextResponse.json({ error: "PostId is missing" });
    if (process.env.NODE_ENV === "development")
      return NextResponse.json({ postId, capture: false });
    client
      .patch(postId)
      .setIfMissing({ pageView: 0 })
      .inc({ pageView: 1 })
      .commit();

    return NextResponse.json({ postId, capture: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { capture: false, error: JSON.stringify(error) },
      { status: 500 }
    );
  }
}
