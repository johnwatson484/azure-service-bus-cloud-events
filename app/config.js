const config = {
  host: process.env.AZURE_SERVICE_BUS_HOST,
  username: process.env.AZURE_SERVICE_BUS_USERNAME,
  password: process.env.AZURE_SERVICE_BUS_PASSWORD,
  address: process.env.AZURE_SERVICE_BUS_ADDRESS
}

module.exports = config
