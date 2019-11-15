import express, { Request, Response } from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("YooHooo Merry Ho \n");
});

export { server };
