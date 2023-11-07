# Retrieve gitlab-user as a resource
data "aws_iam_user" "dev_user" {
    user_name = "gitlab-user"
}

# Create the policy to access the S3 bucket
resource "aws_iam_policy" "dev_ci_policy" {
    name        = "dev-gitlab-ci-policy"
    path        = "/"
    description = "Dev Gitlab CI policy"

    policy = jsonencode({
        Version = "2012-10-17"
        Statement = [
        {
            Action = [
            "s3:PutObject",
            "s3:PutObjectAcl"
            ],
            Effect = "Allow",
            Resource = [
            "${aws_s3_bucket.dev_portfolio_react_bucket.arn}/*"
            ]
        },
        {
            Action = [
            "s3:ListBucket"
            ],
            Effect = "Allow",
            Resource = [
            aws_s3_bucket.dev_portfolio_react_bucket.arn
            ]
        },
        ]
    })
}

# Attach the policy to our user
resource "aws_iam_policy_attachment" "dev_gitlab_ci_attachment" {
    name       = "gitlab-ci-attachment"
    users      = [data.aws_iam_user.dev_user.user_name]
    policy_arn = aws_iam_policy.dev_ci_policy.arn
}

data "aws_iam_policy_document" "dev_react_app_s3_policy" {
    statement {
        actions   = ["s3:GetObject"]
        resources = ["${aws_s3_bucket.dev_portfolio_react_bucket.arn}/*"]

        principals {
        type        = "AWS"
        identifiers = [aws_cloudfront_origin_access_identity.dev_oai.iam_arn]
        }
    }
}

resource "aws_s3_bucket_policy" "dev_react_app_bucket_policy" {
    bucket = aws_s3_bucket.dev_portfolio_react_bucket.id
    policy = data.aws_iam_policy_document.dev_react_app_s3_policy.json
}
