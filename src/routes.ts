import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

//  Devemos importar os tipos de request e response
// algumas vezes vamos precisar buscar na documentação da biblioteca a tipagem das variaveis que estamos utilizando 
// o podemos acessar a biblioteca para procurar qual é o tipo
export function createCourse (request: Request, response: Response) {

    CreateCourseService.execute({ name:"NodeJS", duration:10, educator:"Dani" });
    CreateCourseService.execute({ name:"ReactJS", educator:"Diego" });


    return response.send();
}