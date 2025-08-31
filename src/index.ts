import { Student } from "./student";
import { Course } from "./course";

const students: Student[] = [
  new Student(1, "Alice", [
    new Course("Math", 3.5),
    new Course("Science", 3.0),
    new Course("History", 2.7),
    new Course("English", 3.8),
  ]),
  new Student(2, "Bob", [
    new Course("Math", 2.5),
    new Course("Science", 2.8),
    new Course("History", 3.2),
    new Course("English", 3.0),
  ]),
  new Student(3, "Charlie", [
    new Course("Math", 3.9),
    new Course("Science", 4.0),
    new Course("History", 3.7),
    new Course("English", 3.8),
  ]),
];

console.log("=== ก่อนเพิ่มวิชา ===\n");
students.forEach(s => s.printInfo());

students[0].addCourse(new Course("Art", 3.2));
students[1].addCourse(new Course("Programming", 3.7));
students[2].addCourse(new Course("Economics", 3.5));

console.log("=== หลังเพิ่มวิชา ===\n");
students.forEach(s => s.printInfo());
