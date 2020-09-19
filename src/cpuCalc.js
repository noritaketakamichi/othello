import { calcCondition } from './calculate.js';
//状況によっておける石の位置の一覧を返す（白番）
export const cpuCalc = (condition) => {
    let storeArr = [];
    console.log("condition");
    console.log(condition);
    for (let i in condition) {
        for (let j in condition[i]) {
            console.log([i, j]);
            if (calcCondition([Number(i), Number(j), "w"], condition)) {
                //falseじゃなければ追加
                storeArr.push([i, j]);
            }
        }
    }
    return storeArr;
}