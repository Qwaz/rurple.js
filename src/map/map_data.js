export default class MapData {
    constructor(data) {
        data = data || {};
        this._numRows = data.numRows || 15;
        this._numColumns = data.numColumns || 15;
    }

    get numRows() {
        return this._numRows;
    }

    get numColumns() {
        return this._numColumns;
    }
}