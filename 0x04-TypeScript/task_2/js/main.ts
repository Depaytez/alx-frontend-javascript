// Director Interface with 3 expected methods
interface DirectorInterface{
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with 3 expected methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// string literal type Subject
type Subjects = "Math" | "History"
function teachClass(todayClass: Subjects): string{
  if (todayClass === "Math"){
    return "Teaching Math";
  }
  else if (todayClass === "History"){
    return "Teaching History";
  }
  else {
    return "Pls, input a valid subject";
  }
}

// implement class for DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break"
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// implement class for TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function that takes in a string and returns a TeacherInterface or DirectorInterface
function createEmployee(salary: number | string): DirectorInterface | TeacherInterface {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  else {
    return new Director();
  }
}

// create function with type predicate specific to Director
function isDirector(employee: Director | Teacher) : employee is Director {
  return employee instanceof Director;
}

// create function executeWork
function executeWork(employee: Director | Teacher) : string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  else {
    return employee.workTeacherTasks();
  }
}

console.log(createEmployee(200)); // Should return an instance of Teacher
console.log(createEmployee(1000)); // Should return an instance of Director
console.log(createEmployee("500")); // Should return an instance of Director
console.log(createEmployee("$1000")); // Should return an instance of Director
console.log(executeWork(createEmployee(200))); // Should return "Getting to work"
console.log(executeWork(createEmployee(1000))); // Should return "Getting to director tasks"
console.log(teachClass("Math")); // Should return "Teaching Math"
console.log(teachClass("History")); // Should return "Teaching History"

export {Director, Teacher, createEmployee, DirectorInterface, TeacherInterface, teachClass, executeWork, isDirector};