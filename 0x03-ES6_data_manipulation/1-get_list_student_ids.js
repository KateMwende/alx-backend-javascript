export default function getListStudentIds(ids) {
  if (Array.isArray(ids)) {
    return ids.map((obj) => obj.id);
  }
  return [];
}
