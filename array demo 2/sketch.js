// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myarray = [3, 5, 7, 9];

function setup() {
createCanvas(windowWidth, windowHeight);{
  let lastitem = myarray.pop ();
  let secondlast = myarray.pop ();

  myarray.unshift(lastitem);
  myarray.unshift(secondlast);

  Print('MY ARRAY -' + myarray)

  myarray.SHIFT();
  let n = random(0,3);

  for(let i = 0, i < n;i++){
    myarray.unshift(0);
  }
 }
}
Print('MY ARRAY -' + myarray)

for(let i = 0, i < myarray;length,i++){
  if(myarray[i] === 9){
    myarray.splice(i,1)
  }

}
Print('MY ARRAY -' + myarray)




function draw() {
  background(220);
}
