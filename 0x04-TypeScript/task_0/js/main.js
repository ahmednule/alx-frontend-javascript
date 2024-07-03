var student1 = {
    firstName: "Ahmed",
    lastName: "Nule",
    age: 29,
    location: "Nairobi",
};
var student2 = {
    firstName: "Seif",
    lastName: "Maitha",
    age: 15,
    location: "Adams",
};
var studentsList = [student1, student2];
var tableBody = document.createElement('tbody');
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = "".concat(student.firstName);
    locationCell.textContent = "".concat(student.location);
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});
var table = document.createElement('table');
table.appendChild(tableBody);
document.body.appendChild(table);
