//石が置ける位置かどうかを判定し
//置ける場合、置いた後のconditionを返すï
export function calcCondition(position, condition) {

    const xPos = position[0];
    const yPos = position[1];
    const stoneColor = position[2]

    console.log(stoneColor);

    //すでに石がある場合false
    if (condition[xPos][yPos][2] != "-") {
        return false;
    }

    //石を置ける場所フラグ
    let puttable = false;

    //ひっくり返す石リスト
    let changeStoneList = [];

    //一時保存用
    let storeArr = [];

    //ひっくり返すフラグ
    let flag = false;

    //横（左右）
    //左
    if (xPos >= 2) {
        let search = xPos;
        while (search >= 1 && (!flag)) {
            if (condition[search - 1][yPos][2] == "-") {
                //左隣に何もない時
                flag = true;
                storeArr = [];
            } else if (condition[search - 1][yPos][2] == stoneColor) {
                //左隣が置いた石と同じ色の時
                if (storeArr.length >= 1) {
                    //一時保存用に石がある時
                    //ひっくり返すリストに追加
                    changeStoneList = [...changeStoneList, ...storeArr];
                    puttable = true;
                    storeArr = [];
                }
                flag = true;

            } else {
                //左隣が異なる色の時
                //一時保存に追加
                storeArr.push([search - 1, yPos, stoneColor]);
                console.log(999999);
            }
            search--;
        }
    }

    //フラグをリセット
    flag = false;

    //右
    if (xPos <= 5) {
        let search = xPos;
        while (search <= 6 && (!flag)) {
            if (condition[search + 1][yPos][2] == "-") {
                //右隣に何もない時
                flag = true;
                storeArr = [];
            } else if (condition[search + 1][yPos][2] == stoneColor) {
                //右隣が置いた石と同じ色の時
                if (storeArr.length >= 1) {
                    //一時保存用に石がある時
                    //ひっくり返すリストに追加
                    changeStoneList = [...changeStoneList, ...storeArr];
                    puttable = true;
                    storeArr = [];
                }
                flag = true;
            } else {
                //右隣が異なる色の時
                //一時保存に追加
                storeArr.push([search + 1, yPos, stoneColor]);
            }
            search++;
        }
    }

    //フラグをリセット
    flag = false;

    //縦（上下）
    //上
    if (yPos >= 2) {
        let search = yPos;
        while (search >= 1 && (!flag)) {
            if (condition[xPos][search - 1][2] == "-") {
                //左隣に何もない時
                flag = true;
                storeArr = [];
            } else if (condition[xPos][search - 1][2] == stoneColor) {
                //左隣が置いた石と同じ色の時
                if (storeArr.length >= 1) {
                    //一時保存用に石がある時
                    //ひっくり返すリストに追加
                    changeStoneList = [...changeStoneList, ...storeArr];
                    puttable = true;
                    storeArr = [];
                }
                flag = true;

            } else {
                //左隣が異なる色の時
                //一時保存に追加
                storeArr.push([xPos, search - 1, stoneColor]);
            }
            search--;
        }
    }

    //フラグをリセット
    flag = false;

    //下
    if (yPos <= 5) {
        let search = yPos;
        while (search <= 6 && (!flag)) {
            if (condition[xPos][search + 1][2] == "-") {
                //下に何もない時
                flag = true;
                storeArr = [];
            } else if (condition[xPos][search + 1][2] == stoneColor) {
                //下が置いた石と同じ色の時
                if (storeArr.length >= 1) {
                    //一時保存用に石がある時
                    //ひっくり返すリストに追加
                    changeStoneList = [...changeStoneList, ...storeArr];
                    puttable = true;
                    storeArr = [];
                }
                flag = true;

            } else {
                //下が異なる色の時
                //一時保存に追加
                storeArr.push([xPos, search + 1, stoneColor]);
            }
            search++;
        }
    }



    //ななめ（右上、右下、左下、左上）


    if (!puttable) {
        //置ける位置ではない時false返す
        return false;
    } else {
        //置いた石
        changeStoneList.push([
            xPos, yPos, stoneColor
        ]);
    }

    for (let pos of changeStoneList) {
        //ひっくり返す石
        condition[pos[0]][pos[1]][2] = stoneColor;
    }

    return [condition, changeStoneList];
}