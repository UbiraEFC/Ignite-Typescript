

/**
 * name - string
 * duration - number
 * educator - string
 */

// A interface ajuda a trabalhar com os atributos da mesma forma que trabalhavamos com objetos no .js
interface Course {
    name: string;
    duration?: number; // ?: deixa o atributo como opcional 
    educator: string;
}

class CreateCourseServise {
                    
    //Podemos tambem admitir valores defaut para os atributos
    execute({ name, duration = 8, educator }: Course) {
        console.log(name, duration, educator);
    }
}

export default new CreateCourseServise;