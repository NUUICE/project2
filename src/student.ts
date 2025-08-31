import { Course } from "./course";

export class Student {
  constructor(
    public studentID: number,
    public name: string,
    public courses: Course[] = []
  ) {}

  addCourse(course: Course) { this.courses.push(course); }

  getAverage(): number {
    if (this.courses.length === 0) return 0;
    return this.courses.reduce((s, c) => s + c.grade, 0) / this.courses.length;
  }

  printInfo() {
    console.log(`StudentID: ${this.studentID}, Name: ${this.name}`);
    console.log("Courses:");
    this.courses.forEach(c => console.log(`  - ${c.name}: ${c.grade}`));
    console.log(`Average Grade: ${this.getAverage().toFixed(2)}\n`);
  }
}
