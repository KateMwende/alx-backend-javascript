export default function getStudentIdsSum(list) {
  return list.reduce((total, obj) => obj.id + total, 0);
}
