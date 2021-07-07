// Lambda function 2 code.
// This gets the messages which are published in the SNS and sends Mail.

var aws = require('aws-sdk');
var ses = new aws.SES({ region: "ap-south-1" });
exports.handler = function(event, context) {
  var SnsMessageId = event.Records[0].Sns.MessageId;
  var SnsMessage = event.Records[0].Sns.Message;
  var params = {
    Destination: {
      ToAddresses: ['Recepient Mail ID'],
    },
    Message: {
      Body: {
        Text: { Data: SnsMessage },
      },

      Subject: { Data: SnsMessageId },
    },
    Source: "Sender Mail ID",
  };
 return ses.sendEmail(params).promise();
};
