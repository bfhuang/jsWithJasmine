describe("MathUtils", function () {
    var calculator;
    var cal;

    beforeEach(function () {
        calculator = new MathUtils();
    });

    describe("when MathUtils is used to perform basic math operataitons", function () {
        it("it should be able to calculate sum of 3 and 5", function () {
            expect(calculator.sum(3, 5)).toEqual(8);
        });

        it("it should be able to calculate calculator substract of 8 and 7", function () {
            expect(calculator.substract(8, 7)).toEqual(1);
            expect(calculator).toBeDefined();
            expect(cal).not.toBeDefined();
        });
    });
});