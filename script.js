var isDate = function (input) {
  //   write your code here
	if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  const date = new Date(input);
  return !isNaN(date);
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
 