// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
interface Student { //interface to set datatypes
 firstName: string;
 lastName: string;
 age: number;
 location :string;
}

// Create two students, and create an array named studentsList containing the two variables
const student1: Student = { //student1
 firstName: "Ayooluwa",
 lastName: "Oluwaseye",
 age: 24,
 location: "Ilorin"
};

const student2: Student = { //student2
 firstName: "Israel",
 lastName: "Kolawole",
 age: 22,
 location: "Lagos"
};

const studentsList: Student[] = [student1, student2]; //array of students

// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location
const table = document.createElement("table"); //creates HTML table element

// Add table header
const headerRow = document.createElement("tr"); 
const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// populate table with student data
studentsList.forEach((student) => {
 const row = document.createElement("tr"); //creates a new row for each student
 const nameCell = document.createElement("td"); //creates a new cell for the first name
 nameCell.textContent = student.firstName; //sets the text content of the cell to the student's first name
 const locationCell = document.createElement("td");
 locationCell.textContent = student.location;

 row.appendChild(nameCell);
 row.appendChild(locationCell);
 table.appendChild(row);
});

// Append table to the body
document.body.appendChild(table);