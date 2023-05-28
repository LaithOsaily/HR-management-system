'use strict' ;


let header=document.getElementById("header");
header.style.paddingLeft="4rem";
header.style.paddingRight="2rem";
header.style.display= "flex";
header.style.justifyContent= "space-between";
header.style.backgroundColor= "#CBB279";



let nav=document.getElementById('nav');
nav.style.display="flex";
nav.style.justifyContent="space-around";
nav.style.listStyle="none";
nav.style.margin="40px";
nav.style.padding="0px";
nav.style.marginLeft="10px";

let a=document.getElementsByTagName('a');

for(let i=0;i<a.length;i++){
  a[i].style.textDecoration="none";
  a[i].style.color="#4F200D";
  a[i].style.padding="10px";
}


let footer=document.getElementById("footer");
footer.style.display="flex";
footer.style.background= "#CBB279";
footer.style.padding= "5px";
footer.style.paddingLeft="35rem";
footer.style.paddingRight="2rem";




let socialmedialinks=document.getElementById('socialmedialinks');
socialmedialinks.style.display="flex";
socialmedialinks.style.listStyle="none";
socialmedialinks.style.margin="10px";



const allEmployees = [];

//our blueprint "costructor"

function Employees ( id,fullName,department,level,imageURL) {

    this. generateEmployeeID = id ;
    this.fullName = fullName ;
    this.department = department;
    this.level = level ;
    this.imageURL = imageURL;
    allEmployees.push(this);
}

//create a prototyoe function

Employees.prototype.generateEmployeeID = function () {
    var randomID = Math.floor(Math.random() * 9000) + 1000;
    return randomID;
  }

Employees.prototype.calculateSalary = function () {
    let salaryRanges = {
        Senior: { min: 1500, max: 2000 },
        "Mid-Senior": { min: 1000, max: 1500 },
      Junior: { min: 500, max: 1000 }};
    let minSalary = salaryRanges[this.level].min;
    let maxSalary = salaryRanges[this.level].max;
    let randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    let netSalary = randomSalary - randomSalary * 0.075; 
     return netSalary;
}


//create a renderEmployees prototype function

Employees.prototype.renderEmployees =function () {

let main = document.getElementById("main");
main.style.display = "flex";
main.style.flexDirection = "row";
main.style.flexWrap = "wrap";
main.style.backgroundColor = "#EEEEEE";
main.style.paddingLeft="80px";






let divE=document.createElement("div");
divE.style.display = "flex";
divE.style.flexDirection = "column";
divE.style.alignItems = "center";
divE.style.justifyContent = "space-between";
divE.style.padding = "2px 16px";
divE.style.margin = "10px";
divE.style.backgroundColor = "#E1D4BB";
divE.style.borderRadius = "8px";
divE.style.boxShadow = "0 2px 8px 0 rgba(0, 0, 0, 0.2)";
divE.style.width = "200px";
divE.style.flex = "1 1 rem";
main.appendChild(divE);

      


let imageURL=document.createElement("img");
imageURL.style.width = "200px";
imageURL.style.height = "200px";
imageURL.style.borderRadius = "45%";
imageURL.style.objectFit = "cover";
imageURL.style.marginBottom = "10";
imageURL.src=this.imageURL;
divE.appendChild(imageURL);



let fullName=document.createElement("p");
let salary=document.createElement("p");
salary.style.fontSize="12px";
salary.textContent= `Name: ${this.fullName} 
- Department: ${this.department} 
- level:${this.level}
- ${this.calculateSalary()}`;
divE.appendChild(salary);
divE.appendChild(fullName);
}



//Create a new objects from constructor

let Ghazi = new Employees ( "", "Ghazi Samer","Administration","Senior", "assets/Ghazi.jpg") ;
let Safi = new Employees ( "" , "Safi Walid","Administration","Mid-Senior","assets/Safi.jpg");
let Lana = new Employees ( "" ,"Lana Ali","Finance","Senior","assets/Lana.jpg");
let Hadi = new Employees ( "" , "Hadi Ahmad","Finance","Mid-Senior","assets/Hadi.jpg");
let Omar = new Employees ( "" ,"Omar Zaid", "Development","Senior", "assets/Omar.jpg");
let Rana = new Employees ( "" ,"Rana Saleh","Development","Junior","assets/Rana.jpg");
let Tamara = new Employees ( "" ,"Tamara Ayoub","Marketing","Senior", "assets/Tamara.jpg");
console.log(allEmployees);




for (let i = 0; i < allEmployees.length; i++) {
  allEmployees[i].renderEmployees();
}

