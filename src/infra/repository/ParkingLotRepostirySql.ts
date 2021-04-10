import ParkingLotAdpater from "../../adapter/ParkingLotAdapter";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";
import database from "../database/database";

export default class ParkingLotRepositorySql implements ParkingLotRepository {

    async getParkinkLot(code: string): Promise<ParkingLot> {
        const parkingLot = await database.oneOrNone(`
        select 
            code, 
            capacity, 
            open_hour, 
            close_hour, 
            (select count(*) from parked_car pc where pc.code = pl.code):: int as occupied_spaces 
        from parking_lot pl where pl.code = $1`, 
        [code]);
        return ParkingLotAdpater.create(parkingLot.code, parkingLot.capacity, parkingLot.open_hour, parkingLot.close_hour, parkingLot.occupied_spaces);
    }

    async savedParkedCar(code: string, plate: string, date: Date): Promise<void> {
        await database.none("insert into parked_car (code, plate, enter_date) values ($1, $2, $3)", [code, plate, date]);
    }

}