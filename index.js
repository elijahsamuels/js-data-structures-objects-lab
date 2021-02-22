// Write your solution in this file!

const driver = {};

// updateDriverWithKeyAndValue(driver, key, value)
// 1) returns a driver with the original key value pairs and the new key value pair
// 2) it does not modify the original driver, but rather returns a clone with the new data

function updateDriverWithKeyAndValue(driver, key, value) {
	return Object.assign({}, driver, { [key]: value});
};

// const newObj = Object.assign({}, obj);

// const obj = { a: 1 };
// const copy = Object.assign({}, obj);
// console.log(copy); // { a: 1 }

// 1) updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
	return Object.assign(driver, { [key]: value});
};

// 1) deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
// 2) does not modify the original driver (it is non-destructive)
function deleteFromDriverByKey(driver, key) {
	const newObject = Object.assign({}, driver);
	delete newObject[key];
	return newObject
};

// 1) returns driver without the delete key/value pair
// 2) modifies the original driver

function destructivelyDeleteFromDriverByKey(driver, key) {
	// const newObject = Object.assign(driver);
	// delete newObject[key];
	delete driver[key];
	return driver;
};
