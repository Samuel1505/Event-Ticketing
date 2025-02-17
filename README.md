# EventContract Smart Contract

## Overview
The `EventContract` smart contract facilitates event creation, registration, ticketing, and attendance verification on the blockchain. It allows event organizers to create both free and paid events, manage participant registrations, and verify attendance using NFT-based tickets.

## Features
- **Event Creation**: Organizers can create events with specific details.
- **Registration**: Users can register for free or paid events.
- **NFT Ticketing**: A ticket NFT is minted for each registered user.
- **Attendance Verification**: Organizers can verify attendee tickets.

## Contract Details
- **Solidity Version**: `0.8.28`
- **License**: `UNLICENSED`

## Event Types
The contract supports two types of events:
- `free`: No fee is required to register.
- `paid`: Users must pay a fee to obtain a ticket.

## Contract Deployment
Ensure you have Solidity 0.8.28 and deploy the contract using Remix, Hardhat, or any Ethereum development tool.

## Functions

### 1. `createEvent()`
Creates a new event.
```solidity
function createEvent(
    string memory _title,
    string memory _desc,
    uint256 _startDate,
    uint256 _endDate,
    uint256 _eventFee,
    EventType _type,
    uint32 _egc
) external;
```
- **Requirements:**
  - `_startDate` must be in the future.
  - `_endDate` must be after `_startDate`.
  - `_eventFee` must be greater than 0 for paid events.

### 2. `registerForEvent()`
Allows users to register for an event.
```solidity
function registerForEvent(uint256 _event_id) external payable;
```
- **Requirements:**
  - The event must exist and be ongoing.
  - The user must not have already registered.
  - For paid events, the correct fee must be paid.

### 3. `verifyAttendance()`
Verifies a ticket for event attendance.
```solidity
function verifyAttendance(uint256 _eventId, uint256 _ticketId) public;
```
- **Requirements:**
  - Only the organizer can verify tickets.
  - The ticket must belong to the event.

### 4. `isVerifiedTicket()`
Checks if a ticket is verified.
```solidity
function isVerifiedTicket(uint256 _ticketId, uint256 _eventId) public view returns (bool);
```

### 5. `getHasRegistered()`
Checks if a user is registered for an event.
```solidity
function getHasRegistered(uint256 _eventId, address _address) public view returns (bool);
```

## Events
```solidity
event EventCreated(uint256 _id, address _organizer);
event RegisterEvent(uint256 _id, address _address);
event VerifiedTicket(uint256 _event_id, uint256 _ticket_id);
```
- `EventCreated`: Triggered when an event is created.
- `RegisterEvent`: Triggered when a user registers for an event.
- `VerifiedTicket`: Triggered when a ticket is verified.

## Security Considerations
- Ensure only event organizers can verify tickets.
- Prevent re-registration of users for the same event.
- Implement adequate gas optimizations for large-scale events.



