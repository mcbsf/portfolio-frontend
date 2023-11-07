# Retrieve gitlab-user as a resource
data "aws_iam_user" "user" {
    user_name = "gitlab-user"
}

# Create the policy to access the S3 bucket
resource "aws_iam_policy" "ci_policy" {
    name        = "gitlab-ci-policy"
    path        = "/"
    description = "Gitlab CI policy"

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
            "${aws_s3_bucket.portfolio_react_bucket.arn}/*"
            ]
        },
        {
            Action = [
            "s3:ListBucket"
            ],
            Effect = "Allow",
            Resource = [
            aws_s3_bucket.portfolio_react_bucket.arn
            ]
        },
        ]
    })
}

# Attach the policy to our user
resource "aws_iam_policy_attachment" "gitlab_ci_attachment" {
    name       = "gitlab-ci-attachment"
    users      = [data.aws_iam_user.user.user_name]
    policy_arn = aws_iam_policy.ci_policy.arn
}

data "aws_iam_policy_document" "react_app_s3_policy" {
    statement {
        actions   = ["s3:GetObject"]
        resources = ["${aws_s3_bucket.portfolio_react_bucket.arn}/*"]

        principals {
        type        = "AWS"
        identifiers = [aws_cloudfront_origin_access_identity.oai.iam_arn]
        }
    }
}

resource "aws_s3_bucket_policy" "react_app_bucket_policy" {
    bucket = aws_s3_bucket.portfolio_react_bucket.id
    policy = data.aws_iam_policy_document.react_app_s3_policy.json
}
