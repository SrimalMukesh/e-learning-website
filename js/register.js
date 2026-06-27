function register(){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 📦 get existing users
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // ❌ check if user already exists
  const exists = users.find(u => u.username === username);

  if(exists){
    alert("User already exists!");
    return;
  }

  // ✅ add new user
  users.push({ username, password });

  // 💾 save back
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered Successfully!");
  window.location.href = "login.html";
}