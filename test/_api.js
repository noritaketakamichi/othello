const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
chai.should();
const { setupServer } = require("../server/app");

const server = setupServer();
describe("calcCondition", () => {
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

        const res = await request.post("/api/condition").send({ condition: condition, position: position });
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

        const res = await request.post("/api/condition").send({ condition: condition, position: position });
        expect(res.body).to.equal(false);
    });

    it("false pattern3", async() => {
        const condition = [
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', 'b', 'w', '-', '-', '-'],
            ['-', '-', 'b', 'b', 'b', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
        ];
        const position = [5, 1, "w"];

        const res = await request.post("/api/condition").send({ condition: condition, position: position });
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

        const res = await request.post("/api/condition").send({ condition: condition, position: position });


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

        const res = await request.post("/api/condition").send({ condition: condition, position: position });

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

describe("cpuCalc", () => {
    let request;
    beforeEach(() => {
        request = chai.request(server);
    });

    it("2nd put", async() => {
        const condition = [
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', 'b', 'w', '-', '-', '-'],
            ['-', '-', 'b', 'b', 'b', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
        ];
        const color = "w";

        const ExpectedPositionList = [
            [3, 2],
            [5, 2],
            [5, 4]
        ]

        console.log(11111111111);
        const res = await request.post("/api/auto").send({ condition: condition, color: color });

        expect(JSON.stringify(res.body.positionList)).to.equal(JSON.stringify(ExpectedPositionList));
    });

    it("4th put", async() => {
        const condition = [
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', 'b', 'w', '-', '-', '-'],
            ['-', '-', 'b', 'b', 'b', '-', '-', '-'],
            ['-', '-', 'w', 'b', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
            ['-', '-', '-', '-', '-', '-', '-', '-'],
        ];
        const color = "w";

        const ExpectedPositionList = [
            [3, 2],
            [5, 4]
        ]

        console.log(11111111111);
        const res = await request.post("/api/auto").send({ condition: condition, color: color });

        expect(JSON.stringify(res.body.positionList)).to.equal(JSON.stringify(ExpectedPositionList));
    });

});