// Abstraction layer for the different implementations of the API
// This allows us to switch between different implementations without changing the code that uses the API

const { getConfig } = require('./config');

const config = getConfig();