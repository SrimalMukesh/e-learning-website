// const params = new URLSearchParams(window.location.search);
// const course = params.get("course");

// const courses = {
//   js: {
//     title: "JavaScript Development",
//     desc: "Learn JS, DOM, events and projects"
//   },
//   python: {
//     title: "Python",
//     desc: "Learn Python basics, loops, functions"
//   },
//   cpp: {
//     title: "C++ Development",
//     desc: "Learn OOP and problem solving"
//   },
//   java: {
//     title: "Java Development",
//     desc: "Learn Java and backend basics"
//   },
//   sql: {
//     title: "SQL Development",
//     desc: "Learn queries and database design"
//   },
//   html: {
//     title: "HTML",
//     desc: "Learn web structure"
//   },
//   css: {
//     title: "CSS",
//     desc: "Learn styling and responsive design"
//   }
// };

// document.getElementById("title").innerText = courses[course].title;
// document.getElementById("desc").innerText = courses[course].desc;

// function enroll(){
//   localStorage.setItem("enrolledCourse", course);
//   alert("Enrolled Successfully!");
// }

// Get course from URL
// 🔍 Get course from URL
const params = new URLSearchParams(window.location.search);
let course = params.get("course");

// If no course
if(!course){
  alert("No course selected!");
  window.location.href = "service.html";
}

// 📚 Course Data
const courses = {
  js: {
  title: "JavaScript Development",
  desc: "Master JavaScript from basics to advanced with real-world projects.",
  level: "Beginner to Advanced",
  duration: "6 Weeks",
  topics: [
    "1.Introduction to JavaScript",
    "2.Setting up Environment",
    "3.Variables (var, let, const)",
    "4.Data Types",
    "5.Operators",
    "6.Conditional Statements (if, else, switch)",
    "7.Loops (for, while, do-while)",
    "8.Functions",
    "9.Arrow Functions",
    "10.Scope & Closures",
    "11.Arrays and Methods",
    "12.Objects and JSON",
    "13.DOM Manipulation",
    "14.Event Handling",
    "15.Form Validation",
    "16.ES6 Features",
    "17.Promises",
    "18.Async/Await",
    "19.Fetch API",
    "20.Project: To-Do App",
    "21.Project: Weather App"
  ]
},
 python: {
  title: "Python Programming",
  desc: "Learn Python for development, automation, and problem solving.",
  level: "Beginner to Intermediate",
  duration: "5 Weeks",
  topics: [
    "1. Introduction to Python",
    "2. Installing Python & IDE",
    "3. Variables and Data Types",
    "4. Operators",
    "5. Conditional Statements",
    "6. Loops (for, while)",
    "7. Functions",
    "8. Recursion",
    "9. Lists",
    "10. Tuples",
    "11. Sets",
    "12. Dictionaries",
    "13. String Handling",
    "14. File Handling",
    "15. Exception Handling",
    "16. Modules & Packages",
    "17. Object-Oriented Programming",
    "18. Working with APIs",
    "19. Mini Project: Calculator",
    "20. Mini Project: File Organizer"
  ]
},

java: {
  title: "Java Development",
  desc: "Learn Java for building cross-platform and backend applications.",
  level: "Beginner to Advanced",
  duration: "6 Weeks",
  topics: [
    "1. Introduction to Java",
    "2. JDK Setup",
    "3. Variables and Data Types",
    "4. Operators",
    "5. Control Statements",
    "6. Loops",
    "7. Methods",
    "8. Arrays",
    "9. Strings",
    "10. Classes and Objects",
    "11. Constructors",
    "12. Inheritance",
    "13. Polymorphism",
    "14. Encapsulation",
    "15. Abstraction",
    "16. Exception Handling",
    "17. Collections Framework",
    "18. Multithreading",
    "19. File Handling",
    "20. Mini Project: Banking System"
  ]
},

cpp: {
  title: "C++ Development",
  desc: "Master C++ for high-performance programming and problem solving.",
  level: "Beginner to Advanced",
  duration: "6 Weeks",
  topics: [
    "1. Introduction to C++",
    "2. Setup and Compilation",
    "3. Variables and Data Types",
    "4. Operators",
    "5. Control Structures",
    "6. Loops",
    "7. Functions",
    "8. Arrays",
    "9. Strings",
    "10. Pointers",
    "11. Dynamic Memory Allocation",
    "12. Structures",
    "13. Classes and Objects",
    "14. Encapsulation",
    "15. Inheritance",
    "16. Polymorphism",
    "17. File Handling",
    "18. STL (Vectors, Maps)",
    "19. Competitive Programming Basics",
    "20. Project: Student Management System"
  ]
},

html: {
  title: "HTML Development",
  desc: "Learn how to structure web pages using HTML.",
  level: "Beginner",
  duration: "3 Weeks",
  topics: [
    "1. Introduction to HTML",
    "2. Basic Structure",
    "3. Headings and Paragraphs",
    "4. Text Formatting",
    "5. Links",
    "6. Images",
    "7. Lists",
    "8. Tables",
    "9. Forms",
    "10. Input Types",
    "11. Buttons",
    "12. Semantic Tags",
    "13. Audio & Video",
    "14. Iframes",
    "15. Meta Tags",
    "16. SEO Basics",
    "17. Accessibility",
    "18. Best Practices",
    "19. Project: Portfolio Page",
    "20. Project: Landing Page"
  ]
},

css: {
  title: "CSS Development",
  desc: "Style and design beautiful responsive websites.",
  level: "Beginner to Intermediate",
  duration: "4 Weeks",
  topics: [
    "1. Introduction to CSS",
    "2. Selectors",
    "3. Colors",
    "4. Backgrounds",
    "5. Borders",
    "6. Box Model",
    "7. Margin & Padding",
    "8. Display Property",
    "9. Positioning",
    "10. Flexbox",
    "11. Grid Layout",
    "12. Typography",
    "13. Pseudo Classes",
    "14. Animations",
    "15. Transitions",
    "16. Media Queries",
    "17. Responsive Design",
    "18. CSS Variables",
    "19. Best Practices",
    "20. Project: Responsive Website"
  ]
},

sql: {
  title: "SQL Development",
  desc: "Learn database management and queries using SQL.",
  level: "Beginner to Intermediate",
  duration: "4 Weeks",
  topics: [
    "1. Introduction to Databases",
    "2. DBMS vs RDBMS",
    "3. SQL Syntax",
    "4. Creating Tables",
    "5. Data Types",
    "6. INSERT Query",
    "7. SELECT Query",
    "8. WHERE Clause",
    "9. ORDER BY",
    "10. GROUP BY",
    "11. HAVING",
    "12. JOINs (INNER, LEFT, RIGHT)",
    "13. Primary Key",
    "14. Foreign Key",
    "15. Constraints",
    "16. UPDATE Query",
    "17. DELETE Query",
    "18. Indexes",
    "19. Views",
    "20. Mini Project: Student Database"
  ]
}
};

// ❌ Invalid course
const data = courses[course];

if(!data){
  alert("Invalid course!");
  window.location.href = "service.html";
}

// 🎯 Set Title & Description
document.getElementById("title").innerText = data.title;
document.getElementById("desc").innerText = data.desc;

document.getElementById("level").innerText = data.level;
document.getElementById("duration").innerText = data.duration;

// 📌 Topics
const topicList = document.getElementById("topics");
topicList.innerHTML = "";

data.topics.forEach(topic => {
  const li = document.createElement("li");
  li.innerText = topic;
  topicList.appendChild(li);
});

// 🎯 Button Logic (FIXED)
// const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
// const actionBtn = document.getElementById("actionBtn");

// if(enrolledCourses.includes(course)){
//   // ✅ Already enrolled
//   actionBtn.innerText = "My Learning";
//   actionBtn.onclick = function(){
//     window.location.href = "learn.html?course=" + course;
//   };
// } else {
//   // ❌ Not enrolled
//   actionBtn.innerText = "Enroll Now";
//   actionBtn.onclick = enroll;
// }
// 👤 Get current user
const user = localStorage.getItem("loggedInUser");

// 🎯 User-specific courses
const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses_" + user)) || [];

const actionBtn = document.getElementById("actionBtn");

if(enrolledCourses.includes(course)){
  // ✅ Already enrolled
  actionBtn.innerText = "My Learning";
  actionBtn.onclick = function(){
    window.location.href = "learn.html?course=" + course;
  };
} else {
  // ❌ Not enrolled
  actionBtn.innerText = "Enroll Now";
  actionBtn.onclick = enroll;
}


// 🎓 ENROLL FUNCTION
// function enroll(){
//   const user = localStorage.getItem("loggedInUser");

//   if(!user){
//     window.location.href = "login.html?course=" + course;
//   } else {

//     // 🔥 user-specific key
//     let key = "enrolledCourses_" + user;

//     let enrolledCourses = JSON.parse(localStorage.getItem(key)) || [];

//     if(!enrolledCourses.includes(course)){
//       enrolledCourses.push(course);
//     }

//     localStorage.setItem(key, JSON.stringify(enrolledCourses));

//     window.location.href = "learn.html?course=" + course;
//   }
// }
function enroll(){
  const user = localStorage.getItem("loggedInUser");

  if(!user){
    window.location.href = "login.html?course=" + course;
  } else {

    let key = "enrolledCourses_" + user;

    let enrolledCourses = JSON.parse(localStorage.getItem(key)) || [];

    if(!enrolledCourses.includes(course)){
      enrolledCourses.push(course);
    }

    localStorage.setItem(key, JSON.stringify(enrolledCourses));

    window.location.href = "learn.html?course=" + course;
  }
}

function goHome(){
  window.location.href = "index.html";
}

function goCourses(){
  window.location.href = "service.html";
}