const { ServiceBusClient } = require('@azure/service-bus')

class MessageBase {
  constructor (name, config) {
    this.name = name
    this.sbClient = ServiceBusClient.createFromConnectionString(`Endpoint=sb://${config.host}/;SharedAccessKeyName=${config.username};SharedAccessKey=${config.password}`)
    this.queueClient = this.sbClient.createQueueClient(config.address)
  }

  async closeConnection () {
    await this.queueClient.close()
    await this.sbClient.close()
    console.log(`${this.name} connection closed`)
  }
}

module.exports = MessageBase
