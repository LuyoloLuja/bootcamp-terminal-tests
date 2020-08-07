module.exports = function (salesData) {
  var department = {};
  var outdoor = 0;
  for (var i = 0; i < salesData.length; i++) {
    var sales = salesData[i].sales;
    var departmentName = salesData[i].department;

    if (salesData[i].sales > outdoor) {
      outdoor = sales;
      department = departmentName;
    }
  }
  return department;
}