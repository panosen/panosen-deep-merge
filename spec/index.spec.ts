import DeepMerge from "../src/index";

describe("DeepMerge", () => {

    it("mergeObjectSimple", () => {

        var k = {
            math: 12,
            history: 15
        };
        var l = {
            math: 13,
            english: 14
        }

        var expected = {
            math: 13,
            history: 15,
            english: 14
        }

        var actual = DeepMerge.mergeObject(k, l);

        var expectedText = JSON.stringify(expected);
        var actualText = JSON.stringify(actual);

        expect(actualText).toBe(expectedText);

    });

    it("mergeObject", () => {

        var a: any = [1, 2];
        var b: any = null;
        var c: any = undefined;
        var d: any = ["a", "b"];
        var e: any = {};
        var f: any = "c";
        var g = { name: "tom" };
        var h = { age: 12 };
        var i = { items: [1, 2] };
        var j = { items: [3, 4] };
        var k = {
            x: {
                math: 12,
                history: 15
            }
        };
        var l = {
            x: {
                math: 13,
                english: 14
            }
        }

        var expected = {
            name: "tom",
            age: 12,
            items: [1, 2, 3, 4],
            x: {
                math: 13,
                history: 15,
                english: 14
            }
        }

        var actual = DeepMerge.mergeObject(a, b, c, d, e, f, g, h as any, i as any, j as any, k as any, l as any);

        var expectedText = JSON.stringify(expected);
        var actualText = JSON.stringify(actual);

        expect(actualText).toBe(expectedText);

    });

    it("mergeArray", () => {

        var a: any = [1, 2];
        var b: any = null;
        var c: any = undefined;
        var d: any = ["a", "b"];
        var e: any = {};
        var f: any = "c";

        var actual = DeepMerge.mergeArray(a, b, c, d, e, f);

        var expected = [1, 2, "a", "b"];

        expect(actual instanceof Array).toBeTrue();
        expect(actual.length).toEqual(expected.length);

        for (var index = 0; index < 4; index++) {
            expect(actual[index]).toBe(expected[index]);
        }
    })
})