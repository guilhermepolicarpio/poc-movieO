import connection from "../database.js";

export async function newMovie({name,idPlatform,gender,status}){
    console.log("newwwwr")
    return connection.query(`INSERT INTO movies ("name","idPlatform","gender","status") VALUES ($1,$2,$3,$4)`,[name,idPlatform,gender,status])
}