export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.map((obj) => {
    const grades = newGrades.find((grade) => grade.studentId === obj.id);
    const grade = grades ? grades.grade : 'N/A';
    return { ...obj, grade };
  }).filter((obj) => obj.location === city);
}
