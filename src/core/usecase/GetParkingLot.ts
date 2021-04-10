import ParkingLotRepositoryMemory from "../../infra/repository/ParkingLotRepositoryMemory";
import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class GetParkinkLot {
    parkingLotRepositoru: ParkingLotRepository;

    constructor(parkingLotRepository: ParkingLotRepository) {
        this.parkingLotRepositoru = parkingLotRepository;
    }

    execute(code: string) {
        return this.parkingLotRepositoru.getParkinkLot(code);
    }
}