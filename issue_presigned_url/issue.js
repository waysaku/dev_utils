var AWS = require('aws-sdk');
AWS.config.update({
    "accessKeyId"     :"*******" ,
    "secretAccessKey" :"*******",
    "region"          :"*******"  //ap-northeast-1
});

var s3 = new AWS.S3({
  signatureVersion: 'v4'
});
var params = {
  Bucket      : 'BUCKET NAME',
  Key         : 'FILE NAME (PATH)',
  Expires     : 60*60 // 1 hour
  //,ContentType : 'gzip'

};
s3.getSignedUrl('putObject', params, function (err, url) {
    console.log("The URL is", url);
});
