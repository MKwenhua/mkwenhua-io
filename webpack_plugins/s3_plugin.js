const S3Plugin = require('webpack-s3-plugin');
const NodeEnv = process.env.NODE_ENV;

const S3PluginConfig = {
  include: /.*\.(css|js)/,
  s3Options: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.S3_BUCKET_REGION
  },
  s3UploadOptions: {
    Bucket: process.env.S3_BUCKET_NAME
  },
  cloudfrontInvalidateOptions: {
    DistributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID,
    Items: [
      "/public/bundle.js",
      "/public/bundle.js.map",
      "/public/css/main.css",
      "/public/css/main.css.map"
    ]
  }
};

const ClientS3Plugins = (
  NodeEnv === 'production' ? new S3Plugin(S3PluginConfig): null
);

module.exports = ClientS3Plugins;
