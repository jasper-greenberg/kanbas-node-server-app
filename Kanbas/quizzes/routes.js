import * as dao from "./dao.js";

export default function QuizRoutes(app) {
    const createQuiz = async (req, res) => {
        const user = await dao.createQuiz(req.body);
        res.json(user);
    };

    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteUser(req.params.userId);
        res.json(status);
    };

    const findQuizById = async (req, res) => {};

    const findQuizzesByCourseId = async (req, res) => {
        const quizzes = await dao.findQuizzesByCourseId(req.params.courseId);
        res.json(quizzes);
    }

    const findAllQuizzes = async (req, res) => {
        const quizzes = await dao.findAllQuizzes();
        res.json(quizzes);
    };

    const updateQuiz = async (req, res) => {
        const { userId } = req.params;
        const status = await dao.updateQuiz(userId, req.body);
        const currentUser = await dao.findQuizById(userId);
        res.json(status);
    };

    app.post("/api/quizzes", createQuiz);
    app.get("/api/quizzes/:quizId", findQuizById);
    app.get("/api/quizzes/courses/:courseId", findQuizzesByCourseId);
    app.get("/api/quizzes", findAllQuizzes);
    app.put("/api/quizzes/:quizId", updateQuiz);
    app.delete("/api/quizzes/:quizId", deleteQuiz);
}
