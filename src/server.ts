import express, { Request, Response } from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Hello Shannon \n");
});

export { server };
