function getStudentConstructor() {
  const gradeSettings = {
    min: 0,
    max: 100,
  };

  function checkAttendance(lessonVisited = true, currentLesson, lessonsCount) {
    if (typeof lessonVisited !== 'boolean') throw new Error('Тип даних має бути булевим');
    if (currentLesson >= lessonsCount) return console.log('Не можна додати більше 25 уроків');
    this.attendance[currentLesson] = lessonVisited;
  }

  function setGrade(grade, currentLesson) {
    if (typeof grade !== 'number') throw new Error('Оцінка повинна бути числом');
    if (grade > gradeSettings.max || grade < gradeSettings.min) throw new Error('Не вдається додати оцінку');
    const currentLessonIndex = currentLesson - 1;

    if (!this.attendance[currentLessonIndex]) throw new Error('Неможливо виставити оцінку, учень не був на уроці');
    this.grades[currentLesson - 1] = grade;
  }

  function getAge() {
    if (typeof this.birthYear !== 'number') throw new Error('Рік народження має бути числом');
    return new Date().getFullYear() - this.birthYear;
  }

  return function StudentConstructor(name, surname, birthYear, lessonsCount = 25) {
    let currentLesson = 0;
    return {
      name,
      surname,
      birthYear,
      grades: new Array(lessonsCount),
      attendance: new Array(lessonsCount),
      get currentLesson() {
        return currentLesson;
      },
      getAge() {
        getAge.call(this);
      },
      present() {
        checkAttendance.call(this, true, currentLesson, lessonsCount);
        ++currentLesson;
      },
      absent() {
        checkAttendance.call(this, false, currentLesson, lessonsCount);
        ++currentLesson;
      },
      setGrade(grade) {
        setGrade.call(this, grade, currentLesson);
      },
    };
  };
}

const Student = getStudentConstructor();

const student1 = new Student('Сергій', 'Сергійович', '1991');
student1.present();
student1.present();
student1.absent();
student1.present();
student1.setGrade(20);
console.log(student1);

const student2 = new Student('Петро', 'Петрович', '2000');
student2.present();
student2.setGrade(50);
student2.absent();
student2.absent();
student2.present();
console.log(student2);
