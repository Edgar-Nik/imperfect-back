const aws = require("aws-sdk");
const { v4 } = require("uuid");

const region = "us-east-1";
const bucketName = "imperfect-direct-upload-s3";
const accessKeyId = process.env.S3_ACCESS_KEY_ID;
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  Bucket: bucketName,
  secretAccessKey,
  signatureVersion: "v4",
});

const generateUploadUrl = async (req, res) => {
  try {
    const imageName = v4();
    const params = {
      Bucket: bucketName,
      Key: imageName,
      Expires: 60,
    };

    const uploadUrl = await s3.getSignedUrlPromise("putObject", params);
    res.json({
      url: uploadUrl,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const uploadImages = async (req, res) => {
  try {
    res.json(req.images);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  generateUploadUrl,
  uploadImages,
};
