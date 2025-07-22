// Teacher interface
interface Teacher{
  readonly firstName : string;
  readonly lastName : string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; //optional property
  location: string;
  [propName: string]: any; //index signature to allow additional properties
}

// director extends teacher
interface Director extends Teacher {
  numberOfReports: number; // property specific to Directors
}

// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
};


// student interface
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentConstructor interface
interface StudentConstructor{
  new(firstName: string, lastName: string) : StudentInterface;
}

//Example of Teacher objects
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Ibiwoye",
  fullTimeEmployee: false,
  yearsOfExperience: 25,
  location: "Kwara",
  contract: true, //additional property
};

const teacher2: Teacher = {
  firstName: "Bosede",
  lastName: "Agbaje",
  fullTimeEmployee: false,
  yearsOfExperience: 20,
  location: "Kwara",
  contract: false, //additional property
};

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  // yearsOfExperience: ,
  location: "Lagos",
  contract: "had an ESPIN contract with the Nigerian Government",
  age: 39,
};

// Example of director objects extending teacher
const director1: Director = {
  firstName: "Taye",
  lastName: "Adekeye",
  fullTimeEmployee: true,
  yearsOfExperience: 30,
  location: "Abuja",
  numberOfReports: 12, //specific property for Director
  contract: true, //additional property
};

const director2 : Director = {
  firstName: "Tinubu",
  lastName: "Bola",
  fullTimeEmployee: true,
  yearsOfExperience: 60,
  location: "Lagos",
  numberOfReports: 100, //specific property for Director
  contract: true, //additional property
};

// Example implementing printTeacherFunction function to print first cahracter of firstname and full last name
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// StudentClass implementation
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName:string, lastName:string){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName
  }
}
const student = new StudentClass("Ayooluwa", "Philip"); //create the instance of student classs implementation

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);
console.log(director1);
console.log(director2);
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Taye", "Daniel")); // Output: T. Daniel
console.log(student.displayName());
console.log(student.workOnHomework());

export { printTeacher, printTeacherFunction, StudentClass, StudentInterface };