import { findBusinessWithData } from "../../src/model/businessModel";
import { findFilmIndustryWithData } from "../../src/model/filmIndustryModel";
import { findSportsWithData } from "../../src/model/sportsModel";
import { toObjectId } from "../../src/utils";

export default async function handler(req, res) {
    try {
        if(req.body.type === 'Business') {
            const data = await findBusinessWithData({ _id: toObjectId(req.body.userID), is_deleted: false });
            return res.status(200).json({ status: true, response_code: 200, message: `Get Successful`, data: data });
        }
        if(req.body.type === 'Film_Industry') {
            const data = await findFilmIndustryWithData({ _id: toObjectId(req.body.userID), is_deleted: false });
            return res.status(200).json({ status: true, response_code: 200, message: `Get Successful`, data: data });
        }
        if(req.body.type === 'Sports') {
            const data = await findSportsWithData({ _id: toObjectId(req.body.userID), is_deleted: false });
            return res.status(200).json({ status: true, response_code: 200, message: `Get Successful`, data: data });
        }
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(400).json({ status: false, response_code: 400, message: error.message, data: [] });
    }
}