//Task 1
function addParamsToRequest(params) {
  let cnt = 0;
  function sendData(data) {
    cnt++;
    return { accessToken: params, data: { ...data }, count: cnt };
  }
  return sendData;
}

const sendData = addParamsToRequest({ accessToken: "qwerty" });
console.log("Output of task 1:");
console.log(sendData({ person: "Charlie Kirk", phenomenon: "Kirkification" }));

//Task 2
const obj = {
  getData: function () {
    console.log(`Person name is: ${this.name} and age ${this.age}`);
  },
};
const res2 = obj.getData.bind({ name: "Viktor", age: 55 });
console.log("Output of task 2:");
res2();

//Task 3
const root = {
  name: "name",
  type: "folder",
  children: [
    {
      name: "folder 1",
      type: "folder",
      children: [
        {
          name: "folder 2",
          type: "folder",
          children: [
            {
              name: "file 3",
              type: "file",
              size: 30,
            },
          ],
        },
      ],
    },
    {
      name: "file 1",
      type: "file",
      size: 10,
    },

    {
      name: "file 2",
      type: "file",
      size: 20,
    },
  ],
};

function showNames(obj) {
  let result = [];
  function searchFileNames(obj) {
    obj.forEach((element) => {
      if (element.type == "folder") {
        searchFileNames(element.children);
      }
      if (element.type == "file") {
        result.push(element.name);
      }
    });
  }

  searchFileNames(obj.children);
  return result;
}
console.log("Output of task 3:");
console.log(showNames(root));

//Task 4
//--------------------------------------------------ES5 variant-----------------------------------
// function Human(name, phone) {
//   this.name = name;
//   this.phone = phone;
// }

// Human.prototype.introduce = function () {
//   console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}`);
// };

// function Student(name, phone, course) {
//   Human.call(this, name, phone);
//   this.course = course;
// }

// Student.prototype = Object.create(Human.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.study = function () {
//   console.log(`Я навчаюся на ${this.course} курсі`);
// };

// function Teacher(name, phone, subject) {
//   Human.call(this, name, phone);
//   this.subject = subject;
// }

// Teacher.prototype = Object.create(Human.prototype);
// Teacher.prototype.constructor = Teacher;
// Teacher.prototype.teach = function () {
//   console.log(`Я викладаю ${this.subject}`);
// };

//--------------------------------------------------ES6 variant-----------------------------------
class Human {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
  introduce() {
    console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}`);
  }
}

class Student extends Human {
  constructor(name, phone, course) {
    super(name, phone);
    this.course = course;
  }
  study() {
    console.log(`Я навчаюся на ${this.course} курсі`);
  }
}

class Teacher extends Human {
  constructor(name, phone, subject) {
    super(name, phone);
    this.subject = subject;
  }
  teach() {
    console.log(`Я викладаю ${this.subject}`);
  }
}
const exampleStudent = new Student("P. Diddy", "00000000002", "Philosophy");
const exampleTeacher = new Teacher(
  "Jeffry Epstein",
  "00000000001",
  "Philosophy"
);
console.log("Task 4 output:");
exampleStudent.introduce();
exampleTeacher.introduce();
exampleStudent.study();
exampleTeacher.teach();
