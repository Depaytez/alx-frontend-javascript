/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
// /// <reference path="./subjects/Subject.ts" />
// /// <reference path="./subjects/Teacher.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: "Israel",
  lastName: "Kolawole",
  experienceTeachingC: 10,
};

cpp.teacher = cTeacher;
java.teacher = cTeacher;
react.teacher = cTeacher;

console.log("C++");
console.log(cpp.getRequirements);
console.log(cpp.getAvailableTeacher());

console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
