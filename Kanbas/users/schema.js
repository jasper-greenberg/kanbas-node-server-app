import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        firstName: String,
        email: String,
        lastName: String,
        dob: Date,
        role: {
            type: String,
            enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
            default: "USER",
        },
        courses: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "courses",
            },
        ],
    },
    { collection: "users" }
);

export default userSchema;
