import express from 'express'
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import ratelimiter from './middleware/rateLimiter.js'
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

//connectDB();

//middleware
app.use(cors(
    {
        origin:"http://localhost:5173"
    }
))
app.use(express.json())
app.use(ratelimiter)

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
})

//locahost:5001/api/notes
app.use("/api/notes", notesRoutes)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server listening: "+PORT)
    })
})


