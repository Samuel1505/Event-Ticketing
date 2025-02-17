import {ethers} from "hardhat";



async function createEvent() {
    const _event = await ethers.getContractAt("EventContract", "0x5FbDB2315678afecb367f032d93F642f64180aa3");
    console.log(_event);
    const block = await ethers.provider.getBlock("latest");
    const time = block.timestamp;
    const latestTime = await time;
    const receipt = await _event.createEvent("pool party", "Matured minds only", latestTime+30, latestTime + 86400, ethers.parseUnits("0.00000001", 18), 1, 20);
    const _event_count = await _event.event_count();
    const _eventInstance = await _event.events(_event_count);

    console.log("RECEIPT", receipt)
    console.log("EVENT INSTANCE", _eventInstance)

} 


createEvent().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})