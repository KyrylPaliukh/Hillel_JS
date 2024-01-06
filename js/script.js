function Student(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = [];
  this.attendance = new Array(25).fill(undefined);

  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };

  this.getAverageGrade = function () {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  };

  this.present = function () {
    const index = this.attendance.findIndex((status) => status === undefined);
    if (index !== -1) {
      this.attendance[index] = true;
    }
  };

  this.absent = function () {
    const index = this.attendance.findIndex((status) => status === undefined);
    if (index !== -1) {
      this.attendance[index] = false;
    }
  };

  this.summary = function () {
    const averageGrade = this.getAverageGrade();
    const attendanceRatio = this.attendance.filter((status) => status === true).length
      / this.attendance.length;

    if (averageGrade > 90 && attendanceRatio > 0.9) {
      return 'Молодець!';
    } if (averageGrade > 70 || attendanceRatio > 0.7) {
      return 'Добре, але можна краще';
    }
    return 'Редиска!';
  };
}
const student1 = new Student('Кирило', 'Козак', 1991);
const student2 = new Student('Петро', 'Воїн', 1999);

student1.present();
student1.present();
student1.absent();

student1.grades = [95, 87, 92, 88];
student2.grades = [78, 80, 92, 94];

console.log(student1.getAge());
console.log(student2.getAge());

console.log(student1.getAverageGrade());
console.log(student2.getAverageGrade());

console.log(student1.summary());
console.log(student2.summary());
