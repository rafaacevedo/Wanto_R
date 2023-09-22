import { createPool } from "mysql2/promise";


export const pool = createPool({
   host:"192.168.12.20",
   user:"root",
   port:3306,
   password:"",
   database:"wanto"
});

export const SECRET = "CLAVESUPERSECRETA"