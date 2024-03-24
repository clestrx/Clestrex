import mongoose from "mongoose";
import fs from 'fs';
import path from 'path';

export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

export const toObjectId = (idString) => {
  try {
    return new mongoose.Types.ObjectId(idString);
  } catch (error) {
    throw new Error('Invalid ObjectId format');
  }
};

export function base64ToFile(base64String) {
  // Extracting mime type and data from base64 string
  const matches = base64String.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  if (!matches || matches.length !== 3) {
    throw new Error('Invalid base64 string');
  }

  const mimeType = matches[1];
  const data = matches[2];

  // Determining file extension from mime type
  const extension = mimeType.split('/')[1];

  // Generating a random file name
  const fileName = `file_${Date.now()}.${extension}`;

  // Writing the file
  const filePath = path.join(process.cwd(), 'public', 'uploads/images', fileName);
  fs.writeFileSync(filePath, Buffer.from(data, 'base64'));
  return filePath;
  // console.log(`File ${fileName} created successfully at ${filePath}.`);
}
