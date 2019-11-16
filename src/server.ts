import express, { Request, Response } from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Hello X Mas \n");
});

export { server };
