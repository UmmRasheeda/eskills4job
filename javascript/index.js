// let department = "Programming";
// typeof("programming")
// console.log("programming")

// let age =1;
// age=2
// console.log(age)

// let firstname= "Mohammed";
// console.log(firstname)
// let lastname= "Rasheeda";
// console.log(lastname)

// let sum= 200 + 500
// console.log(sum)

// let division= 100/2
// console.log(division)

// let multiplication= 100*100
// console.log(multiplication)
// let y=200
// y *=50;
// y +=200;
// console.log(y)
// // define a variable age and assign the value 19 to it 
// // check if the age is less than 18, "you are not eligible"
// // if the age is between 18 and 50, "you are eligible"
// // if the age is greater than 50, "you are not eligible"
// let age = 19;
// if (age < 18) {
//     console.log("You are  underage, so you are not eligible")
// } else if (age >= 18 && age <= 50) {
// console.log("You are eligible!");
// } else {
// console.log("You are too old, so you are not eligible")
// }

// function greetUser(firstname, lastname) {
//     console.log("Hello " + firstname, lastname);
// }
// greetUser("Rasheeda", "Mohammed");
// greetUser("Mohammed","Ali");
// greetUser("Abdulai", "Aisha");

// write a function that performs an addition with the parameters a,b and logs the result.

// function addition( a, b ){
//     console.log( a+b);
// }
// addition(10, 5)

// let message = 'Hello';
// const greeting = () => {

//     console.log(message);
// }
// greeting()

// let students = ["Christy", "Gloria", "Lois", "sly"];
// console.log(students[2]);
// console.log(students);
// let courses = new Array()
// console.log(students[students.length - 1])

// let numbers = [1, 23, 25, 15, 30, 17, 25, 28]
// console.log(numbers.length);
// console.log(numbers[numbers.length - 2]);

let courses = new Array("Maths", "English", "Science", "Social studies");
console.log(courses);
courses.pop();
console.log(courses);
// adding a course 'Biology' to the courses array
courses.push("Biology");
console.log(courses);
// to find the position of english
console.log(courses.indexOf("English"));

// adding elements to the array
courses.unshift("chemistry", "Physics");
// for loop
for (let i = 0; i < courses.length; i++){
    console.log(i);
    console.log(courses[i]);
}
// to ddetermine the position of maybe two courses.
for (let i = 0; i < courses.length; i+=2){
    console.log(i);
    console.log(courses[i]);
}
// forEach
courses.forEach((course)=>{
    console.log(course);
})