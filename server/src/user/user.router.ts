import express from 'express'
import { UserService } from '../user/user.service'


export const userRouter = express.Router()


//to login a registered user
userRouter.get('/login', async (req, res) => {
    try {
        const user = req.body
        const data = await UserService.getUserById(user)
        res.status(200).send({ success: true, data: data })
    } catch (error) { }
})

//to Register a user
userRouter.get('/signup', async (req, res) => {
    try {
        const user = req.body
        const data = await UserService.createNewUser(user)
        res.status(200).send({ success: true, data: data })
    } catch (error) { }
})


//to Delete a user
userRouter.get('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await UserService.deleteUserByID(id)
        res.status(200).send({ success: true, data: data })
    } catch (error) { }
})


//to Update a user profile
userRouter.get('/update/:id', async (req, res) => {
    try {
        const { id } = req.params
        const user = req.body
        const data = await UserService.updateUserByID(id, user)
        res.status(200).send({ success: true, data: data })
    } catch (error) { }
})


