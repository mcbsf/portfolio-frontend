
resource "aws_s3_bucket" "portfolio_react_bucket" {
    bucket = "portfolio-react-bucket"
    acl    = "private"

    tags = {
        Name = "portfolio-react-bucket"
    }

    versioning {
        enabled = true
    }

    server_side_encryption_configuration {
        rule {
            apply_server_side_encryption_by_default { 
                sse_algorithm      = "AES256"
            }

            bucket_key_enabled = false
        }
    }
}

resource "aws_s3_bucket_public_access_block" "block_public_access" {
    bucket = aws_s3_bucket.portfolio_react_bucket.id
    block_public_acls       = true
    block_public_policy     = true
    ignore_public_acls      = true
    restrict_public_buckets = true
}
