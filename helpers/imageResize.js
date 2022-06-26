const sharp = require("sharp");
const AWS = require("aws-sdk");
const { v4 } = require("uuid");

const region = "us-east-1";
const bucketName = "imperfect-direct-upload-s3";
const accessKeyId = process.env.S3_ACCESS_KEY_ID;
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;

const s3 = new AWS.S3({
  accessKeyId,
  secretAccessKey,
  Bucket: bucketName,
  region,
});

module.exports = async (req, res, next) => {
  const images = [];

  const resizePromises = req.files.map(async (file) => {
    const name = v4() + "_full.jpg";

    await sharp(file.buffer)
      .toBuffer()
      .then((resized) =>
        s3
          .upload({
            Bucket: bucketName,
            Key: name,
            Body: file.buffer,
          })
          .promise()
      ),
      images.push(name);
  });

  await Promise.all([...resizePromises]);

  req.images = images;

  next();
};
