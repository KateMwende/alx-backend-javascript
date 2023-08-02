interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Kate', 
  lastName: 'Mwende',
  age: 29,
  location: 'Nairobi',
}

const student2: Student = {
  firstName: 'Lillian', 
  lastName: 'Dina',
  age: 32,
  location: 'Machakos',
}
const studentsList: Student[] = [student1, student2];

function renderTable() {
  const table = document.createElement("table");

  studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNamecell = document.createElement('td');
    const locationCell = document.createElement('td');
  
    firstNamecell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNamecell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
  renderTable();
}

