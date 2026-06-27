// const user = localStorage.getItem("loggedInUser");
// const course = localStorage.getItem("enrolledCourse");

// // If not logged in → redirect
// if(!user){
//   alert("Please login first!");
//   window.location.href = "login.html";
// }

// // Welcome message
// document.getElementById("welcome").innerText = "Welcome, " + user;

// // Show course
// if(course){
//   document.getElementById("course").innerText = course.toUpperCase();
// } else {
//   document.getElementById("course").innerText = "No course enrolled";
// }

// // Progress (simple logic)
// let progress = localStorage.getItem("progress_" + course);

// if(!progress){
//   progress = "20%";
//   localStorage.setItem("progress_" + course, progress);
// }

// document.getElementById("progress").innerText = progress;

// // Logout
// function logout(){
//   localStorage.removeItem("loggedInUser");
//   alert("Logged out!");
//   window.location.href = "index.html";
// }

// const dashboardItem = document.querySelector('a[href="dashboard.html"]').parentElement;

// if(user){
//   dashboardItem.style.display = "inline-block";
// } else {
//   dashboardItem.style.display = "none";
// }

// 🔐 Check login
const user = localStorage.getItem("loggedInUser");

if(!user){
  alert("Please login first!");
  window.location.href = "login.html";
}

// 👋 Welcome message
document.getElementById("welcome").innerText = "Welcome, " + user;


// 📦 Get all enrolled courses (ARRAY)
const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses_" + user)) || [];

// 📍 Container
const container = document.getElementById("dashboardCourses");

// 🎯 Course names
const courseNames = {
  js: "JavaScript",
  python: "Python",
  java: "Java",
  cpp: "C++",
  html: "HTML",
  css: "CSS",
  sql: "SQL"
};


// ❌ If no courses
if(enrolledCourses.length === 0){
  container.innerHTML = "<p>No courses enrolled</p>";
}


// ✅ Show all enrolled courses
// enrolledCourses.forEach(course => {

//   const div = document.createElement("div");
//   div.style.border = "1px solid #ccc";
//   div.style.padding = "10px";
//   div.style.margin = "10px";
//   div.style.borderRadius = "8px";

//   // 📌 Title
//   const title = document.createElement("h3");
//   title.innerText = courseNames[course];

//   // 📊 Progress
//   let progress = localStorage.getItem("progress_" + user + "_" + course);

//   if(!progress){
//     progress = "20%"; // default
//     localStorage.setItem("progress_" + user + "_" + course, progress);
//   }

//   const progressText = document.createElement("p");
//   progressText.innerText = "Progress: " + progress;

//   // ▶️ Button
//   const btn = document.createElement("button");
//   btn.innerText = "Continue Learning";
//   btn.onclick = function(){
//     window.location.href = "learn.html?course=" + course;
//   };

//   // 📦 Append
//   div.appendChild(title);
//   div.appendChild(progressText);
//   div.appendChild(btn);

//   container.appendChild(div);
// });

enrolledCourses.forEach(course => {

  const div = document.createElement("div");
  div.className = "course-card";

  const title = document.createElement("h3");
  title.innerText = courseNames[course];

  // 📊 Progress
  let progress = localStorage.getItem("progress_" + user + "_" + course);

  if(!progress){
    progress = 0;
    localStorage.setItem("progress_" + user + "_" + course, progress);
  }

  // Progress bar
  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";

  const fill = document.createElement("div");
  fill.className = "progress-fill";
  fill.style.width = progress + "%";

  progressBar.appendChild(fill);

  const progressText = document.createElement("p");
  progressText.className = "progress-text";
  progressText.innerText = "Progress: " + progress + "%";

  const btn = document.createElement("button");
  btn.innerText = "Continue Learning";
  btn.onclick = function(){
    window.location.href = "learn.html?course=" + course;
  };

  div.appendChild(title);
  div.appendChild(progressBar);
  div.appendChild(progressText);
  div.appendChild(btn);

  container.appendChild(div);
});

const ctx = document.getElementById("progressChart").getContext("2d");

let labels = [];
let data = [];

enrolledCourses.forEach(course => {

  let progress = localStorage.getItem("progress_" + user + "_" + course);

  if(!progress){
    progress = 20;
  }

  labels.push(courseNames[course]);
  data.push(parseInt(progress));
});

new Chart(ctx, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [{
      label: "Course Progress",
      data: data,
      backgroundColor: [
        "#4facfe",
        "#00f2fe",
        "#43e97b",
        "#fa709a",
        "#fddb92",
        "#a18cd1",
        "#ff9a9e"
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  }
});

function goCourses(){
  window.location.href = "service.html";
}

// 🚪 Logout
function logout(){
  localStorage.removeItem("loggedInUser");
  alert("Logged out!");
  window.location.href = "index.html";
}
function goHome() {
  window.location.href = "index.html";
}
//donut
new Chart(document.getElementById("donutChart"), {
  type: "doughnut",
  data: {
    labels: enrolledCourses.map(c => courseNames[c]),
    datasets: [{
      data: enrolledCourses.map(c => {
        return parseInt(localStorage.getItem("progress_" + user + "_" + c)) || 0;
      }),
      backgroundColor: ["#4facfe", "#00f2fe", "#43e97b", "#fa709a", "#fddb92"]
    }]
  }
});

//line chart
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: enrolledCourses.map(c => courseNames[c]),
    datasets: [{
      label: "Progress Trend",
      data: enrolledCourses.map(c => {
        return parseInt(localStorage.getItem("progress_" + user + "_" + c)) || 0;
      }),
      borderColor: "#4facfe",
      fill: false,
      tension: 0.4
    }]
  }
});

//barchart
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: enrolledCourses.map(c => courseNames[c]),
    datasets: [{
      label: "Course Progress",
      data: enrolledCourses.map(c => {
        return parseInt(localStorage.getItem("progress_" + user + "_" + c)) || 0;
      }),
      backgroundColor: "#43e97b"
    }]
  }
});r