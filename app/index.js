(async function () {
  const config = require('./config')
  const messageAction = require('./message-action')
  const { MessageSender, MessageReceiver } = require('./messaging')

  const receiver = new MessageReceiver('receiver', config, messageAction)
  const sender = new MessageSender('sender', config)

  const message = {
    content: 'hello world'
  }

  await sender.sendMessage(message)
  await sender.closeConnection()
  await receiver.closeConnection()
}())
