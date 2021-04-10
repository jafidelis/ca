import ParkedCar from "../entity/ParkedCar";
import ParkingLot from "../entity/ParkingLot";

export default interface ParkingLotRepository {
    getParkinkLot(code: string) : Promise<ParkingLot>;
    savedParkedCar(code: string, plate: string, date: Date) : void;
}