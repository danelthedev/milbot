const { AttachmentBuilder } = require('discord.js');
const path = require('path');
const fs = require('fs');

module.exports = {
    cronExpression: '0 0 * * *',
    execute(client) {
        console.log('Sending prostul zilei!');
        const imagePath = path.resolve(__dirname, '../../resources/images/prostuZilei/prostulZileiDeAzi.png');

        fs.access(imagePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.error('File does not exist:', imagePath);
            } else {
                console.log('File exists:', imagePath);
            }
        });

        // Create the attachment
        const attachment = new AttachmentBuilder("C:\\Users\\Danel\\Desktop\\MilBot\\resources\\images\\prostuZilei\\prostulZileiDeAzi.png");

        // User ID to mention
        const userId = '640277014544384000';

        // Add your task logic here, for example:
        client.channels.cache.get("667830780721889294").send({
            content: `Felicitari <@${userId}> ai castigat premiul "Prostul Zilei"!`,
            files: [attachment]
        }).catch(console.error);
    }
};