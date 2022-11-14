import connection from "../database.js";

export async function newMovie({name,platform,genre,status}){

    return connection.query(`INSERT INTO movies ("name","platform","gender","status") VALUES ($1,$2,$3,$4)`,[name,platform,genre,status])
}

export async function listMovies(){

    return connection.query(`SELECT * FROM movies`)
}

export async function deleteMovies({id}){

    return connection.query(`DELETE FROM movies WHERE id = $1`, [id])
}

export async function selectMovie({id}){

    return connection.query(`SELECT * FROM movies WHERE id = $1`, [id])
}

export async function putNewStatus({status,id}){

    return connection.query(`UPDATE movies SET status = $1 WHERE id = $2`, [status,id])
}

export async function listMoviesByStatus({status}){

    return connection.query(`SELECT * FROM movies WHERE status = $1`, [status])
}
