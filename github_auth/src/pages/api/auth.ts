import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import qs from "qs";
import cookie from "cookie";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const router = express.Router();

const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const SESSION_SECRET = process.env.SESSION_SECRET;

//@ts-ignore
router.get("/github", async (req: NextApiRequest, res: NextApiResponse) => {
  const { code } = req.query;

  try {
    const { data: accessTokenResponse } = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const accessToken = accessTokenResponse.access_token;

    const { data: user } = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("user", JSON.stringify(user), {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "strict",
        path: "/",
      })
    );

    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//@ts-ignore
router.get("/logout", async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("user", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      expires: new Date(0),
      sameSite: "strict",
      path: "/",
    })
  );

  res.redirect("/");
});

app.use(router);

export default app;
