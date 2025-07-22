export interface MajorCredits {
  credits: number;
  __brand: 'major';
}

export interface MinorCredits {
  credits: number;
  __brand: "minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "major"
  }; 
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "minor"
  }
}

// Example usage 
const math: MajorCredits = { credits: 3, __brand: 'major' };
const physics: MajorCredits = { credits: 4, __brand: 'major' };
const resultMajor = sumMajorCredits(math, physics);

const music: MinorCredits = { credits: 1, __brand: 'minor' };
const arts: MinorCredits = { credits: 2, __brand: 'minor' };
const resultMinor = sumMinorCredits(music, arts);

console.log('Total Major Credits:', resultMajor.credits);
console.log('Total Minor Credits:', resultMinor.credits);