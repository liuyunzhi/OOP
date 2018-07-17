// Write your code here
module.exports = class Class { 
    constructor(number) {
        this.number = number;
        this.students = [];
    }

    assignLeader(leader) {
        if(!this.hasStudent(leader)){
            return 'It is not one of us.';
        }
        this.leader = leader;
        return 'Assign team leader successfully.';
    }

    appendMember(student) {
        this.students.push(student);
    }

    hasStudent(student) {
        return this.students.find(element => element === student);
    }
}