'use strict' ;



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


//Create a new objects from constructor

let Ghazi = new Employees ( "", "Ghazi Samer","Administration","Senior", "https://organicheadshots.com/wp-content/uploads/photo-gallery/staff-headshots-1/staffheadshot-2.jpg") ;
let Lana = new Employees ( "" ,"Lana Ali","Finance","Senior","https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1713-1024x683.jpg");
let Tamara = new Employees ( "" ,"Tamara Ayoub","Marketing","Senior", "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/Option-3-1024x683.jpg");
let Safi = new Employees ( "" , "Safi Walid","Administration","Mid-Senior","https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1663-1-1024x683.jpg");
let Omar = new Employees ( "" ,"Omar Zaid", "Development","Senior", "https://dl.splento.com/cdn/2019/10/23/o_1dnsv9qaph234tne761jffkgdg_1440.jpg");
let Rana = new Employees ( "" ,"Rana Saleh","Development","Junior","https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/Option-3-1024x683.jpg");
let Hadi = new Employees ( "" , "Hadi Ahmad","Finance","Mid-Senior","https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1941-1024x683.jpg");
console.log(allEmployees)


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

   document.write(`<p> Employee name: ${this.fullName}</p>`)
   document.write(`<p> Employee department: ${this.department}</p>`)
   document.write(`<p> Employee salary: ${this.calculateSalary()}</p>`)

}

for (let i = 0; i < allEmployees.length; i++) {
    allEmployees[i].renderEmployees();
}




//tag name

let h1E=document.getElementsByName("h1")[0];
console.log(h1E.texetcontent);
h1E.textContent="hello every one";
console.log(h1E.texetcontent);



//by using id

let pE=document.getElementById("par")