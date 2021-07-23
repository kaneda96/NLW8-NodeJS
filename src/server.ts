import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"
import { router } from './routes'
import 'reflect-metadata'
import './db'

/**
 * GET => pegar uma informação
 * POST => inserir uma informação 
 * PUT => alterar uma informação
 * DELETE => Deletar uma informação
 * PATCH => Alterar informação específica
 */

const app = express();

app.use(express.json())

app.use(router)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {

    console.log(err)

    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(3000, () => console.log("Server running on 3000"))