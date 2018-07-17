const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
        this.clazzes.forEach(clazz => clazz.teachers.push(this));
    }

    introduce() {
        if(this.clazzes.length === 0){
            return super.introduce() + ' I am a Teacher. I teach No Class.'
        }
        let classes_number = [];
        this.clazzes.forEach(element => {
            classes_number.push(element.number);
        });
        return super.introduce() + ' I am a Teacher. I teach Class ' + classes_number.toString() + '.'; 
    }

    isTeaching(student) {
        let mark = false;
        this.clazzes.forEach(clazz => {
            if(clazz.hasStudent(student)){
                mark = true; 
            }
        });
        return mark;
    }

    notifyLeaderAssigned(message) {
        console.log(message);
    }

    notifyStudentAppended(message) {
        console.log(message);
    }
}