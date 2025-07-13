const course = {
    name : "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// const {courseInstructor} = course;

// console.log(courseInstructor); // Output: Hitesh

const {courseInstructor : Instructor} = course;

console.log(Instructor); // Output: Hitesh



//Some talk about API
// const courseApi = {
//     "name" : "Hitesh",
//     "price" : "free",
//     "courseName" : "JS in Hindi"
// }

//Array of objects
[
    {},
    {},
    {}
]