import {object, string, TypeOf} from 'zod';

export const createUserSchema= object({
    username: string({message: "usermane is required"}).min(3).max(40),
    email: string({message: "email is required"}).email("invalid email"),
    password: string({message: "password is required"}).min(8).max(255),
});

export type CreateUserInput= TypeOf<typeof createUserSchema>;