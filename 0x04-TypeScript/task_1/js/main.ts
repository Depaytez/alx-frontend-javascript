interface Teacher{
  readonly firstName : string;
  readonly lastName : string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; //optional property
  location: string;
  [key: string]: any; //index signature to allow additional properties
}

//Example of a Teacher object
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

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);