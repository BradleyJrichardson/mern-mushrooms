var AWS = require("aws-sdk");
require("dotenv").config();
AWS.config.region = "ap-southeast-2";

// Create S3 service object
s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// var params = {
//   Bucket: "mushroom-images-bucket",
//   Key: "Agaricus_subrufescens_3.jpg"
// };
// s3.getObject(params, function(err, data) {
//   res.writeHead(200, { "Content-Type": "image/jpeg" });
//   res.write(data.Body, "binary");
//   res.end(null, "binary");
//   console.log(data);
//   console.log(err);
// });

/// Call S3 to list the buckets
// s3.listBuckets(function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Buckets);
//   }
// });

/// pipe images from url to s3 bucket
// var options = {
//   uri:
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Amanita_crocea_-_Lindsey.jpg/150px-Amanita_crocea_-_Lindsey.jpg",
//   encoding: null
// };
// request(options, function(error, response, body) {
//   if (error || response.statusCode !== 200) {
//     console.log("failed to get image");
//     console.log(error);
//   } else {
//     s3.putObject(
//       {
//         Body: body,
//         Key: "Amanita_smithiana/2_Amanita_smithiana.jpg",
//         Bucket: "mushroom-images-bucket"
//       },
//       function(error, data) {
//         if (error) {
//           console.log("error downloading image to s3");
//         } else {
//           console.log("success uploading to s3");
//         }
//       }
//     );
//   }
// });
