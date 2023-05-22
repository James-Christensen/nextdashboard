import prisma from "../../../../public/helpers/Client";

import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.json();
    try {
        await Promise.all(
          data.map(async ({ id, current, forecast }) => {
            await prisma.month_forecast.updateMany({
              where: { id },
              data: { current, forecast },
            });
          })
        );
        return NextResponse.json({ message: "success" }, { status: 200 });
      } catch (error) {
        console.error(error);
        NextResponse.json({ message: "Error updating forecast data" });
      } finally {
        await prisma.$disconnect();
      }
    }

  export async function GET(request) {
    return NextResponse.json({ message: "Hello world!" });
  }

//   export async function POST(request) {
//     const data = await request.json();
    
//     console.log(data)
//     return NextResponse.json({ data });
//   }
// Example Data:  [
//     { id: 1, segment: 'contract', current: 54684, forecast: 228927 },
//     { id: 2, segment: 'non_contract', current: 1000, forecast: 157026.4 },
//     { id: 3, segment: 'indirect', current: 2822.4, forecast: 198888.8 },
//     {
//       id: 4,
//       segment: 'mips_total',
//       current: 58506.4,
//       forecast: 584842.2
//     },
//     { id: 5, segment: 'apm_solutions', current: 1000, forecast: 1785000 },
//     {
//       id: 6,
//       segment: 'grand_total',
//       current: 59506.4,
//       forecast: 2369842.2
//     }
//   ]