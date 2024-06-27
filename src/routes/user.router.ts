import express from 'express';
import { createUserHandler} from "../controller/user.controller";

const router= express.Router();

router.get('/', (req, res) =>{
    res.status(200).send("Virus");
});
router.post('/', createUserHandler)
export default router;