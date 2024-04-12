import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        course_id: String,
        published: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
            default: "Graded Quiz",
        },
        group: {
            type: String,
            enum: ["Quizzes", "Exams", "Assignments", "Project"],
            default: "Quizzes",
        },
        shuffle_answers: {
            type: Boolean,
            default: true,
        },
        time_limit: {
            type: Number,
            default: 20,
        },
        multiple_attempts: {
            type: Boolean,
            default: false,
        },
        show_correct_answers: {
            type: String,
            enum: ["Never", "After last attempt", "After due date"],
            default: "After last attempt",
        },
        access_code: String,
        one_question_at_a_time: {
            type: Boolean,
            default: true,
        },
        webcam_required: {
            type: Boolean,
            default: false,
        },
        lock_questions_after_answering: {
            type: Boolean,
            default: false,
        },
        due_date: Date,
        available_date: Date,
        available_until_date: Date,
        questions: [
            {
                id: String,
                type: {
                    type: String,
                    enum: ["MULTIPLE_CHOICE", "TRUE_FALSE", "MULTIPLE_FILL_IN_THE_BLANK"],
                },
                title: String,
                points: Number,
                answers: [
                    {
                        text: String,
                        correct: Boolean,
                    }
                ],
            },
        ],
    },
    { collection: "quizzes" }
);

export default quizSchema;
