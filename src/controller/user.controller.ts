import type {Request, Response} from 'express';
import {pick} from 'lodash';
import { createUserSchema } from '../schema/user.schema';
import { UserModel } from '../model/user.model';
import { createUser } from '../service/user.service';

export async function createUserHandler(
    req: Request,
    res: Response
){
    console.log(req.body);
    const validated= createUserSchema.safeParse(req.body);
    console.log(validated.success);
    if(validated.success){
        try{
            const user= await createUser(validated.data);
            res.status(200).json(pick(user, "username", "email", "_id"));
        }catch(exception){
            console.log(exception);
            return res.status(400).send(exception);
        }
    } 
    else{
        res.status(400).json({error: "malformed request body"});
    } 
}
