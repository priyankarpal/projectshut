import express,{Express, Response, Request} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {projectRouter} from './src'
const app:Express = express();
const port = 8000

dotenv.config()
app.use(cors())


app.get('/', (req: Request, res: Response) => {
 console.log(req)
})
app.use('/api/project',projectRouter)
app.use('api/user', userRouter)
app.listen(port,()=>{
 console.log("app is listening on port: ",port)
})

