// // Get course
// const params = new URLSearchParams(window.location.search);
// const course = params.get("course");

// // Course videos (multiple now 🔥)
// const courses = {
//   js: {
//     title: "JavaScript",
//     videos: [
//       "https://www.youtube.com/embed/W6NZfCO5SIk",
//       "https://www.youtube.com/embed/hdI2bqOjy3c",
//       "https://www.youtube.com/embed/PkZNo7MFNFg"
//     ]
//   },
//   python: {
//     title: "Python",
//     videos: [
//       "https://www.youtube.com/embed/_uQrJ0TkZlc",
//       "https://www.youtube.com/embed/rfscVS0vtbw"
//     ]
//   },
//   cpp: {
//     title: "C++",
//     videos: [
//       "https://www.youtube.com/embed/vLnPwxZdW4Y"
//     ]
//   }
// };

// const data = courses[course];

// // Title
// document.getElementById("title").innerText = data.title;

// // Grid Videos
// const container = document.getElementById("videoContainer");

// data.videos.forEach(video => {
//   const iframe = document.createElement("iframe");
//   iframe.src = video;
//   iframe.width = "300";
//   iframe.height = "200";
//   container.appendChild(iframe);
// });

const user = localStorage.getItem("loggedInUser");

const params = new URLSearchParams(window.location.search);
const course = params.get("course");

// 📚 Course Data (same as course.js but add videos)
const courses = {
  js: {
    title: "JavaScript Development",
    topics: [
      "Intro", "Variables", "Data Types", "Operators", "Conditions",
      "Loops", "Functions", "Arrays", "Objects", "DOM",
      "Events", "Forms", "ES6", "Promises", "Async/Await",
      "Fetch API", "Error Handling", "Project 1", "Project 2", "Project 3"
    ],
    videoList: [
      "https://www.youtube.com/embed/W6NZfCO5SIk",
      "https://www.youtube.com/embed/PkZNo7MFNFg",
      "https://www.youtube.com/embed/hdI2bqOjy3c",
      "https://www.youtube.com/embed/2Ji-clqUYnA",
      "https://www.youtube.com/embed/8dWL3wF_OMw",
      "https://www.youtube.com/embed/srvUrASNj0s",
      "https://www.youtube.com/embed/3PHXvlpOkf4",
      "https://www.youtube.com/embed/Oive66jrwBs",
      "https://www.youtube.com/embed/f02mOEt11OQ",
      "https://www.youtube.com/embed/TlB_eWDSMt4",
      "https://www.youtube.com/embed/NCwa_xi0Uuc",
      "https://www.youtube.com/embed/IsG4Xd6LlsM",
      "https://www.youtube.com/embed/poo0BXryffI",
      "https://www.youtube.com/embed/rRgD1yVwIvE",
      "https://www.youtube.com/embed/3mYHRrH_NYg",
      "https://www.youtube.com/embed/cCOL7MC4Pl0",
      "https://www.youtube.com/embed/8aGhZQkoFbQ",
      "https://www.youtube.com/embed/cuEtnrL9-H0",
      "https://www.youtube.com/embed/0ik6X4DJKCc",
      "https://www.youtube.com/embed/1Rs2ND1ryYc"
    ]
  },
    python: {
  title: "Python Programming",
  topics: [
    "Intro", "Setup", "Variables", "Data Types", "Operators",
    "Conditions", "Loops", "Functions", "Recursion", "Lists",
    "Tuples", "Sets", "Dictionaries", "Strings", "Files",
    "Exceptions", "Modules", "OOP", "Project 1", "Project 2"
  ],
  videoList: [
    "https://www.youtube.com/embed/_uQrJ0TkZlc",
    "https://www.youtube.com/embed/rfscVS0vtbw",
    "https://www.youtube.com/embed/kqtD5dpn9C8",
    "https://www.youtube.com/embed/Y8Tko2YC5hA",
    "https://www.youtube.com/embed/HGOBQPFzWKo",
    "https://www.youtube.com/embed/JJmcL1N2KQs",
    "https://www.youtube.com/embed/XKHEtdqhLK8",
    "https://www.youtube.com/embed/Z1Yd7upQsXY",
    "https://www.youtube.com/watch?v=rfscVS0vtbw",
"https://www.youtube.com/watch?v=_uQrJ0TkZlc",
"https://www.youtube.com/watch?v=H2EJuAcrZYU",
"https://www.youtube.com/watch?v=WGJJIrtnfpk",
"https://www.youtube.com/watch?v=8DvywoWv6fI",
"https://www.youtube.com/watch?v=6i3EGqOBRiU",
"https://www.youtube.com/watch?v=kqtD5dpn9C8",
"https://www.youtube.com/watch?v=3cZsjOclu7Y",
"https://www.youtube.com/watch?v=YYXdXT2l-Gg",
    "https://www.youtube.com/embed/5qap5aO4i9A",
    "https://www.youtube.com/embed/8DvywoWv6fI",
    "https://www.youtube.com/embed/6iF8Xb7Z3wQ"
  ]
},
cpp: {
  title: "C++ Development",
  topics: [
    "Intro", "Setup", "Variables", "Data Types", "Operators",
    "Conditions", "Loops", "Functions", "Arrays", "Strings",
    "Pointers", "Structures", "Classes", "Inheritance", "Polymorphism",
    "File Handling", "STL", "DSA Basics", "Project 1", "Project 2"
  ],
  videoList: [
    "https://www.youtube.com/embed/vLnPwxZdW4Y",
    "https://www.youtube.com/embed/ZzaPdXTrSb8",
    "https://www.youtube.com/embed/1v_4dL8lYGo",
    "https://www.youtube.com/embed/8jLOx1hD3_o",
    "https://www.youtube.com/embed/6y0bp-mnYU0",
    "https://www.youtube.com/embed/B31LgI4Y4DQ",
    "https://www.youtube.com/embed/KJgsSFOSQv0",
    "https://www.youtube.com/embed/t2CEgPsws3U",
    "https://www.youtube.com/embed/GQp1zzTwrIg",
    "https://www.youtube.com/embed/WQoB2z67hvY",
    "https://www.youtube.com/embed/Rub-JsjMhWY",
    "https://www.youtube.com/embed/6hfOvs8pY1k",
    "https://www.youtube.com/embed/3qW4vJw8x2o",
    "https://www.youtube.com/embed/6z7j3e6x8xA",
    "https://www.youtube.com/embed/X5pP1c5Y3Wg",
    "https://www.youtube.com/embed/q5zq3e5Y8Zk",
    "https://www.youtube.com/embed/9R9G1K0n4H8",
    "https://www.youtube.com/embed/5u9u4Q3b1pM",
    "https://www.youtube.com/embed/7UuK7Y0lY2Q",
    "https://www.youtube.com/embed/z8tq1v0r0c0"
  ]
},
java: {
  title: "Java Development",
  topics: [
    "Intro", "JDK Setup", "Variables", "Data Types", "Operators",
    "Conditions", "Loops", "Methods", "Arrays", "Strings",
    "Classes", "Constructors", "Inheritance", "Polymorphism", "Encapsulation",
    "Abstraction", "Exceptions", "Collections", "Threads", "Project"
  ],
  videoList: [
    "https://www.youtube.com/embed/eIrMbAQSU34",
    "https://www.youtube.com/embed/grEKMHGYyns",
    "https://www.youtube.com/embed/UmnCZ7-9yDY",
    "https://www.youtube.com/embed/GoXwIVyNvX0",
    "https://www.youtube.com/embed/VB6SIKl8Md0",
    "https://www.youtube.com/embed/8cm1x4bC610",
    "https://www.youtube.com/embed/6T_HgnjoYwM",
    "https://www.youtube.com/embed/3O3g9S7nQ6k",
    "https://www.youtube.com/embed/KG5Yv3p3xg8",
    "https://www.youtube.com/embed/X0zdAG7gfgs",
    "https://www.youtube.com/embed/HL1l6hX5YlQ",
    "https://www.youtube.com/embed/J9lS14nM1xg",
    "https://www.youtube.com/embed/GhslBwrRsnw",
    "https://www.youtube.com/embed/vZm0lHciFsQ",
    "https://www.youtube.com/embed/wjQ6pS1q7Q8",
    "https://www.youtube.com/embed/MhYECGUzdA4",
    "https://www.youtube.com/embed/5n3xk1lY2zQ",
    "https://www.youtube.com/embed/GoXwIVyNvX0",
    "https://www.youtube.com/embed/8cm1x4bC610",
    "https://www.youtube.com/embed/3O3g9S7nQ6k"
  ]
},
html: {
  title: "HTML Development",
  topics: [
    "Intro", "Structure", "Headings", "Text", "Links",
    "Images", "Lists", "Tables", "Forms", "Inputs",
    "Buttons", "Semantic", "Media", "Iframes", "Meta",
    "SEO", "Accessibility", "Best Practices", "Project 1", "Project 2"
  ],
  videoList: [
    "https://www.youtube.com/embed/UB1O30fR-EE",
    "https://www.youtube.com/embed/pQN-pnXPaVg",
    "https://www.youtube.com/embed/qz0aGYrrlhU",
    "https://www.youtube.com/embed/kUMe1FH4CHE",
    "https://www.youtube.com/embed/PlxWf493en4",
    "https://www.youtube.com/embed/2QR11oDukn4",
    "https://www.youtube.com/embed/mU6anWqZJcc",
    "https://www.youtube.com/embed/3JluqTojuME",
    "https://www.youtube.com/embed/TlB_eWDSMt4",
    "https://www.youtube.com/embed/yfoY53QXEnI",
    "https://www.youtube.com/embed/hdI2bqOjy3c",
    "https://www.youtube.com/embed/3PHXvlpOkf4",
    "https://www.youtube.com/embed/8ext9G7xspg",
    "https://www.youtube.com/embed/JJmcL1N2KQs",
    "https://www.youtube.com/embed/KJgsSFOSQv0",
    "https://www.youtube.com/embed/eIrMbAQSU34",
    "https://www.youtube.com/embed/W6NZfCO5SIk",
    "https://www.youtube.com/embed/PkZNo7MFNFg",
    "https://www.youtube.com/embed/1Rs2ND1ryYc",
    "https://www.youtube.com/embed/wRNinF7YQqQ"
  ]
},
css: {
  title: "CSS Development",
  topics: [
    "Intro", "Selectors", "Colors", "Background", "Borders",
    "Box Model", "Spacing", "Display", "Position", "Flexbox",
    "Grid", "Typography", "Pseudo", "Animations", "Transitions",
    "Media Queries", "Responsive", "Variables", "Best Practices", "Project"
  ],
  videoList: [
    "https://www.youtube.com/embed/yfoY53QXEnI",
    "https://www.youtube.com/embed/1Rs2ND1ryYc",
    "https://www.youtube.com/embed/wRNinF7YQqQ",
    "https://www.youtube.com/embed/K1naz9wBwKU",
    "https://www.youtube.com/embed/3YW65K6LcIA",
    "https://www.youtube.com/embed/PlxWf493en4",
    "https://www.youtube.com/embed/UB1O30fR-EE",
    "https://www.youtube.com/embed/hdI2bqOjy3c",
    "https://www.youtube.com/embed/3PHXvlpOkf4",
    "https://www.youtube.com/embed/8ext9G7xspg",
    "https://www.youtube.com/embed/JJmcL1N2KQs",
    "https://www.youtube.com/embed/KJgsSFOSQv0",
    "https://www.youtube.com/embed/eIrMbAQSU34",
    "https://www.youtube.com/embed/W6NZfCO5SIk",
    "https://www.youtube.com/embed/PkZNo7MFNFg",
    "https://www.youtube.com/embed/8dWL3wF_OMw",
    "https://www.youtube.com/embed/IsG4Xd6LlsM",
    "https://www.youtube.com/embed/poo0BXryffI",
    "https://www.youtube.com/embed/3mYHRrH_NYg",
    "https://www.youtube.com/embed/cCOL7MC4Pl0"
  ]
},
sql: {
  title: "SQL Development",
  topics: [
    "Intro", "DBMS", "Tables", "Data Types", "INSERT",
    "SELECT", "WHERE", "ORDER BY", "GROUP BY", "HAVING",
    "JOINs", "Keys", "Constraints", "UPDATE", "DELETE",
    "Indexes", "Views", "Procedures", "Project 1", "Project 2"
  ],
  videoList: [
    "https://www.youtube.com/embed/HXV3zeQKqGY",
    "https://www.youtube.com/embed/7S_tz1z_5bA",
    "https://www.youtube.com/embed/9Pzj7Aj25lw",
    "https://www.youtube.com/embed/5hzZtqCNQKk",
    "https://www.youtube.com/embed/9ylj9NR0Lcg",
    "https://www.youtube.com/embed/ztHopE5Wnpc",
    "https://www.youtube.com/embed/7UuK7Y0lY2Q",
    "https://www.youtube.com/embed/z8tq1v0r0c0",
    "https://www.youtube.com/embed/f5uY7v4k4mA",
    "https://www.youtube.com/embed/7kzTzq6fY1g",
    "https://www.youtube.com/embed/HXV3zeQKqGY",
    "https://www.youtube.com/embed/7S_tz1z_5bA",
    "https://www.youtube.com/embed/9Pzj7Aj25lw",
    "https://www.youtube.com/embed/5hzZtqCNQKk",
    "https://www.youtube.com/embed/9ylj9NR0Lcg",
    "https://www.youtube.com/embed/ztHopE5Wnpc",
    "https://www.youtube.com/embed/7UuK7Y0lY2Q",
    "https://www.youtube.com/embed/z8tq1v0r0c0",
    "https://www.youtube.com/embed/f5uY7v4k4mA",
    "https://www.youtube.com/embed/7kzTzq6fY1g"
  ]
}
};

const data = courses[course];
// ✅ PUT YOUR CHECK HERE (RIGHT HERE 👇)
// if(!data){
//   alert("Invalid course!");
//   window.location.href = "service.html";
//   return;
// }
// 🎯 Set title
document.getElementById("title").innerText = data.title;

// 📦 Container
const container = document.getElementById("videoContainer");

// 🎥 Create grid videos
data.topics.forEach((topic, index) => {

  const card = document.createElement("div");
  card.className = "video-card";

  const title = document.createElement("h4");
  title.innerText = topic;

  const iframe = document.createElement("iframe");
  iframe.src = data.videoList[index];
  iframe.allowFullscreen = true;

  card.appendChild(title);
  card.appendChild(iframe);

  container.appendChild(card);
});

function goHome(){
  window.location.href = "index.html";
}

function goCourses(){
  window.location.href = "service.html";
}


let progressKey = "progress_" + user + "_" + course;

let progress = parseInt(localStorage.getItem(progressKey)) || 0;

// increase progress when user enters learning page
progress += 5;

// max 100
if(progress > 100){
  progress = 100;
}

localStorage.setItem(progressKey, progress);