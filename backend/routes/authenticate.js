import { Router } from "express";
import jwtmod from "jsonwebtoken";

export const auth = Router();
const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAulin7/2iRtWcRGy5JHcuqoOfxGOC3livnJe/yZO7oqV/Eaq0lTq2l7EwjEoi+qqtmooeVuSbsZQ8e7suuFpqur9IATceAVwMh9+m/iC8QeAAd82pVQh/+1aj8UOQtwqma+dkC8oWW45adoBiiWD0zIYHlC0Tdyu0FCHiRtEJCUqV12D/PXiEuR94gDVqGJrsphiiRCQojlVqcWZ+F0LIcb9NHmYCX5nsQTFUsjSEVDSEQKg5MfutpqqhfxzHKSDOJiPe3OEwlBBo9moUnAfuus8jSHMv8t0XZMLQOwhio79+U6NouYIlA0RCD86kXodI7uf+MPrC16sZQhRwwm7jWwIDAQAB'

export const decodeJWT = async (req, res, next) => {
  const bearer = req.headers["authorization"];
  const token = bearer && bearer.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  const public_key = `-----BEGIN PUBLIC KEY-----\n${publicKey}\n-----END PUBLIC KEY-----`;

  const profile = jwtmod.verify(token, public_key, {
    algorithms: ["RS256"],
  });

  console.log('decode', profile)
  req.user = profile;
  next();
};

auth.get('/oauth2', (req, res) => {
  console.log('/oauth2', req.user)
  res.status(200).json(req.user)
})
