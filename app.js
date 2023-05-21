'use strict';

const demo=document.getElementById('demo');
const newDiv = document.createElement("div");
demo.appendChild(newDiv);



let employees = [
{
      id: generateEmployeeID(),
      fullName: "Ghazi Samer",
      department: "Administration",
      level: "Senior",
      imageURL: "https://organicheadshots.com/wp-content/uploads/photo-gallery/staff-headshots-1/staffheadshot-2.jpg?bwg=1623413477",
      salary: calculateSalary("Senior"),
},
    {
      id: generateEmployeeID(),
      fullName: "Lana Ali",
      department: "Finance",
      level: "Senior",
      imageURL: "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1713-1024x683.jpg",
      salary: calculateSalary("Senior"),
    },
 {
      id: generateEmployeeID(),
      fullName: "Tamara Ayoub",
      department: "Marketing",
      level: "Senior",
      imageURL: "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/Option-3-1024x683.jpg",
      salary: calculateSalary("Senior"),
    },
{
      id: generateEmployeeID(),
      fullName: "Safi Walid",
      department: "Administration",
      level: "Mid-Senior",
      imageURL: "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1663-1-1024x683.jpg",
      salary: calculateSalary("Mid-Senior"),
    },
  {
      id: generateEmployeeID(),
      fullName: "Omar Zaid",
      department: "Development",
      level: "Senior",
      imageURL: "https://dl.splento.com/cdn/2019/10/23/o_1dnsv9qaph234tne761jffkgdg_1440.jpg",
      salary: calculateSalary("Senior"),
    },
    {
      id: generateEmployeeID(),
      fullName: "Rana Saleh",
      department: "Development",
      level: "Junior",
      imageURL: "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/Option-3-1024x683.jpg",
      salary: calculateSalary("Junior"),
    },
    {
      id: generateEmployeeID(),
      fullName: "Hadi Ahmad",
      department: "Finance",
      level: "Mid-Senior",
      imageURL: "https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-1941-1024x683.jpg",
      salary: calculateSalary("Mid-Senior"),
    },
  ];
  
  
  function generateEmployeeID() {
    var randomID = Math.floor(Math.random() * 9000) + 1000;
    return randomID;
  }
  
  
  function calculateSalary(level) {
    var salaryRanges = {
      Senior: { min: 1500, max: 2000 },
      "Mid-Senior": { min: 1000, max: 1500 },
      Junior: { min: 500, max: 1000 },
    };
  
    var minSalary = salaryRanges[level].min;
    var maxSalary = salaryRanges[level].max;
    var randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    var netSalary = randomSalary - randomSalary * 0.075; 
  
    return netSalary;
  }
  
  
function renderEmployees() {
    for (var i = 0; i < employees.length; i++) {
      let emp=document.createElement("div");
      let empSalary = document.createElement("p");
      let empName = document.createElement("p");
      var employee = employees[i];
      empName.textContent = "Employee name: " + employee.fullName + "\n";
      empSalary.textContent = "Employee salary: " + employee.salary.toFixed(2) + "";
      emp.appendChild(empName);
      emp.appendChild(empSalary);
      newDiv.appendChild(emp);
    }
}


renderEmployees();






