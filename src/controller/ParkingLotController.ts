import GetParkinkLot from "../core/usecase/GetParkingLot";
import ParkingLotRepositorySql from "../infra/repository/ParkingLotRepostirySql";

export default class ParkingLotController {
    static async getParkingLot(params, body) {
        const parkinLotRepositorySql = new ParkingLotRepositorySql();
        const getParkingLot = new GetParkinkLot(parkinLotRepositorySql);
        const parkingLot = await getParkingLot.execute(params.code);
        return parkingLot;
    }
}