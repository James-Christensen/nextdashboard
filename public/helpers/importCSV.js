// Insert JSON data into "pipeline" table
const fs = require("fs");
const csv = require("csv-parser");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function processCSVFile(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (error) => reject(error));
  });
}

// Usage example
async function readCSVFile() {
  const filePath =
    "C:/Users/James Christensen/Python_3_10/next_dashboard/public/data/March_May_weeklypipeline.csv";

  try {
    const csvData = await processCSVFile(filePath);
    // Here, `csvData` will contain an array of objects representing the CSV file contents

    // Now you can use `csvData` to perform any necessary operations
    // such as saving it to the database using your existing PrismaClient instance

    // Example: Saving the data to the database using Prisma
    for (const row of csvData) {
      await prisma.model.create({
        data: {
          // Map the properties from the CSV row to the appropriate Prisma model properties
          // For example:
          name: row.name,
          age: parseInt(row.age),
          // ...
        },
      });
    }

    console.log("CSV file processed successfully!");
  } catch (error) {
    console.error("An error occurred while processing the CSV file:", error);
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client after finishing the operation
  }
}
