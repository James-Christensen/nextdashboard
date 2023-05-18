const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createWeeks() {
  const jsonData = {
    data: [
      { id: 1, date: "3/3/2023" },
      { id: 2, date: "3/10/2023" },
      { id: 3, date: "3/17/2023" },
      { id: 4, date: "3/24/2023" },
      { id: 5, date: "3/31/2023" },
      { id: 6, date: "4/7/2023" },
      { id: 7, date: "4/14/2023" },
      { id: 8, date: "4/21/2023" },
      { id: 9, date: "4/28/2023" },
      { id: 10, date: "5/5/2023" },
      { id: 11, date: "5/12/2023" },
    ],
  };

  for (const weekData of jsonData.data) {
    await prisma.week.create({
      data: {
        id: weekData.id,
        date: new Date(weekData.date),
      },
    });
  }

  console.log("Weeks created successfully!");
}

createWeeks()
  .catch((error) => {
    console.error("Error creating weeks:", error);
  })
  .finally(() => {
    prisma.$disconnect();
  });
