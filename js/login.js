// function login(){
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   const user = JSON.parse(localStorage.getItem("user"));

//   if(user && username === user.username && password === user.password){
//     localStorage.setItem("loggedInUser", username);

//     alert("Login Successful!");

//     // 🔥 get course from URL
//     const params = new URLSearchParams(window.location.search);
//     const course = params.get("course");

//     // 🔥 redirect properly
//     if(course){
//       window.location.href = "course.html?course=" + course;
//     } else {
//       window.location.href = "index.html";
//     }

//   } else {
//     alert("Invalid Credentials!");
//   }
// }

function login(){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 📦 get all users
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // 🔍 find matching user
  const validUser = users.find(
    u => u.username === username && u.password === password
  );

  if(validUser){
    localStorage.setItem("loggedInUser", username);

    alert("Login Successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid Credentials!");
  }
}