import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
    const createModule = async (req, res) => {
        const moduleData = {
            ...req.body,
            course: req.params.courseId,
        };
        const module = await dao.createModule(moduleData);
        res.json(module);
    };
    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.moduleId);
        res.json(status);
    };

    const findAllModules = async (req, res) => {
        const modules = await dao.findAllModules();
        res.json(modules);
    };

    const findModuleById = async (req, res) => {
        const module = await dao.findModuleById(req.params.moduleId);
        res.json(module);
    };

    const findModulesByCourse = async (req, res) => {
        const modules = await dao.findModulesByCourse(req.params.courseId);
        res.json(modules);
    };

    const updateModule = async (req, res) => {
        const { moduleId } = req.params;
        const status = await dao.updateModule(moduleId, req.body);
        res.json(status);
    };

    app.post("/api/modules/courses/:courseId", createModule);
    app.get("/api/modules", findAllModules);
    app.get("/api/modules/:moduleId", findModuleById);
    app.get("/api/modules/courses/:courseId", findModulesByCourse);
    app.put("/api/modules/:moduleId", updateModule);
    app.delete("/api/modules/:moduleId", deleteModule);
}
