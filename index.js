// Code your solution in this file.
let names = ['Adele', 'Beyonce', 'Lady', 'Madonna', 'Rihanna', 'Taylor'];

let names2 = ['Topher', 'Nataleigh'];

function lowerThis(name) {
  return name.toLowerCase();
}

function lowerCaseStudentNames(array) {
  return array.map(lowerThis);
}

/*
console.log(lowerCaseStudentNames());

let 
nameToAttributes ['Amy Adams', 'Cate Blanchett', 'Emma Stone', 'Jennifer Lawrence', 'Natalie Portman']
*/
  
  /*
  for (let i = 0; i < array.length; i++) {
    let name = array[i];
    return name.toLowerCase();
  }
  */
  
  console.log(lowerCaseStudentNames(names2));