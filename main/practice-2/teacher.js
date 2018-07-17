const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name, age, classes) {
        super(name, age);
        this.classes = classes;
    }

    introduce() {
        if(this.classes.length === 0){
            return super.introduce() + ' I am a Teacher. I teach No Class.'
        }
        let classes_number = [];
        this.classes.forEach(element => {
            classes_number.push(element.number);
        });
        return super.introduce() + ' I am a Teacher. I teach Class ' + classes_number.toString() + '.'; 
    }
}