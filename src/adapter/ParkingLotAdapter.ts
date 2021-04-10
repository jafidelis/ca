import ParkinkLot from "../core/entity/ParkingLot";

export default class ParkingLotAdpater {
    static create(code: string, capacity: number, openHour: number, closeHour: number, occupiedSpaces: number) {
        return new ParkinkLot(code, capacity, openHour, closeHour, occupiedSpaces);
    }
}