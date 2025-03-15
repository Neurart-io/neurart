import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { headers } = req
  const country = headers["x-vercel-ip-country"] as string

  res.status(200).json({ country })
}

