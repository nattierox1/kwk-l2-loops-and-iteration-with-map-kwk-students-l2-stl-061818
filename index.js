// Code your solution in this file.
let names = ['Adele', 'Beyonce', 'Lady', 'Madonna', 'Rihanna', 'Taylor'];

function lowerThis(name) {
  name = name.toLowerCase();
}

function lowerCaseStudentNames(array) {
  
  return array.map(lowerThis);
  
  /*
  for (let i = 0; i < array.length; i++) {
    let name = array[i];
    return name.toLowerCase();
  }
  */
}

/*
console.log(lowerCaseStudentNames());

let 
nameToAttributes ['Amy Adams', 'Cate Blanchett', 'Emma Stone', 'Jennifer Lawrence', 'Natalie Portman']