import ParkedCar from "../entity/ParkedCar";
import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class EnterParkingLot {
    parkinkLotRepository: ParkingLotRepository;

    constructor(parkingLotRepository: ParkingLotRepository) {
        this.parkinkLotRepository = parkingLotRepository;
    }

    async execute(code: string, plate: string, date: Date) {
        const parkingLot = await this.parkinkLotRepository.getParkinkLot(code);
        const parkedCar = new ParkedCar(code, plate, date);
        if (!parkingLot.isOpen(parkedCar.date)) throw new Error("The parking lot is close");
        if (parkingLot.isFull()) throw new Error('The parking lot is full!');
        await this.parkinkLotRepository.savedParkedCar(parkedCar.code, parkedCar.plate, parkedCar.date);
        return parkingLot;
    }
}