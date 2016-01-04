export default class MapData {
    constructor(data) {
        data = data || {};
        this._numRows = data.numRows || 15;
        this._numColumns = data.numColumns || 15;
        this.robotX = data.hasOwnProperty('robotX') ? data.robotX : 1;
        this.robotY = data.hasOwnProperty('robotX') ? data.robotY : 1;
        // 0 - right, 1 - down, 2 - left, 3 - up
        this.robotDir = data.robotDir || 0;
    }

    get numRows() {
        return this._numRows;
    }

    get numColumns() {
        return this._numColumns;
    }
}