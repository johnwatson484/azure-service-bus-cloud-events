# Azure Service Bus Examples

Examples for interacting with Azure Service Bus using Node.js

## Messaging module

Azure Service Bus SDK has been abstracted within the `messaging` module for simplicity.

## Prerequisites

- Azure Service Bus namespace
- Azure Service Bus queue
- Azure Service Bus topic
- Azure Service Bus subscription
- Node 14+ or Docker

### Environment variables

The following environment variables should be set referring to your Azure Service Bus subscription

|Variable|Description|
|---|---|
|`AZURE_SERVICE_BUS_HOST`|Service Bus host, for example `myservicebus.servicebus.windows.net`|
|`AZURE_SERVICE_BUS_USERNAME`|Service Bus Shared Access Key name|
|`AZURE_SERVICE_BUS_PASSWORD`|Service Bus Shared Access Key value|
|`AZURE_SERVICE_BUS_QUEUE`|Service Bus queue name|
|`AZURE_SERVICE_BUS_TOPIC`|Service Bus topic name|
|`AZURE_SERVICE_BUS_SUBSCRIPTION`|Service bus subscription name|

## Running examples

All examples are within the `app/index.js` module.

Running the module will send and receive from both the queue and the topic/subscription pairing.

### Using Node
`node app`

### Using Docker Compose
`docker-compose up --build`
