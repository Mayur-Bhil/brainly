import mongoose, { model,Schema  } from "mongoose"


const UserSchema = new Schema({
    username :{
        type:String,
        unique :true,
        required :true
    },
    password:{
      type:String,
      required :true
    }
})









export const User = new model("User",UserSchema);

export const connectDB =  async()=>{
    await mongoose.connect("mongodb+srv://mayur:Lpd2854455@mayur.oe53n.mongodb.net/Brainly")
}