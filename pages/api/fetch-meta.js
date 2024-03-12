// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import fs from "fs";

export default async function handler(req, res) {
  try {
    // Fetch JSON data from the URL
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_API_URL}meta/metadata.json`);
    const jsonData = response.data;

    // Write JSON data to the public folder
    fs.writeFileSync('public/assets/meta/metadata.json', JSON.stringify(jsonData));

    console.log(`JSON data saved to public/assets/meta/metadata.json`);
    return res.status(200).json({ status: true, response_code: 200, message: `JSON data saved to public/assets/meta/metadata.json`, data: jsonData });

  } catch (error) {
    console.error('Error fetching or saving JSON data:', error.message);
    return res.status(400).json({ status: false, response_code: 400, message: error.message, data: [] });
  }
}
