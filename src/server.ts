import express, { Request, Response } from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("YoHO !!! branch 2\n");
});

export { server };
