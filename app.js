'use strict';

// Ghazi
let Ghazi = { 
      fullName: "Ghazi Samer",
      department: "Administration",
      level: "Senior",
      imageURL: "https://organicheadshots.com/wp-content/uploads/photo-gallery/staff-headshots-1/staffheadshot-2.jpg?bwg=1623413477",
      salary: function calculateSalary(level) {
        let salaryRanges = {
          Senior: { min: 1500, max: 2000 },
          MidSenior: { min: 1000, max: 1500 },
          Junior: { min: 500, max: 1000 },
        }
        let minSalary = salaryRanges[level].min;
        let maxSalary = salaryRanges[level].max;
        let randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
        let netSalary = randomSalary - randomSalary * 0.075; 
      
        return netSalary;
      },
      id:  function generateEmployeeID() {
        var randomID = Math.floor(Math.random() * 9000) + 1000;
        return randomID;
      },

}

console.log(Ghazi);
console.log(Ghazi.id())
console.log(Ghazi.salary("Senior"))

document.write(`<p> Employee name: ${Ghazi.fullName}</p>`)
document.write(`<p> Employee salary: ${Ghazi.salary("Senior")}</p>`)

// Lana
let Lana =  {
      fullName: "Lana Ali",
      department: "Finance",
      level: "Senior",
      imageURL: "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1713-1024x683.jpg",
      salary: function calculateSalary(level) {
        let salaryRanges = {
          Senior: { min: 1500, max: 2000 },
          MidSenior: { min: 1000, max: 1500 },
          Junior: { min: 500, max: 1000 },
        }
        let minSalary = salaryRanges[level].min;
        let maxSalary = salaryRanges[level].max;
        let randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
        let netSalary = randomSalary - randomSalary * 0.075; 
      
        return netSalary;
      },
      id:  function generateEmployeeID() {
        var randomID = Math.floor(Math.random() * 9000) + 1000;
        return randomID;
      },

}

console.log(Lana);
console.log(Lana.id())
console.log(Lana.salary("Senior"))

document.write(`<p> Employee name: ${Lana.fullName}</p>`)
document.write(`<p> Employee salary: ${Lana.salary("Senior")}</p>`)

// Tamara
let Tamara = {
      fullName: "Tamara Ayoub",
      department: "Marketing",
      level: "Senior",
      imageURL: "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/Option-3-1024x683.jpg",
      salary: function calculateSalary(level) {
        let salaryRanges = {
          Senior: { min: 1500, max: 2000 },
          MidSenior: { min: 1000, max: 1500 },
          Junior: { min: 500, max: 1000 },
        }
        let minSalary = salaryRanges[level].min;
        let maxSalary = salaryRanges[level].max;
        let randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
        let netSalary = randomSalary - randomSalary * 0.075; 
      
        return netSalary;
      },
      id:  function generateEmployeeID() {
        var randomID = Math.floor(Math.random() * 9000) + 1000;
        return randomID;
      },

}

console.log(Tamara);
console.log(Tamara.id())
console.log(Tamara.salary("Senior"))

document.write(`<p> Employee name: ${Tamara.fullName}</p>`)
document.write(`<p> Employee salary: ${Tamara.salary("Senior")}</p>`)

// Safi
 let Safi = {
      fullName: "Safi Walid",
      department: "Administration",
      level: "Mid-Senior",
      imageURL: "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1663-1-1024x683.jpg",
      salary: function calculateSalary(level) {
        let salaryRanges = {
          Senior: { min: 1500, max: 2000 },
          MidSenior: { min: 1000, max: 1500 },
          Junior: { min: 500, max: 1000 },
        }
        let minSalary = salaryRanges[level].min;
        let maxSalary = salaryRanges[level].max;
        let randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
        let netSalary = randomSalary - randomSalary * 0.075; 
      
        return netSalary;
      },
      id:  function generateEmployeeID() {
        var randomID = Math.floor(Math.random() * 9000) + 1000;
        return randomID;
      },

}

console.log(Safi);
console.log(Safi.id())
console.log(Safi.salary("MidSenior"))

document.write(`<p> Employee name: ${Safi.fullName}</p>`)
document.write(`<p> Employee salary: ${Safi.salary("MidSenior")}</p>`)

// Omar
let Omar = {
      fullName: "Omar Zaid",
      department: "Development",
      level: "Senior",
      imageURL: "https://dl.splento.com/cdn/2019/10/23/o_1dnsv9qaph234tne761jffkgdg_1440.jpg",
      salary: function calculateSalary(level) {
        let salaryRanges = {
          Senior: { min: 1500, max: 2000 },
          MidSenior: { min: 1000, max: 1500 },
          Junior: { min: 500, max: 1000 },
        }
        let minSalary = salaryRanges[level].min;
        let maxSalary = salaryRanges[level].max;
        let randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
        let netSalary = randomSalary - randomSalary * 0.075; 
      
        return netSalary;
      },
      id:  function generateEmployeeID() {
        var randomID = Math.floor(Math.random() * 9000) + 1000;
        return randomID;
      },

}

console.log(Omar);
console.log(Omar.id())
console.log(Omar.salary("Senior"))

document.write(`<p> Employee name: ${Omar.fullName}</p>`)
document.write(`<p> Employee salary: ${Omar.salary("Senior")}</p>`)
    
// Rana
let Rana = {
      fullName: "Rana Saleh",
      department: "Development",
      level: "Junior",
      imageURL: "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/Option-3-1024x683.jpg",
      salary: function calculateSalary(level) {
        let salaryRanges = {
          Senior: { min: 1500, max: 2000 },
          MidSenior: { min: 1000, max: 1500 },
          Junior: { min: 500, max: 1000 },
        }
        let minSalary = salaryRanges[level].min;
        let maxSalary = salaryRanges[level].max;
        let randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
        let netSalary = randomSalary - randomSalary * 0.075; 
      
        return netSalary;
      },
      id:  function generateEmployeeID() {
        var randomID = Math.floor(Math.random() * 9000) + 1000;
        return randomID;
      },

}

console.log(Rana);
console.log(Rana.id())
console.log(Rana.salary("Junior"))

document.write(`<p> Employee name: ${Rana.fullName}</p>`)
document.write(`<p> Employee salary: ${Rana.salary("Junior")}</p>`)
    
// Hadi
let Hadi = {
      fullName: "Hadi Ahmad",
      department: "Finance",
      level: "Mid-Senior",
      imageURL: "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1941-1024x683.jpg",
      salary: function calculateSalary(level) {
        let salaryRanges = {
          Senior: { min: 1500, max: 2000 },
          MidSenior: { min: 1000, max: 1500 },
          Junior: { min: 500, max: 1000 },
        }
        let minSalary = salaryRanges[level].min;
        let maxSalary = salaryRanges[level].max;
        let randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
        let netSalary = randomSalary - randomSalary * 0.075; 
      
        return netSalary;
      },
      id:  function generateEmployeeID() {
        var randomID = Math.floor(Math.random() * 9000) + 1000;
        return randomID;
      },

}

console.log(Hadi);
console.log(Hadi.id())
console.log(Hadi.salary("MidSenior"))
    
document.write(`<p> Employee name: ${Hadi.fullName}</p>`)
document.write(`<p> Employee salary: ${Hadi.salary("MidSenior")}</p>`)
  





