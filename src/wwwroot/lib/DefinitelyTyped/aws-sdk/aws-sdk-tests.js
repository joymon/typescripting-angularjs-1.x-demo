/// <reference path="aws-sdk.d.ts" />
var AWS = require('aws-sdk');
var str;
var creds;
creds = new AWS.Credentials(str, str);
creds = new AWS.Credentials(str, str, str);
str = creds.accessKeyId;
/*
 * SQS
 */
var sqs;
//Default constructor
sqs = new AWS.SQS();
//Locking the API Version
sqs = new AWS.SQS({ apiVersion: '2012-11-05' });
// Locking the API Version Globally
AWS.config.apiVersions = {
    sqs: '2012-11-05',
};
sqs.addPermission({
    AWSAccountIds: [
        'STRING_VALUE',
    ],
    Actions: [
        'STRING_VALUE',
    ],
    Label: 'STRING_VALUE',
    QueueUrl: 'STRING_VALUE' /* required */
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.changeMessageVisibility({
    QueueUrl: 'STRING_VALUE',
    ReceiptHandle: 'STRING_VALUE',
    VisibilityTimeout: 0 /* required */
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.changeMessageVisibilityBatch({
    Entries: [
        {
            Id: 'STRING_VALUE',
            ReceiptHandle: 'STRING_VALUE',
            VisibilityTimeout: 0
        },
    ],
    QueueUrl: 'STRING_VALUE' /* required */
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.createQueue({
    QueueName: 'STRING_VALUE',
    Attributes: {
        someKey: 'STRING_VALUE',
    }
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.deleteMessage({
    QueueUrl: 'STRING_VALUE',
    ReceiptHandle: 'STRING_VALUE' /* required */
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.deleteMessageBatch({
    Entries: [
        {
            Id: 'STRING_VALUE',
            ReceiptHandle: 'STRING_VALUE' /* required */
        },
    ],
    QueueUrl: 'STRING_VALUE' /* required */
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.deleteQueue({
    QueueUrl: 'STRING_VALUE' /* required */
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.getQueueAttributes({
    QueueUrl: 'STRING_VALUE',
    AttributeNames: [
        'Policy | VisibilityTimeout | MaximumMessageSize | MessageRetentionPeriod | ApproximateNumberOfMessages | ApproximateNumberOfMessagesNotVisible | CreatedTimestamp | LastModifiedTimestamp | QueueArn | ApproximateNumberOfMessagesDelayed | DelaySeconds | ReceiveMessageWaitTimeSeconds | RedrivePolicy',
    ]
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.getQueueUrl({
    QueueName: 'STRING_VALUE',
    QueueOwnerAWSAccountId: 'STRING_VALUE'
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.listDeadLetterSourceQueues({
    QueueUrl: 'STRING_VALUE' /* required */
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.listQueues({
    QueueNamePrefix: 'STRING_VALUE'
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.purgeQueue({
    QueueUrl: 'STRING_VALUE' /* required */
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.receiveMessage({
    QueueUrl: 'STRING_VALUE',
    AttributeNames: [
        'Policy | VisibilityTimeout | MaximumMessageSize | MessageRetentionPeriod | ApproximateNumberOfMessages | ApproximateNumberOfMessagesNotVisible | CreatedTimestamp | LastModifiedTimestamp | QueueArn | ApproximateNumberOfMessagesDelayed | DelaySeconds | ReceiveMessageWaitTimeSeconds | RedrivePolicy',
    ],
    MaxNumberOfMessages: 0,
    MessageAttributeNames: [
        'STRING_VALUE',
    ],
    VisibilityTimeout: 0,
    WaitTimeSeconds: 0
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.removePermission({
    Label: 'STRING_VALUE',
    QueueUrl: 'STRING_VALUE' /* required */
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.sendMessage({
    MessageBody: 'STRING_VALUE',
    QueueUrl: 'STRING_VALUE',
    DelaySeconds: 0,
    MessageAttributes: {
        someKey: {
            DataType: 'STRING_VALUE',
            BinaryListValues: [
                new Buffer('...') || 'STRING_VALUE',
            ],
            BinaryValue: new Buffer('...') || 'STRING_VALUE',
            StringListValues: [
                'STRING_VALUE',
            ],
            StringValue: 'STRING_VALUE'
        },
    }
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.sendMessageBatch({
    Entries: [
        {
            Id: 'STRING_VALUE',
            MessageBody: 'STRING_VALUE',
            DelaySeconds: 0,
            MessageAttributes: {
                someKey: {
                    DataType: 'STRING_VALUE',
                    BinaryListValues: [
                        new Buffer('...'),
                    ],
                    BinaryValue: new Buffer('...'),
                    StringListValues: [
                        'STRING_VALUE',
                    ],
                    StringValue: 'STRING_VALUE'
                },
            }
        },
    ],
    QueueUrl: 'STRING_VALUE' /* required */
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
sqs.setQueueAttributes({
    Attributes: {
        someKey: 'STRING_VALUE',
    },
    QueueUrl: 'STRING_VALUE' /* required */
}, function (err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else
        console.log(data); // successful response
});
