const course = {
    name : "JS in Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

console.log(course.courseInstructor); // Output: Hitesh

// const {courseInstructor} = course;

// console.log(courseInstructor); // Output: Hitesh

const {courseInstructor : Instructor} = course;

console.log(Instructor); // Output: Hitesh



//Some talk about API
//All KEYS and VALUES are in string format
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