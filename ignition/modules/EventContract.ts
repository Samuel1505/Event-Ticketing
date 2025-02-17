// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const EventContractModule = buildModule("LockModule", (m) => {


  const Event = m.contract("EventContract");

  return { Event };
});

export default EventContractModule;
