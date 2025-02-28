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

const TagScheama = new Schema({
   title: {
     type:String,
    requierd: true,
    unique :true
   }
})

const contentTypes  = ["image","audio","aricale","video"]
const ContentScheama = new Schema({
        type:{
              type: String,
              enum :contentTypes,
              required :true
        },
        title:{
            type:String,
            required:true
        },
        link:{
              type:String,
              required:true
          },
        tags:[{
              type:mongoose.Types.ObjectId,
              ref:"Tag"
        }],
        userId :{
            type:mongoose.Types.ObjectId,
            red:'User',
            required:true
        }
})

const LinkScheama = new Schema({
    hash:{
      type:String,
      required:true
    },
    userId:{
      type:mongoose.Types.ObjectId,
      ref:'User',
      required:true,
    }
})






export const User = model("User",UserSchema);
export const Tag = model("Tag",TagScheama);
export const Content = model("Content",ContentScheama);
export const Link = model("Link",Link)

export const connectDB =  async()=>{
    await mongoose.connect("mongodb+srv://mayur:Lpd2854455@mayur.oe53n.mongodb.net/Brainly")
}