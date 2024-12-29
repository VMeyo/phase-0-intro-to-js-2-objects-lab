// Write your solution in this file!

//Updating employee with key and value
const employee = {};

function updateEmployeeWithKeyAndValue(employee, name, Sam){

const newEmployee = {...employee};

newEmployee[name] = Sam;

return newEmployee;

}


//Destructively Updating employee with key and value

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Sam){
    
    employee[name] = Sam;

    return employee;

    const newemployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Victor");
}
    

//Delete from employee by Key

function deleteFromEmployeeByKey(employee, name ){

    const newEmployee = {...employee};

    delete newEmployee[name];

    return newEmployee;
}

//Destructively delete from employee by key
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    
    delete employee[name];
  
    return employee;
  }