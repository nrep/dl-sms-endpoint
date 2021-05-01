const mongoose = require('mongoose');
const mongooseConnection = mongoose.createConnection("mongodb+srv://admin:rekaniturize@paragon-cluster.jmjlk.mongodb.net/providence?retryWrites=true&w=majority", { useNewUrlParser: true });

const deliveryResponseSchema = mongoose.Schema({
    messageid: String,
    status: String,
    created: { type: Date, default: Date.now }
});

const DeliveryResponse = mongooseConnection.model('DeliveryResponse', deliveryResponseSchema, "deliveryResponses");

module.exports = { mongooseConnection, DeliveryResponse };