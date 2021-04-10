import ParkingLotAdpater from "../../adapter/ParkingLotAdapter";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {
  parkigLots = [
    {
      code: "shopping",
      capacity: 5,
      open_hour: 8,
      close_hour: 22,
    },
  ];

  parkedCars = [];

  getParkinkLot(code: string): Promise<ParkingLot> {
    const parkingLotData = this.parkigLots.find((parkinkLot) => parkinkLot.code === code);
    const occupiedSpaces = this.parkedCars.length;
    const parkingLot = ParkingLotAdpater.create(
      parkingLotData.code,
      parkingLotData.capacity,
      parkingLotData.open_hour,
      parkingLotData.close_hour,
      occupiedSpaces
    );
    return Promise.resolve(parkingLot);
  }

  savedParkedCar(code: string, plate: string, date: Date): void {
    this.parkedCars.push({ code, plate, date });
  }
}