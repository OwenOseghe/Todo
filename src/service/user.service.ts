import {User, UserModel} from "../model/user.model";

export async function createUser(
    user: User
){
    try{
        const userDocument= await UserModel.create(user);
        console.log("{User Service | Create User} Successfully created user with id "+ userDocument.id);
        return userDocument;
    }catch(exception){
        console.log(exception);
        throw(exception);
    }
}
export async function getUser(
    id: string
){
    try{
        const user= await UserModel.findById(id);
        if(!user){
            throw new Error(`Could not find user with ${id}`)
        }
        return user;
    }catch(exception){
        console.log("{User Service | CreateUser} - Error getting user");
        throw exception;
    }
}