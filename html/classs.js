class Employee {
    constructor(EmpId, EmpName, EmpDesg, EmpDept) {
      (this.EmpId = EmpId),
        (this.EmpName = EmpName),
        (this.EmpDesg = EmpDesg),
        (this.EmpDept = EmpDept);
  
    }
    showDetails(){
  
      console.log(`The Employee details ${this.EmpId} ${this.EmpName} `)
    }
  }
  
  const employee = new Employee(1001,'Jayesh Srivastava','Manager','IT');
  employee.showDetails();
  console.log(JSON.stringify(employee));
  
  const  employee2 = JSON.parse(JSON.stringify(employee));
  console.log(typeof(employee2));
  
  console.log(employee.EmpName);
  
  
  
  
  