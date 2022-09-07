// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const AUTH_API_URL = 'http://localhost:5000/api/auth';

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}