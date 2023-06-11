import { UserModel } from "../models/user.model.js";
import { createToken } from "../utils/jwt.js";

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({
    where: {
      username: username,
      password: password,
    },
  });
  if (!user) {
    return res.status(401).json({ message: "null" });
  }
  const token = createToken({
    id: user.id,
    username: user.username,
  });
  return res.json({ token });
};

export const register = async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.create({ username, password });
  return res.json(user);
};
