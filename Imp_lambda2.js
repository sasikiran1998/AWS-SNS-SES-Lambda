var aws = require('aws-sdk');
const sns = new aws.SNS({region:'ap-south-1'});

exports.handler = function(event, context) {
  var snsmessage = event.Records[0].Sns.Message;
      sns.publish({
       Message: snsmessage,
       PhoneNumber: '+91XXXXXXXXXX'
    }, function (err, data) {
       if (err) {
          console.log(err);
          callback(err, null);
       } else {
          console.log(data);
          callback(null, data);
       }	
    });
 };
