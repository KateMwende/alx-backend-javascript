export default function createEmployeesObject(departmentName, employees) {
  const deps = { [departmentName]: employees };
  return deps;
}
