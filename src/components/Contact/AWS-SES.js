import AWS from 'aws-sdk';
const uuidv1 = require('uuid/v1');

AWS.config.update({
    region: '',
    credentials: {
        "accessKeyId": "",
        "secretAccessKey": "",
        "region": "us-east-1"
    }
});

const dynamodb = new AWS.DynamoDB();

async function sendEmail(message, html) {
    const id = uuidv1();
    const params = {
        Item: {
            "_id": {
                S: id
            },
            "message": {
                S: message
            },
            "html": {
                S: html
            }
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: "domainContactEmails"
    };
    return await dynamodb.putItem(params, (err, data) => {
        if(err) console.log(err);
        else console.log(data);
    });
}
export default sendEmail;
