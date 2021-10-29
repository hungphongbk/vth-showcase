import {NextApiRequest, NextApiResponse} from "next";
import demoData from "src/assets/data";

export default (req: NextApiRequest, res: NextApiResponse<typeof demoData>) => {
    res.status(200).json(demoData)
}