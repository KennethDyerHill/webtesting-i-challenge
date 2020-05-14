module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
	item = {
		name: '',
		enhancement: item.enhancement,
		durabilty: item.durabilty
	};
	if (item.enhancement >= 20) {
		return 20;
	}
	return item.enhancement + 1;
}

function fail(item) {
	item = {
		name: '',
		enhancement: item.enhancement,
		durabilty: item.durabilty
	};
	if (item.enhancement >= 15) {
		return item.enhancement - 10;
	}
	return item.enhancement - 5;
}

function repair(item = 0) {
	item = {
		name: '',
		enhancement: item.enhancement,
		durabilty: item.durabilty
	};
	return (item.durabilty = 100);
}

function get(item) {
	return { ...item };
}
