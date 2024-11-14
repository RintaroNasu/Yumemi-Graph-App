import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const url = process.env.RESAS_API_URL || "";
  const apiKey = process.env.RESAS_API_KEY || "";

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("perYear");

  try {
    const response = await fetch(`${url}/api/v1/population/composition/perYear?prefCode=${id}`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",

        "x-api-key": apiKey,
      },
    });

    const json = await response.json();

    if (json?.data?.errorMessage) {
      throw new Error(json.data.errorMessage);
    }

    return NextResponse.json(json);
  } catch (error) {
    return NextResponse.json(
      {
        message: error?.toString() || error,
      },
      {
        status: 400,
      }
    );
  }
};
