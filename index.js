// Code your solution in this file.
let names = ['Adele', 'Beyonce', 'Lady', 'Madonna', 'Rihanna', 'Taylor'];

function lowerCaseStudentNames() {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    name = name.toLowerCase();
    return name;
  }
}

console.log(lowerCaseStudentNames());