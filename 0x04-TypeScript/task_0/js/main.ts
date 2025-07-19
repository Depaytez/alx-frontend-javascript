interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ayooluwa",
  lastName: "Oluwaseye",
  age: 25,
  location: "Kwara",
};

const student2: Student = {
  firstName: "Israel",
  lastName: "Kolawole",
  age: 22,
  location: "Kwara",
};

const studentList: Student[] = [student1, student2];

// Create table
const table = document.createElement("table");
const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");

// Add header row
const headerRow = document.createElement("tr");
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
tableHead.appendChild(headerRow);

// Add student rows
studentList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableHead);
table.appendChild(tableBody);

// Add table to document body
document.body.appendChild(table);
