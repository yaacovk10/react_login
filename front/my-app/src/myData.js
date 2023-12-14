let students = [
    {
      name: "dairy",
      img: "p1.jpg",
    },
    {
      name: "bakery",
      img: "p2.jpg",
    }
   
  ];
  
  export function getStudents() {
    return students;
  }
  
  export function getStudent(name) {
    return students.find((stu) => stu.name === name);
  }
  
  export function deleteStudent(name) {
    students = students.filter((stu) => stu.name !== name);
  }