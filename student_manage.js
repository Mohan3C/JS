const students = [];

function addStudent(id, name, age) {
    students.push({id,name,age})
}

function removestudents(id) {
    const index = students.findIndex(i => i.id === id);
    
    if (index != -1) {
        students.splice(index, 1);
    }

    console.log("\n\nstudent is removed\n")
}

function findstudent(id) {
    students.find(s => (s.id == id));

    console.log("\n\n\nhere the student\n\n\n")
}

function studentslist() {
    students.forEach(s => console.log(s.id, s.name, s.age));
}


addStudent(1, "aman", 15)
addStudent(2, "mohan", 23)
addStudent(3,"danish",11)
addStudent(4,"danish1",14)
addStudent(5,"danish2",10)
addStudent(6,"danish3",12)
addStudent(7,"danish4",13)
addStudent(8,"danish5",15)
addStudent(9,"danish6",16)
addStudent(10,"danish7",17)
addStudent(11,"danish8",15)
addStudent(12,"danish9",9)
addStudent(13, "danish10", 12)


studentslist()

removestudents(10)
findstudent(4)

studentslist()