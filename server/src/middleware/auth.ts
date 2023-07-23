import { Request, Response, NextFunction } from 'express'
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

export const checkAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { data } = req.query

  if (!data) {
    return res.status(400).json({ success: false, message: 'data not found' })
  }

  try {
    const tokenResponse = await fetch(
      'https://github.com/login/oauth/access_token',
      {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: data,
        }),
      }
    ).then((res) => res.json())

    const accessToken = tokenResponse.data.access_token

    const userResponse = await fetch('https://api.github.com/user', {
      method: 'GET',
      headers: { Authorization: `token ${accessToken}` },
    }).then((res) => res.json())

    // const userData = userResponse.data

    // req.session.user = userData

    next()
  } catch (error) {
    console.error('GitHub OAuth Error:', error)
    return res.status(500).json({ success:false,message: 'GitHub authentication failed' })
  }
}
