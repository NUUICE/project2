export class Course {
  constructor(public name: string, public grade: number) {}

  toString(): string {
    return `${this.name}(${this.grade})`;
  }
}
