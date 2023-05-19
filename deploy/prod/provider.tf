terraform {
    required_providers {
        aws = {
            source  = "hashicorp/aws"
            version = "<= 3.42.0"
        }
    }
}

provider "aws" {
  region     = "us-east-1"
  access_key = file("./sensitive_data/access_key.txt")
  secret_key = file("./sensitive_data/secret_key.txt")
} 