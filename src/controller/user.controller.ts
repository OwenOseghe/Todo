import type {Request, Response} from 'express';
import {pick} from 'lodash';
import { createUser, getUser } from '../service/user.service';
import { CreateUserInput, GetUserInput } from '../schema/user.schema';

export async function createUserHandler(
    req: Request<{},{}, CreateUserInput["body"]>,
    res: Response
){
    console.log(req.body);

        try{
            const user= await createUser(req.body);
            res.status(200).json(pick(user, "username", "email", "_id"));
        }catch(exception){
            console.log(exception);
            return res.status(400).send(exception);
        }
}
export async function getUserHandler(
    req: Request<GetUserInput["params"]>,
    res: Response
){
   try{
    const user= await getUser(req.params.id);
    return res.status(200).json(
        pick(user, "_id","username", "email")
    );
   }catch(exception){
        return res.status(404).json({
            message: "User not found",
            error: exception
        })
   }
}
