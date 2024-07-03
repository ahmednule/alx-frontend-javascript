interface Student {
firstName:string;
lastName:string;
age:number;
location:string;
}

const student1: Student = {
firstName:"Ahmed",
lastName:"Nule",
age:29,
location:"Nairobi",
};

const student2: Student = {
firstName:"Seif",
lastName:"Maitha",
age:15,
location:"Adams",
};

const studentsList: Student[] = [student1,student2];
const tableBody = document.createElement('tbody');
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = `${student.firstName}`;
  locationCell.textContent = `${student.location}`;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

const table = document.createElement('table');
table.appendChild(tableBody);
document.body.appendChild(table);
