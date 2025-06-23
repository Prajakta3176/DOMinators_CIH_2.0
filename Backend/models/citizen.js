import {Schema} from 'mongoose';
import mongoose from 'mongoose';

const citizenSchema = new Schema( {
    fullname: { type: String, required: true },
    number: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    // address: { type: String, required: true},
    role: {                   
    type: String,
    default: 'citizen'
  },
    upvotedIssues: [       
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Issue'
    }
  ], 
    
  issuesAdded: [       
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Issue',
      default: []
    }
  ],
  },
  { timestamps: true, minimize: false }
)

const Citizen = mongoose.model("Citizen", citizenSchema);
export default Citizen;