export default function updateStudentGradeByCity(students, city, newGrades) {
  // 1. Filter students by city
  const studentsInCity = students.filter(student => student.location === city);

  // 2. Map over the filtered students and update their grades
  return studentsInCity.map(student => {
    // Find the corresponding newGrade object for the current student
    const newGrade = newGrades.find(grade => grade.studentId === student.id);

    // If a matching newGrade object is found, update the student's grade
    if (newGrade) {
      return {
        ...student,
        grade: newGrade.grade
      };
    } else {
      // If no matching newGrade object is found, set the grade to 'N/A'
      return {
        ...student,
        grade: 'N/A'
      };
    }
  });
}
