export default function getStudentIdsSum(students) {
  return students.reduce((acc, ele) => acc + ele.id, 0);
}
