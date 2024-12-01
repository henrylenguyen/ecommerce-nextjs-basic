import { EUserRole, EUserStatus } from "@/types/enums";
import { Schema } from "mongoose";
import { Document } from "mongoose";

interface IUser extends Document {
  clerkId: string;
  email: string;
  name: string;
  username: string;
  avatar: string;
  status: EUserStatus;
  role: EUserRole;
  courses: Schema.Types.ObjectId[]; // để liên kết khóa ngoại với course
  createdAt: Date;
  updatedAt: Date;
}

export default IUser;