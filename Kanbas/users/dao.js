import model from "./model.js";

export const createUser = (user) => {
    delete user._id;
    return model.create(user);
};
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) => model.findOne({ username: username });
export const findUserByCredentials = (username, password) => model.findOne({ username, password });
export const updateUser = async (userId, user) => {
    // Convert date object to string
    if (user.dob) {
        user.dob = new Date(user.dob).toISOString().split("T")[0];
    }
    const response = await model.updateOne({ _id: userId }, { $set: user });
    return response;
};
export const deleteUser = (userId) => model.deleteOne({ _id: userId });
