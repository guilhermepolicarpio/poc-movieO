import connection from "../database.js";

export async function newMovie({name,idPlatform,gender,status}){

    return connection.query(`INSERT INTO movies ("name","idPlatform","gender","status") VALUES ($1,$2,$3,$4)`,[name,idPlatform,gender,status])
}

export async function listMovies(){

    return connection.query(`SELECT * FROM movies`)
}