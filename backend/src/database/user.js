import { db } from "./db.js"; 

const getAllUsers = async () => {
  const [rows] = await db.execute("select * from users");
  return rows;
}

const getOneUser = async (userId) => {
  const [row] = await db.execute(`select * from users where id=${userId}`);
  return row;
}

const createUser = async (user) => {
  console.log(user);
  await db.execute(`INSERT INTO users(name, email, password, phone, role)
     VALUES (?, ?, ?, ?, ?)`,
    [user.name, user.email, user.password, user.phone, user.role]);
  const [row] = await db.execute(`select * from users where name= ?`,[user.name]);
  return row;
}

const updateUser = async () => {
  const [rows] = await db.execute("select * from users");
  return rows;
}

const deleteUser = async () => {
  const [rows] = await db.execute("select * from users");
  return rows;
}
export const userMethods ={getAllUsers,getOneUser,createUser,updateUser,deleteUser} 