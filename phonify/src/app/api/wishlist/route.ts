import { NextRequest, NextResponse } from "next/server";
import { defaultResponse } from "../users/route";
import { listWishlist, removeWishlist } from "../../../../db/models/wishlist";

export const GET = async (request: NextRequest) => {
  const id = request.headers.get("x-user-id") as string;
  const wishlist = await listWishlist(id);

  return NextResponse.json<defaultResponse<unknown>>(
    {
      statusCode: 200,
      message: "Success getting all wishlist",
      data: wishlist,
    },
    {
      status: 200,
    }
  );
};

export const POST = async (request: NextRequest) => {
  const id = request.headers.get("x-user-id") as string;
  const data = await request.json();
  console.log(data);
  return NextResponse.json<defaultResponse<unknown>>(
    {
      statusCode: 200,
      message: "Success getting all wishlist",
      data,
    },
    {
      status: 200,
    }
  );
};
