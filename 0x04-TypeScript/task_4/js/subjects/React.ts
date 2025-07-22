/// <reference path="./Teacher.ts"/>
/// <reference path="./Subject.ts"/>
/// <reference path = "./Cpp.ts"/>
// import { Subject } from './Subject.ts';

namespace Subjects {
 export interface Teacher {
  experienceTeachingReact?: number;
 }
 export class React extends Subject { 
  getRequirements(): string {
   return "Here is the list of requirements for React"
  }
  getAvailableTeacher(): string {
   if (this.teacher.experienceTeachingReact > 0) {
    return `Here is the list of requirements for React`;
   }
   else {
    return "No available teacher";
   }
  }
 }
}
