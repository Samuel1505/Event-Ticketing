// import {ethers} from "hardhat";



// async function registerEvent() {
//     const _event = await ethers.getContractAt("EventContract", "0x5FbDB2315678afecb367f032d93F642f64180aa3");
//     const owner = await ethers.provider.getSigner()
//     const block = await ethers.provider.getBlock("latest");
//     const time = block.timestamp;
//     const latestTime = await time;
//     const receipt = await _event.registerForEvent(2, {value:ethers.parseUnits("0.00000001", 18)})
//     const _hasRegistered = await _event.getHasRegistered(2, owner.address);
    

//     console.log("REGISTERED", _hasRegistered)

// } 


// registerEvent().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// })


