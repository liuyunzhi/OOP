// Write your code here
module.exports = class Class { 
    constructor(number) {
        this.number = number;
        this.students = [];
        this.teachers = [];
    }

    assignLeader(leader) {
        if(!this.hasStudent(leader)){
            return 'It is not one of us.';
        }
        this.leader = leader;
        this.teachers.forEach(teacher => 
            teacher.notifyLeaderAssigned(leader.name + " become Leader of Class " + this.number));
        return 'Assign team leader successfully.';
    }

    appendMember(student) {
        this.students.push(student);
        this.teachers.forEach(teacher => 
            teacher.notifyStudentAppended(student.name + " has joined Class " + this.number));
    }

    hasStudent(student) {
        return this.students.includes(student);
    }
}