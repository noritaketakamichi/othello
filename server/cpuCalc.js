const { calcCondition } = require('./calcCondition');

//角に近いリスト
const nearConer = [
    '[1,0]',
    '[6,0]',
    '[0,1]',
    '[1,1]',
    '[6,1]',
    '[7,1]',
    '[0,6]',
    '[1,6]',
    '[6,6]',
    '[7,6]',
    '[1,7]',
    '[6,7]',
]

//角のリスト
const coner = [
    '[0,0]',
    '[7,0]',
    '[0,7]',
    '[7,7]'
]

// //状況によっておける石の位置の一覧を返す（白番）
// const cpuCalc = (condition, color) => {
//     console.log(22222222)
//     console.log(condition);
//     let storeArr = [];
//     for (let i = 0; i < condition.length; i++) {
//         for (let j = 0; j < condition[i].length; j++) {
//             //なんか知らんけどJSON付けないとconditionがぐちゃぐちゃになる
//             if (calcCondition([i, j, color], JSON.parse(JSON.stringify(condition)))) {
//                 //falseじゃなければ追加
//                 storeArr.push([i, j]);
//             }
//         }
//     }
//     return { positionList: storeArr };
// }


//状況によっておける石の位置の一覧を返す（白番）
//角に近いところには置かないバージョン
//すみにおければ置く
const cpuCalc = (condition, color) => {
    console.log(1111111111111);

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

    //角におければ置く
    let conerList = []
    for (let pos of storeArr) {
        if (coner.includes(JSON.stringify(pos))) {
            conerList.push(pos);
        }
    }
    // console.log(conerList);
    if (conerList.length > 0) {
        return { positionList: conerList };
    }

    //置ける場所のリストの中で角に近い場所を除外
    let farConerList = []
    for (let pos of storeArr) {
        if (!nearConer.includes(JSON.stringify(pos))) {
            farConerList.push(pos);
        }
    }
    console.log(storeArr);
    console.log(farConerList);
    if (farConerList.length > 0) {
        // console.log(8888888888888888888)
        // console.log(farConerList);
        return { positionList: farConerList };
    } else {
        return { positionList: storeArr };
    }

}



module.exports = { cpuCalc };