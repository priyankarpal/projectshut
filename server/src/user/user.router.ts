import express, { Response, Request } from 'express'
import { UserService } from '../user/user.service'
import { UserType } from './user.interface'

export const userRouter = express.Router()

interface RequestParams {
  id: string
}

interface RequestBody {
  body: UserType
}
//to login a registered user
userRouter.get('/login', async (req: Request<RequestBody>, res: Response) => {
  try {
    const user = req.body
    const data = await UserService.getUserById(user)
    res.status(200).send({ success: true, data: data })
  } catch (error) {
    res.status(500).send({ success: false, error: error })
  }
})

//to Register a user
userRouter.get('/signup', async (req: Request<RequestBody>, res: Response) => {
  try {
    const user = req.body
    const data = await UserService.createNewUser(user)
    res.status(200).send({ success: true, data: data })
  } catch (error) {
    res.status(500).send({ success: false, error: error })
  }
})

//to Update a user profile
userRouter.get(
  '/update/:id',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { id } = req.params
      const user = req.body
      const data = await UserService.updateUserByID(id, user)
      res.status(200).send({ success: true, data: data })
    } catch (error) {
      res.status(500).send({ success: false, error: error })
    }
  }
)

//to Delete a user
userRouter.get(
  '/delete/:id',
  async (req: Request<RequestParams>, res: Response) => {
    try {
      const { id } = req.params
      const data = await UserService.deleteUserByID(id)
      res.status(200).send({ success: true, data: data })
    } catch (error) {
      res.status(500).send({ success: false, error: error })
    }
  }
)
