"use strict";
/**
 * name - string
 * duration - number
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseServise {
    //Podemos tambem admitir valores defaut para os atributos
    execute({ name, duration = 8, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseServise;
