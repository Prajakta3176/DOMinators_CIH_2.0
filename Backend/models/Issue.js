import {Schema} from 'mongoose';
import mongoose from 'mongoose';


const IssueSchema = new Schema({
    title:{type: String, required:true, unique:true},
    description:{type: String, required:true},
    category:{
        type:String,
        default:"Others",
        enum:["Road","Drainage","Potholes","Electricity","Others"]
    },
    coordinates: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true } // [longitude, latitude]
  },
    city: {type:String, required:true},
    citizen: {
      type: mongoose.Types.ObjectId,
      ref: "Citizen",
      required: true
    },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "In Progress", "Resolved"],
    },
    upvotes: {
      type: Number,
      default: 0
    },
    
},
 { timestamps: true, minimize: false })


const Issue = mongoose.model("Issue",IssueSchema);
export default Issue;