import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validate = (schema: AnyZodObject) =>{
    return (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const validated= schema.safeParse({
            params: req.params,
            body: req.body
        });
        if(validated.success){
            Object.assign(
                req,            // target
                validated.data  // source
            )
            next();
        }else{
            res.status(400).json("malformed ")
        }
    }
}