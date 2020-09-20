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
describe("othllo api", () => {
    let request;
    beforeEach(() => {
        request = chai.request(server);
    });

    it("should return exact condition after put", async() => {
        const res = await request.get("/api/condition");
        const result = JSON.parse(res.text)[2].name;
        expect(result).to.equal("Blastoise");
    });
});