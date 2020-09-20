const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
chai.should();
const { setupServer } = require("../server/app");

/*
 * This sprint you will have to create all tests yourself, TDD style.
 * For this you will want to get familiar with chai-http https://www.chaijs.com/plugins/chai-http/
 * The same kind of structure that you encountered in lecture.express will be provided here.
 */
const server = setupServer();
describe("othello api", () => {
    let request;
    beforeEach(() => {
        request = chai.request(server);
    });

    it("false pattern1", async() => {
        const condition = [
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', 'b', 'w', '-', '-', '-'],
            ['-', '-', '-', 'w', 'b', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
        ];
        const position = [3, 3, "b"];

        const res = await request.get("/api/condition").send({ condition: condition, position: position });
        expect(res.body).to.equal(false);
    });

    it("false pattern2", async() => {
        const condition = [
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', 'b', 'w', '-', '-', '-'],
            ['-', '-', '-', 'w', 'b', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
        ];
        const position = [4, 1, "b"];

        const res = await request.get("/api/condition").send({ condition: condition, position: position });
        expect(res.body).to.equal(false);
    });

    it("true pattern 1", async() => {
        const condition = [
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', 'b', 'w', '-', '-', '-'],
            ['-', '-', '-', 'w', 'b', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
        ];
        const position = [4, 2, "b"];

        const AfterCondition = [
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', 'b', 'w', '-', '-', '-'],
            ['-', '-', 'b', 'b', 'b', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-']
        ];

        const changeStoneList = [
            [4, 2, "b"],
            [4, 3, "b"]
        ]

        const res = await request.get("/api/condition").send({ condition: condition, position: position });


        //盤面の状況の比較
        expect(res.body.condition).to.deep.equal(AfterCondition);

        const actualChangeStoneList = res.body.changeStoneList;
        const stringActualChangeStoneList = actualChangeStoneList.map(e => JSON.stringify(e))

        //変化する石のリストの確認
        expect(stringActualChangeStoneList).to.contain(JSON.stringify(changeStoneList[1]));
        for (let elm of changeStoneList) {
            expect(stringActualChangeStoneList).to.contain(JSON.stringify(elm));
        }
    });

    it("true pattern 2", async() => {
        const condition = [
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', 'b', 'w', '-', '-', '-'],
            ['-', '-', 'b', 'b', 'b', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-']
        ];
        const position = [5, 2, "w"];

        const AfterCondition = [
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', 'b', 'w', '-', '-', '-'],
            ['-', '-', 'b', 'w', 'b', '-', '-', '-'],
            ['-', '-', 'w', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-']
        ];

        const changeStoneList = [
            [5, 2, "w"],
            [4, 3, "w"]
        ]

        const res = await request.get("/api/condition").send({ condition: condition, position: position });

        //盤面の状況の比較
        expect(res.body.condition).to.deep.equal(AfterCondition);

        const actualChangeStoneList = res.body.changeStoneList;
        const stringActualChangeStoneList = actualChangeStoneList.map(e => JSON.stringify(e))

        //変化する石のリストの確認
        expect(stringActualChangeStoneList).to.contain(JSON.stringify(changeStoneList[1]));
        for (let elm of changeStoneList) {
            expect(stringActualChangeStoneList).to.contain(JSON.stringify(elm));
        }
    });
});