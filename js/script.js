class Student {
  constructor(name, surname, birthYear, lessonsCount = 25) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.grades = new Array(lessonsCount);
    this.attendance = new Array(lessonsCount);
    this.currentLesson = 0;
  }

  checkAttendance(lessonVisited = true) {
    if (typeof lessonVisited !== 'boolean') {
      throw new Error('Тип даних має бути булевим');
    }
    if (this.currentLesson >= this.attendance.length) {
      console.log('Не можна додати більше уроків');
      return;
    }
    this.attendance[this.currentLesson] = lessonVisited;
    this.currentLesson++;
  }

  setGrade(grade) {
    if (typeof grade !== 'number') {
      throw new Error('Оцінка повинна бути числом');
    }
    if (grade < 0 || grade > 100) {
      throw new Error('Оцінка повинна бути в межах від 0 до 100');
    }
    const currentLessonIndex = this.currentLesson - 1;
    if (!this.attendance[currentLessonIndex]) {
      throw new Error('Неможливо виставити оцінку, учень не був на уроці');
    }
    this.grades[currentLessonIndex] = grade;
  }

  getAge() {
    if (typeof this.birthYear !== 'number') {
      throw new Error('Рік народження має бути числом');
    }
    return new Date().getFullYear() - this.birthYear;
  }

  summary() {
    const averageGrade = this.calculateAverage(this.grades);
    const averageAttendance = this.calculateAverage(this.attendance.map((attended) => (attended ? 1 : 0)));

    if (averageGrade > 90 && averageAttendance > 0.9) {
      return 'Молодець!';
    } if (averageGrade > 70 || averageAttendance > 0.7) {
      return 'Добре, але можна краще';
    }
    return 'Редиска!';
  }

  calculateAverage(arr) {
    const sum = arr.reduce((total, value) => total + value, 0);
    return sum / arr.length;
  }
}

const student1 = new Student('Сергій', 'Сергійович', 1991);
student1.checkAttendance();
student1.checkAttendance();
student1.checkAttendance(false);
student1.checkAttendance();
student1.setGrade(20);
console.log(student1);

const student2 = new Student('Петро', 'Петрович', 2000);
student2.checkAttendance();
student2.setGrade(50);
student2.checkAttendance(false);
student2.checkAttendance(false);
student2.checkAttendance();
console.log(student2);
