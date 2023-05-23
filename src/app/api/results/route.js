import prisma from "../../../../public/helpers/Client";
import { NextResponse } from "next/server";
import { revalidateTag } from 'next/cache';
//API routes for GET and POST to update the results table. 
//GET is used to test the api and confirm it is working.
export async function GET(request) {
  const tag = request.nextUrl.searchParams.get('tag');
  revalidateTag(tag);
  const results = await prisma.results.findMany({ orderBy: { id: "asc" } });
  return NextResponse.json(results,{ revalidated: true, now: Date.now() });
}  

//POST is used to update the results table with the new data from the forecast table.
export async function POST(request) {
    const data = await request.json();
    try {
        await Promise.all(
          data.map(async ({ id, month,current }) => {
            await prisma.results.updateMany({
                where: { id },
                data: { [month]: current },
            });
          })
        );
        return NextResponse.json({ message: "success" }, { status: 200 });
      } catch (error) {
        console.error(error);
        NextResponse.json({ message: "Error updating results data" });
      } finally {
        await prisma.$disconnect();
      }
    }

