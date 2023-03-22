import { getStays } from '../../../lib/mongo/Stay'
import { Stay } from '@/models/stay'
import type { NextApiRequest, NextApiResponse } from 'next'

export async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Stay[]>
) {
    if (req.method === 'GET') {

        const filterBy: any = req.query
        try {
            const stays = await getStays(filterBy)
            return res.status(200).json(stays)
        } catch (err) {
            return res.status(500)
        }
    }

    res.setHeader('Alllow', ['GET'])
    res.status(425).end(`Method ${req.method} is not allowed}`)
}

export default handler