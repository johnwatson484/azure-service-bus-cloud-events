(async function () {
  const config = require('./config')
  const messageAction = require('./message-action')
  const { MessageSender, MessageReceiver } = require('./messaging')

  const message = {
    body: 'hello world',
    customProperties: {
      customType: 'my custom type'
    }
  }

  // send and receive from queue
  const queueReceiver = new MessageReceiver('queue-receiver', config.queueConfig, messageAction)
  const queueSender = new MessageSender('queue-sender', config.queueConfig)
  await queueSender.sendMessage(message)
  await queueSender.closeConnection()
  await queueReceiver.closeConnection()

  // send to topic and receive from subscription
  const subscriptionReceiver = new MessageReceiver('queue-receiver', config.subscriptionConfig, messageAction)
  const topicSender = new MessageSender('queue-sender', config.topicConfig)
  await topicSender.sendMessage(message)
  await topicSender.closeConnection()
  await subscriptionReceiver.closeConnection()
}())
