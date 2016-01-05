class BitParser {
    static encode(bitArray) {
        let keyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        //Add padding
        let copied = bitArray.slice();
        while (copied.length % 6 != 0) copied.push(0);

        let result = "";
        for (let i = 0; i < copied.length; i += 6) {
            let index = 0;
            for (let t = 0; t < 6; t++) {
                index = (index << 1) | !!copied[i+t];
            }
            result += keyString.charAt(index);
        }

        return result;
    }

    static decode(encoded, size) {
        let keyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        let result = [];
        for (let i = 0; i < encoded.length; i++) {
            let index = keyString.indexOf(encoded.charAt(i));
            for (let t = 5; t >= 0; t--) {
                result.push((index >> t) & 1);
            }
        }

        return result.slice(0, size);
    }
}

export default class MapData {
    constructor(data) {
        data = data || {};
        this._numRows = data.numRows || 15;
        this._numColumns = data.numColumns || 15;
        this.robotX = data.hasOwnProperty('robotX') ? data.robotX : 1;
        this.robotY = data.hasOwnProperty('robotY') ? data.robotY : 1;
        // 0 - right, 1 - down, 2 - left, 3 - up
        this.robotDir = data.robotDir || 0;

        let verticalCount = (this.numColumns - 1) * this.numRows;
        if (data.verticalWalls) {
            this.verticalWalls = BitParser.decode(data.verticalWalls, verticalCount);
        } else {
            this.verticalWalls = [];
            for (let i = 0; i < verticalCount; i++) {
                //DEBUG - should be 0
                this.verticalWalls.push(Math.random() < 0.5);
            }
        }

        let horizontalCount = (this.numRows - 1) * this.numColumns;
        if (data.horizontalWalls) {
            this.horizontalWalls = BitParser.decode(data.horizontalWalls, horizontalCount);
        } else {
            this.horizontalWalls = [];
            for (let i = 0; i < horizontalCount; i++) {
                //DEBUG - should be 0
                this.horizontalWalls.push(Math.random() < 0.5);
            }
        }
    }

    get numRows() {
        return this._numRows;
    }

    get numColumns() {
        return this._numColumns;
    }

    wallAt(x, y) {
        const RIGHT = 0, DOWN = 1, LEFT = 2, UP = 3;

        let result = [0, 0, 0, 0];

        if (x == 1) result[LEFT] = true;
        else result[LEFT] = this.verticalWalls[(x - 2) * this.numRows + (y - 1)];

        if (x == this.numColumns) result[RIGHT] = true;
        else result[RIGHT] = this.verticalWalls[(x - 1) * this.numRows + (y - 1)];

        if (y == 1) result[UP] = true;
        else result[UP] = this.horizontalWalls[(y - 2) * this.numColumns + (x - 1)];

        if (y == this.numRows) result[DOWN] = true;
        else result[DOWN] = this.horizontalWalls[(y - 1) * this.numColumns + (x - 1)];

        return result;
    }
}