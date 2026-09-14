import { NextResponse } from 'next/server';

export async function GET() {
  const LINE_TOKEN = rprocess.env.LINE_TOKEN;
  const USER_ID = process.env.LINE_USER_ID;

  const url = "https://api.line.me/v2/bot/message/push";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${LINE_TOKEN}`
      },
      body: JSON.stringify({
        to: USER_ID,
        messages: [{ type: "text", text: "【PIXELOGIC】成功從 Next.js 發送 LINE 通知啦！" }]
      })
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: "通知發送成功！" });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ success: false, error: errorText }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "發生例外錯誤" }, { status: 500 });
  }
}