// Write your solution in this file!
const employee={
    name:"Sam",
    streetAddress:"amman",

};
updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

function  updateEmployeeWithKeyAndValue(obj, key, value)
{
    const newemployee={...obj};
    newemployee[key]=value;
    //console.log(newemployee);
    return newemployee;

}

 destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
 function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value)
 {
    obj[key]=value;

return obj;
}
deleteFromEmployeeByKey(employee, 'name');
function deleteFromEmployeeByKey(obj, key)
{
   const newEmployee={...obj};
    delete newEmployee[key];
    //console.log(newEmployee.name);
    return newEmployee;
}
destructivelyDeleteFromEmployeeByKey(employee, 'name');
function destructivelyDeleteFromEmployeeByKey(obj, key){
   delete obj[key];
   return obj;
}