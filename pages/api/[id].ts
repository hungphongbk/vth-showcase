import { NextApiRequest, NextApiResponse } from "next";
import demoData, { DataItem } from "../../src/assets/data";

export default (req: NextApiRequest, res: NextApiResponse<DataItem>) => {
  res
    .status(200)
    .json(demoData.find((i) => i.id === (req.query.id as unknown as number))!);
};
