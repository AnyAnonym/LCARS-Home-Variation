# LCARS Light Control Website

This website provides an interface to send signals to an SPS (Siemens Programmable Logic Controller) to control lights.

## Folder Structure

- `public/`: Static files (HTML, CSS, JS)
- `server/`: Backend server code
- `plc/`: PLC communication code
- `docs/`: Documentation

## Setup

1. Install dependencies: `npm install`
2. Run server: `npm start`
3. Open browser to `http://localhost:3000`

## SPS Integration

Integrate with SPS using appropriate protocol (e.g., Modbus, Profinet) in the server code.