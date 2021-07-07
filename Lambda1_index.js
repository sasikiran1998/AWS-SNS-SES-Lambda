// Lambda Function 1, index.js file.
// This invokes the SNS Topic.

var AWS = require("aws-sdk");

exports.handler = function(event, context) {
    var eventText = JSON.stringify(event, null, 2);
    console.log("Received event:", eventText);
    var sns = new AWS.SNS();
    var params = {
        Message: eventText, 
        Subject: "Test SNS From Lambda",
        TopicArn: "arn:aws:sns:ap-south-1:873102235883:new_sns"
    };
    sns.publish(params, context.done);
};
