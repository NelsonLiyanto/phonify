import { NextRequest, NextResponse } from "next/server";
import { defaultResponse } from "../../users/route";
import { getProductById } from "../../../../../db/models/products";
import { useSearchParams } from "next/navigation";

export const GET = async (request: NextRequest) => {
  const params = useSearchParams();
  //   const products = await getProductById();
  return NextResponse.json<defaultResponse<unknown>>(
    {
      statusCode: 200,
      message: "Test success /products",
      data: "helo",
    },
    {
      status: 200,
    }
  );
};
