const request = require("request");
var AWS = require("aws-sdk");
require("dotenv").config();
AWS.config.region = "ap-southeast-2";

// Create S3 service object
s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// Call S3 to list the buckets
// s3.listBuckets(function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Buckets);
//   }
// });

var options = {
  uri:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Amanita_crocea_-_Lindsey.jpg/150px-Amanita_crocea_-_Lindsey.jpg",
  encoding: null
};
request(options, function(error, response, body) {
  if (error || response.statusCode !== 200) {
    console.log("failed to get image");
    console.log(error);
  } else {
    s3.putObject(
      {
        Body: body,
        Key: "Amanita_smithiana/2_Amanita_smithiana.jpg",
        Bucket: "mushroom-images-bucket"
      },
      function(error, data) {
        if (error) {
          console.log("error downloading image to s3");
        } else {
          console.log("success uploading to s3");
        }
      }
    );
  }
});

// so im thinking what i should do is store the paths to the images on s3 in the mongodb document?
// this way i retieve the document i can then fetch the associated images from s3

// s3://mushroom-images-bucket/Amanita_smithiana/1_Amanita_smithiana.jpg
