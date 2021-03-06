#!/bin/sh
echo "********************************"
echo "*                              *"
echo "* Uploading files to S3 Bucket *"
echo "*                              *"
echo "********************************"
aws s3 cp ./ s3://dcbakes-store/ --recursive
echo "********************************"
echo "*                              *"
echo "*    Creating Invalidations    *"
echo "*                              *"
echo "********************************"
aws cloudfront create-invalidation --distribution-id E2J7BOLGCUH7U9 --paths "/*"
read -p "Press enter to continue"