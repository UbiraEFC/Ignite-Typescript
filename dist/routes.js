"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
//  Devemos importar os tipos de request e response
// algumas vezes vamos precisar buscar na documentação da biblioteca a tipagem das variaveis que estamos utilizando 
// o podemos acessar a biblioteca para procurar qual é o tipo
function createCourse(request, response) {
    CreateCourseService_1.default.execute({ name: "NodeJS", duration: 10, educator: "Dani" });
    CreateCourseService_1.default.execute({ name: "ReactJS", educator: "Diego" });
    return response.send();
}
exports.createCourse = createCourse;
