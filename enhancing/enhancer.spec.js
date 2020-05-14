const enhancer = require('./enhancer.js');
// test away!
const sword = {
	name: 'Excaliber',
	enhancement: 20,
	durability: 80
};

const axe = {
	name: 'The Great Axe',
	enhancement: 17,
	durability: 32
};
describe('the repair function', () => {
	it('should', () => {
		expect(repair(axe)).toBe(100);
		expect(repair(sword)).toBe(100);
	});
});

describe('the succeed function', () => {
	it('should', () => {
		expect(succeed(sword)).toBe(20);
		expect(succeed(axe)).toBe(18);
	});
});

describe('the fail function', () => {
	it('should', () => {
		expect(fail(sword)).toBe(10);
		expect(fail(axe)).toBe(7);
	});
});