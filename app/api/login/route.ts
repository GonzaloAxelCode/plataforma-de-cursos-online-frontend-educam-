import { NextResponse } from "next/server";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_API_URL}/auth/jwt/create/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json();
    console.log(data)
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        error: "There was an error with the network request",
      },
      { status: 500 }
    );
  }
}
