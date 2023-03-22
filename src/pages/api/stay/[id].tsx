import { getById } from "@/lib/mongo/Stay";
import { Stay } from "@/models/stay";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest,
    res: NextApiResponse<Stay>) => {

    if (req.method === 'GET') {
        let { id } = req.query

        try {
            const stay = await getById(id)
            return res.status(200).json(stay)
        } catch (err) {
            return res.status(500)
        }
    }


    // res.setHeader('Content-Type', 'application/json')
    res.status(425).end(`Method ${req.method} is not allowed}`)
}

export default handler