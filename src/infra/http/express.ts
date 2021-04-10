import Express from "express";
import ExpressAdapter from "../../adapter/ExpressAdapter";
import ParkingLotController from "../../controller/ParkingLotController";
const app = new Express();

// Aqui estamos acoplando a arquitetura, ligando o userCase diretamente na camada de api
// app.get("/parkingLots/:code", async function(req, res) {
//     const parkinLotRepositorySql = new ParkingLotRepositorySql();
//     const getParkingLot = new GetParkinkLot(parkinLotRepositorySql);
//     const parkingLot = await getParkingLot.execute(req.params.code);
//     res.json(parkingLot);
// });

app.get("/parkingLots/:code", ExpressAdapter.create(ParkingLotController.getParkingLot));

app.listen(3000);