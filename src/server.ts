import express, { Request, Response } from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Merry X Mas \n");
});

export { server };
