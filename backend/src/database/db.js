import mysql from "mysql2/promise"
export const db = await mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'comp1234',
  database:'ecommerce_website_mysql'
})
