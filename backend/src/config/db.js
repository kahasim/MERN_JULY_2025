import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("CONNECTED TO MONGODB SUCCESSFULLY")
    }
    catch(error){
        console.error("ERROR CONNECTING TO DATABASE:",error)
        process.exit(1) //exit with failure
    }
}