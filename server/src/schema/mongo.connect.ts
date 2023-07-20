import mongoose, { connect } from 'mongoose'

mongoose.set('strictQuery', false)

export const mongoConnect = async () => {
  const connectionString = process.env.MONGODB_DATABASE_URL as string
  try {
    console.log('connection')
    await connect(connectionString)
  } catch (error) {
    throw new Error(error as string)
  }
}
