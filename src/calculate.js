    //石が置ける位置かどうかを判定し
    //置ける場合、置いた後のconditionを返すï
    export function calcCondition(position, condition) {

        const xPos = position[0];
        const yPos = position[1];
        const stoneColor = position[2]

        //すでに石がある場合false
        if (condition[xPos][yPos][2] != "-") {
            return false;
        }

        //縦（上下）

        //横（左右）

        //ななめ（右上、右下、左下、左上）


        //test
        //白の石を返す
        condition[xPos][yPos][2] = stoneColor;

        console.log(condition);

        return condition;
    }