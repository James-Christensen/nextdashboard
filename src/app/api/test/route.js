import prisma from "../../../../public/helpers/Client";
import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json({ message: "Hello from the test API!!" });
    } 

export async function POST(request) {
        const { id, month, current } = await request.json();
        const result = await prisma.results.update({
            where: { id },
            data: { [month]: current },
          });
        console.log(result);
        return NextResponse.json({ data: result });
      }