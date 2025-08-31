import { Course } from "./src/models/Course";

export class Student {
  public courses: Course[] = [];

  constructor(public studentID: string, public name: string) {}

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  getAverage(): number {
    if (this.courses.length === 0) return 0;
    const total = this.courses.reduce((sum, c) => sum + c.grade, 0);
    return total / this.courses.length;
  }

  showInfo(): void {
    console.log(`ID: ${this.studentID}, Name: ${this.name}`);
    this.courses.forEach((c) => console.log(`  • ${c.toString()}`));
    console.log(`  GPA: ${this.getAverage().toFixed(2)}`);
    console.log("-".repeat(40));
  }
}
