'use strict';


/**
 * Obtain information about employees from HR database
 *
 * bodyLimit Integer The amount of employees returned (optional)
 * pageLimit Integer The pages to return employee info (optional)
 * returns List
 **/
exports.employeesGET = function(bodyLimit,pageLimit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 4,
  "emplyee name" : "Tanvi Sangle",
  "emplyee title" : "Team Lead"
}, {
  "id" : 4,
  "emplyee name" : "Tanvi Sangle",
  "emplyee title" : "Team Lead"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gte information about specific employee
 *
 * id Integer The id of the employee
 * returns body
 **/
exports.employeesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 4,
  "emplyee name" : "Tanvi Sangle",
  "emplyee title" : "Team Lead"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a new employee in the database
 *
 * body Body 
 * no response value expected for this operation
 **/
exports.employeesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

