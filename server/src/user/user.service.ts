import { UserType } from "./user.interface"


// Get a user by id
const getUserById = async (id: string) => {
    try {
        const data = await UserModel.find({ _id: { $eq: id } })
        return data
    } catch (error) {
        return null
    }
}

//  To create a new user
const createNewUser = async (user: UserType) => {
  try {
    const createUser = await new UserModel(user)
    await createUser.save()
    return createUser
  } catch (error) {
    return null
  }
}

// To update a user
const updateUserByID = async (id: string, user: UserType) => {
  try {
    const data = await UserModel.findOneAndUpdate(
      { _id: { $eq: id } },
      { $set: user },
      { returnOriginal: false }
    )

    return data
  } catch (error) {
    return null
  }
}

//  To delete a user
const deleteUserByID = async (id: string) => {
    try {
        const data = await UserModel.deleteOne({ id: { $eq: id } })
        return data
    } catch (error) {
        return null
    }
}

export const UserService = {
  getUserById,
  createNewUser,
  updateUserByID,
  deleteUserByID,
}