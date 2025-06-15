function calculateArea1(width, height) {
	return width * height;
}
console.log('Площа:', calculateArea1(3, 12));

const calculateArea2 = function (width, height) {
	return width * height;
};
console.log('Площа:', calculateArea2(6, 8));

const calculateArea3 = (width, height) => width * height;
console.log('Площа:', calculateArea3(8, 15));
