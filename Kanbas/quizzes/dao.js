import model from "./model.js";

import fs from "fs";

export const createQuiz = (quiz) => {
    delete quiz._id;
    return model.create(quiz);
};

export const findQuizById = async (quizId) => {
    try {
        const quiz = await model.findById(quizId);
        return quiz;
    } catch (error) {
        return null;
    }
};
export const findQuizzesByCourseId = (courseId) => model.find({ course_id: courseId }).sort({ due_date: 1 });
export const findAllQuizzes = () => model.find();
export const updateQuiz = (quizId, quiz) => model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });
