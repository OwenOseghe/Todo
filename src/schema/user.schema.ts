import {object, string, TypeOf} from 'zod';

export const createUserSchema= object({
    body: object({
        username: string({message: "usermane is required"}).min(3).max(40),
        email: string({message: "email is required"}).email("invalid email"),
        password: string({message: "password is required"}).min(8).max(255),
    })
});

export const getUserSchema= object({
    params: object({
        id: string({ message: "UserId is required!"})
    })
})
export type GetUserInput= TypeOf<typeof getUserSchema>;
export type CreateUserInput= TypeOf<typeof createUserSchema>;