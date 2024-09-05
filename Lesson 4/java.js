/*// Toggle the mobile menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-x');
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });

    // Close the navbar if opened
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});



function updateText() {
  textAnimation.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;
}

setInterval(updateText, 2000); // Change word every 2 seconds

// Form submission handler (optional)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
});*/

let scores = [];


function getAverage(scores) {

  if (scores.length ===0){
    return 0;
  }
  let total = 0;

  for (let i = 0; i < scores.length; i++) {
      total += scores[i];
  }
  let average = total / scores.length;
  return average;
}

function getGrade(score){
  if (score === 100){
    return "A++";
  }

 else if (score >=90){
  return "A";
}
 else if (score >=80){
  return "B";
 }
 else if (score >=70){
  return "C";
 }
 else if (score >=60){
  return "D";
}
else{
  return "F"
}
} 

function passingGrade(score){
  let grade = getGrade(score);

  if (grade === "A++"|| grade === "A" || grade === "B" || grade === "C" || grade === "D"){
    return true;
  }
  else {
    return false;
  }  
  
}

function studentMsg(totalScores, studentScore) {
  let classAverage = getAverage(totalScores); // Now this won't return NaN
  let studentGrade = getGrade(studentScore);

  let passed = studentGrade === "A++" || studentGrade === "A" || studentGrade === "B" || studentGrade === "C" || studentGrade === "D";

  if (passed) {
      return "Class Average: " + classAverage + " Your Grade: " + studentGrade + " You have passed the course.";
  } else {
      return "Class Average: " + classAverage + " Your Grade: " + studentGrade + " You have failed the course.";
  }
}



console.log(studentMsg([58,39]));