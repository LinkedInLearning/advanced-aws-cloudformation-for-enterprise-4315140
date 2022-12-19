aws cloudformation deploy --template-file ./basic_s3.yml --stack-name cli-test-bucket --parameter-overrides BucketName=<BUCKET_NAME_HERE>

aws cloudformation list-stacks

aws s3 ls

aws cloudformation delete-stack --stack-name cli-test-bucket

aws cloudformation describe-stack-events --stack-name cli-test-bucket
