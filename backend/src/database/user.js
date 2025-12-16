import { db } from "./db.js";
import jwt from "jsonwebtoken";  
import { v4 as uuidv4 } from "uuid";
import bcrypt from 'bcrypt'
import {cartMethods} from "./cart.js"

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
  const [alreadyCreatedUser] = await db.execute("select * from users where email= ?",[user.email]);
  
  if(alreadyCreatedUser.length !== 0){
    throw{
      status: 400,
      message: `User with the email ${user.email} already exist`
    }
    
  }
  try {
    const hashedPassword = await bcrypt.hash(user.password,10);
    console.log(hashedPassword);
    
    await db.execute(`INSERT INTO users(id,name, email, password, phone, role)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [uuidv4(),user.name, user.email, hashedPassword, user.phone, user.role]);
    const [row] = await db.execute(`select * from users where email= ?`,[user.email]);
    await db.execute('insert into cart(cart_id,user_id) values(?,?)',[uuidv4(),row[0].id])
    // const payload = {id : row[0].id , name : row[0].name}
    // const token = jwt.sign(payload,process.env.SECRET,{ expiresIn: "1h" })
    //return token;

    
  } catch (error) {
    throw{
      status: 500,
      message: error?.message || error
    };
  }
}

const updateUser = async () => {
  const [rows] = await db.execute("select * from users");
  return rows;
}

const deleteUser = async () => {
  const [rows] = await db.execute("select * from users");
  return rows;
}

const validateUser = async (user) => {

  const [fetchedUser] = await db.execute("select * from users where email= ?",[user.email]);
  if(fetchedUser.length == 0){
    throw{
      status: 400,
      message: `Incorrect user id`
    }
  }
  //console.log(fetchedUser);
  const isValidPassword = await bcrypt.compare(user.password,fetchedUser[0].password)
  if(!isValidPassword){
    throw{
      status: 400,
      message: `Incorrect password`
    }

  }
  try {
    const cartId = cartMethods.getCartId(fetchedUser[0].id);
    const payload = {id : fetchedUser[0].id , cartId : cartId}
    const token = jwt.sign(payload,process.env.SECRET,{ expiresIn: "15m" })
    return token;

    
  } catch (error) {
    throw{
      status: 500,
      message: error?.message || error
    };
  }
}

export const userMethods ={getAllUsers,getOneUser,createUser,updateUser,deleteUser,validateUser} 