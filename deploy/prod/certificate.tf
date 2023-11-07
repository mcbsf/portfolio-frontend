resource "aws_acm_certificate" "prod-cloudfront-cert" {
  domain_name       = "mariosoftware.solutions"
}