/// <reference path = "./Teacher.ts"/>
/// <reference path = "./Subject.ts"/>

namespace Subjects {
 export interface Teacher {
  experienceTeachingJava?: number;
 }
 export class Java extends Subject {
  getRequirements(): string {
   if (this.teacher.experienceTeachingJava > 0) {
    return "Here is the list of requirements for Java";
   }
   else {
    return "No available teacher";
   }
  }
 }
}