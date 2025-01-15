import Papa from "papaparse";
import fs from "fs";
import path from "path";

export async function getProductReviews(productId: string) {
  // Get the absolute path to the public directory
  const publicDir = path.join(process.cwd(), "public");
  const filePath = path.join(publicDir, "reviews", `${productId}.csv`);

  if (!fs.existsSync(filePath)) {
    return [];
  }

  try {
    // Read the CSV file
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Parse CSV data
    const { data } = Papa.parse(fileContent, {
      header: true,
      skipEmptyLines: true,
    });

    return data;
  } catch (error) {
    console.error(`Error reading reviews for ${productId}:`, error);
    return [];
  }
}
