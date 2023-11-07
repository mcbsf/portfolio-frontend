locals {
    s3_origin_id = "dev-S3-origin-react-app"
    expression = "${var.title != "" ? var.title : var.default}"
}

resource "aws_cloudfront_origin_access_identity" "dev_oai" {
    comment = "dev-my-react-app OAI"
}

resource "aws_cloudfront_distribution" "dev_cf_distribution" {
    
    origin {
        domain_name = aws_s3_bucket.dev_portfolio_react_bucket.bucket_regional_domain_name
        origin_id   = local.s3_origin_id

        s3_origin_config {
            origin_access_identity = aws_cloudfront_origin_access_identity.dev_oai.cloudfront_access_identity_path
        }
    }
    http_version    = "http2and3"
    enabled         = true
    is_ipv6_enabled = true

    default_root_object = "index.html"

    default_cache_behavior {
        allowed_methods  = [
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "PATCH",
            "POST",
            "PUT"
        ]
        cached_methods   = ["GET", "HEAD"]
        target_origin_id = local.s3_origin_id

        forwarded_values {
        query_string = false

        cookies {
            forward = "none"
        }
        }

        viewer_protocol_policy = "redirect-to-https"
        min_ttl                = 0
        default_ttl            = 3600
        max_ttl                = 86400
        compress               = true
    }

    ordered_cache_behavior {
        path_pattern     = "/index.html"
        allowed_methods  = [
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "PATCH",
            "POST",
            "PUT"
        ]
        cached_methods   = ["GET", "HEAD", "OPTIONS"]
        target_origin_id = local.s3_origin_id

        forwarded_values {
        query_string = false

        cookies {
            forward = "none"
        }
        }

        min_ttl                = 0
        default_ttl            = 0
        max_ttl                = 0
        compress               = true
        viewer_protocol_policy = "redirect-to-https"
    }

    price_class = "PriceClass_100"

    viewer_certificate {
        cloudfront_default_certificate = true
        minimum_protocol_version = "TLSv1.2_2021"
        ssl_support_method       = "sni-only"
    }

    retain_on_delete = true

    custom_error_response {
        error_caching_min_ttl = 300
        error_code            = 403
        response_code         = 200
        response_page_path    = "/index.html"
    }

    custom_error_response {
        error_caching_min_ttl = 300
        error_code            = 404
        response_code         = 200
        response_page_path    = "/index.html"
    }

    restrictions {
        geo_restriction {
        restriction_type = "none"
        }
    }


}