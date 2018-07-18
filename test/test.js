const assert = require('assert');
const Person = require('../main/practice-1/person');
const Student = require('../main/practice-1/student');

describe('Mocha', function () {
    describe('Person', function () {
        let person;
        before((() => {
            person = new Person("Tom", 21);
        }));

        it('should have field name and age', function () {
            assert.equal(person.name, "Tom");
            assert.equal(person.age, 21);
        });

        it('should have a method introduce, introduce person with name and age', function () {
            let introduce = person.introduce();

            assert.equal(introduce, "My name is Tom. I am 21 years old.");
        });
    });

    describe("Student", () => {
        let student;
        beforeEach(() => {
            student = new Student("Tom", 21, 2);
        });

        it("should have field name, age and class number", () => {
            assert.equal(student.name, "Tom");
            assert.equal(student.age, 21);
            assert.equal(student.klass, 2);
      
          });
      
          it("should overwrite Person introduce, introduce student with class", () => {
            let introduce = student.introduce();
      
            assert.equal(introduce, "My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");
      
          });
    });
});