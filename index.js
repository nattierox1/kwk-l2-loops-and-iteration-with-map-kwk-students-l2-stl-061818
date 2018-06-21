// Code your solution in this file.
let names = ['Adele', 'Beyonc', 'Lady', 'Madonna', 'Rihanna', 'Taylor'];

function lowerCaseStuff(name) {
  return name.toLowerCase();
}

function lowerCaseStudentNames() {
  names.map(lowerCaseStuff());
}

  /*
  for (let i = 0; i < names.length; i++) {
    return names[i].toLowerCase();
  }
  */
  
  /*
  let name = names[0];
  return name.toLowerCase();
  */
}

lowerCaseStudentNames();