import { Router } from "express";

export const auth = Router();



auth.get('/user', (req, res) => {
  console.log('/user')
  res.json({user: 'ok'})
})
