import {Schema} from 'mongoose';
import mongoose from 'mongoose';

const govSchema = new Schema( {
    fullname: { type: String, required: true },
    number: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    email :{type: String, required: true},
    department: {
    type: String,
    enum: ["Road", "Drainage", "Electricity", "Water Supply", "Garbage Collection","Others"],
    required: true
  },
  city:{type : String , required:true},
    role: {                   
    type: String,
    default: 'government'
  }
  },
  { timestamps: true, minimize: false }
)

const Government = mongoose.model("Government", govSchema);
export default Government;