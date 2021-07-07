


# AWS (Amazon Web Services)

<img src="https://user-images.githubusercontent.com/69857268/124731664-12193c00-df30-11eb-9dbc-9aafc842a385.png" alt="AWS" width="300px"/> 

# AWS-SNS-SES-Lambda
Sending mail using SNS, Lambda and SES services in AWS.
## About It :
Using Aws Services, mail is sent to the Receipient Mail ID whenever the SNS topic gets published.
## Work Flow diagram :
![image](https://user-images.githubusercontent.com/69857268/124768328-34be4b80-df56-11eb-8721-e6b35baaeb5e.png)

## Prerequisites :

* AWS account 
    *  [Create it here](https://aws.amazon.com/console/) , and awail 1 year free services
* Knowledge about AWS.

## Steps to follow: 

* Verify your Mail ID in SES (Amazon Simple Email Service)
    * [Click here](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html) to know more about how to verify your Mail ID in SES.
* Create Topic in SNS (Amazon Simple Notification Service)
    * [Click here](https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html) to know more about how to create topic in SNS.
* Create IAM Roles and policies.
    * To know how to create [Click here](https://docs.amazonaws.cn/en_us/IAM/latest/UserGuide/introduction.html)
    * Create a new Role and attach the following Policies - 
        * AmazonSESFullAccess
        * CloudWatchLogsFullAccess
        * AWSLambdaBasicExecutionRole
        * AmazonSNSFullAccess
        * AWSLambda_FullAccess
        * Attach Inline Policy as well (from the code below) - 
 ```
        {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "sns:Publish",
                "sns:Subscribe"
            ],
            "Effect": "Allow",
            "Resource": ["arn:aws:sns:ap-south-1:873102235883:new_sns"]
          }
        ]
      }
```

* Create Lambda Function 1 as well as Lambda Function 2 :
    * [Click here](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) to know more about how to create Lambda function.
    * Attach the IAM Role (Created Above) while creating the Lambda function. 
    * Add the code (index.js) for the lambda functions respectively.
    * Deploy the code.
* Subscribe the Lambda function 2 - 
   * To know how, [Click here](https://docs.amazonaws.cn/en_us/sns/latest/dg/lambda-console.html)
* Publish the message in SNS -
    * To know how to publish message in SNS, [Click here](https://docs.aws.amazon.com/sns/latest/dg/sns-publishing.html)
* Check your Receipient Mail ID (inbox as well as in spam), you will be receiving the published message.
* That brings to the end of the Successfull mail sending using lambda function.

### Improvization of the above :
 If you wish to send the message to a particular phone, it can also be done using few modifications in the second lambda function.
 * Check the code in the file Imp_lambda2.js 
 * Copy paste it in the second lambda function.
 * Deploy the same.
 * Publish the SNS.
 * Get the message in your mobile.



    
