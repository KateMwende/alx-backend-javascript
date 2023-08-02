interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attribute: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
};

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}
interface studentInfo {
  firstName: string;
  lastName: string;
}
class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(studentInfo: studentInfo) {
      this.firstName = studentInfo.firstName;
      this.lastName = studentInfo.lastName;
    };
    workOnHomework(): string {
      return 'Currently working'
    }
    displayName(): string {
      return this.firstName;
    }
}
