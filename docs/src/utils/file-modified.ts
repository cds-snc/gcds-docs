import { promises as fs } from "fs";
import path from "node:path";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export async function getFileModifiedTime(componentPath: string, format = "DD MMMM YYYY") {
  try {
    const srcDir = path.resolve(process.cwd(), "src");
    const normalizedPath = componentPath.replace(/^(\.\.\/)+/, "");
    const absolutePath = path.resolve(srcDir, normalizedPath);

    const stats = await fs.stat(absolutePath);
    return dayjs(stats.mtime).utc().format(format);
  } catch (error) {
    console.warn(`Could not read file stats for ${componentPath}:`, error);
    return "Unknown";
  }
}
