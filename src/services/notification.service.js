const amqplib = require("amqplib");
const mailSender = require("../config/email.config");
const { ServerConfig } = require("../config");

async function connectQueue() {
    try {
        const connect = await amqplib.connect("amqp://localhost");
        const channel = await connect.createChannel();
        await channel.assertQueue("noti-queue");
        channel.consume("noti-queue", (data) => {
            const response = JSON.parse(data.content.toString());
            mailSender.sendMail({
                from: ServerConfig.GMAIL,
                to: "bd8830759797@gmail.com",
                subject: response.title,
                text: JSON.stringify(response.response),
            });
            channel.ack(data);
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { connectQueue };
