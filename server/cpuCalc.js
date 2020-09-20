const { calcCondition } = require('./calcCondition');

//状況によっておける石の位置の一覧を返す（白番）
const cpuCalc = (condition, color) => {
    console.log(22222222)
    console.log(condition);
    let storeArr = [];
    for (let i = 0; i < condition.length; i++) {
        for (let j = 0; j < condition[i].length; j++) {
            //なんか知らんけどJSON付けないとconditionがぐちゃぐちゃになる
            if (calcCondition([i, j, color], JSON.parse(JSON.stringify(condition)))) {
                //falseじゃなければ追加
                storeArr.push([i, j]);
            }
        }
    }
    return { positionList: storeArr };
}

module.exports = { cpuCalc };