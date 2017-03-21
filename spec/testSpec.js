describe("Nested Describe Demo", function () {
    beforeEach(function () {
        console.log("beforeEach level 1");
    });
    describe("MyTest level2", function () {
        beforeEach(function () {
            console.log("beforeEach level 2");
        });
        describe("MyTest level3", function () {
            beforeEach(function () {
                console.log("beforeEach level 3");
            });
            it("is a simple spec in level3", function () {
                console.log("A simple spec in level 3");
                expect(true).toBe(true);
            });
            afterEach(function () {
                console.log("afterEach level 3");
            });
        });
        afterEach(function () {
            console.log("afterEach level 2");
        });
    });
    afterEach(function () {
        console.log("afterEach level 1");
    });
});