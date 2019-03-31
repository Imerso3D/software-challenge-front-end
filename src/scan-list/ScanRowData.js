export default class ScanRowData {
    constructor(id, name, elevationMax, elevationMin, userId, userName) {
        this.id = id;
        this.name = name;
        this.elevationMax = elevationMax;
        this.elevationMin = elevationMin;
        this.userId = userId;
        this.userName = userName;
    }

    toRawData() {
        return {
            id: this.id,
            name: this.name,
            elevationMax: this.elevationMax,
            elevationMin: this.elevationMin,
            scannedByUserId: this.userId
        }
    }
}