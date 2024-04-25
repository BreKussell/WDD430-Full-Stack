//Simple function add two numbers
function add(a: number, b: number) {
  return a + b;
}

//Note: doesn't work as a string
//const result = add('2', '5');
const result = add(2, 5);


console.log(result);

//number
let age: number;
age = 12;

//string, 
let userName: string 
userName = 'Mae';

//boolean
let isInstructor: boolean;
isInstructor = true;

//Sting as a array 
let hobbies: string[];
hobbies = ['Piano', 'Cooking', 'Video Gaming'];

//object
type Person = {
  name: string;
  age: number;
};
let person: Person;
person = {
  name: 'Max',
  age: 32,
};

//Note: doesn't work with boolean because it wasn't declared
// person = {
//   isEmployee: false
// };



//doubling up, course can work as a sting and number
let course: string | number = 'Angular- following guide';
course = 1569;

// Functions
//Function that handles numbers
function addNumbers(a: number, b: number) {
  return a + b;
}
//Function that can have any value
function printOutput(value: any) {
  console.log(value);
}

//Generics, where any can work effectively 
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

//Arrays
const demoArray = [1, 2, 3, 4, 5];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');


//Classes
class Student {
  //constructor for student
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}
//follows constructor
const student = new Student('Mae', 'Demo', 20, ['Angular']);
student.enrol('React');
