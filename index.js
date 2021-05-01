const fastify = require('fastify')({ logger: true })
const { MongoClient } = require("mongodb");
const { DeliveryResponse } = require('./models');

const uri = "mongodb+srv://admin:rekaniturize@paragon-cluster.jmjlk.mongodb.net/providence?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Declare a route
fastify.get('/delivered', async (request, reply) => {
    reply.send(await DeliveryResponse.find({}));
})

fastify.get('/deliversms', async (request, reply) => {
    DeliveryResponse.insertMany(request.query);
    reply.send(request.query);
})

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()