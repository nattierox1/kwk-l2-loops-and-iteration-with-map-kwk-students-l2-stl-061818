// Code your solution in this file.
let names = ['Adele', 'Beyonc', 'Lady', 'Madonna', 'Rihanna', 'Taylor'];

function lowerIt(name) {
  return name.toLowerCase();
}


function lowerCaseStudentNames() {
  for (let i = 0; i < names.length; i++) {
    return names[i].toLowerCase();
  }
}

console.log(lowerCaseStudentNames());