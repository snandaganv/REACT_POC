#######################################
# Provider
#######################################
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.30.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

#######################################
# CI injected variables and parameters
#######################################
variable "deploy_repo" {
  type    = string
  default = "agcp-ui"
}

variable "deploy_env" {
  type    = string
  default = "dev"
}

data "aws_ssm_parameter" "cert" {
  name = "/AGbase/agcloud-cert-arn"
}

#######################################
# module for static website
#######################################
module "static_website" {
  source = "github.com/arisglobal/sharedactions/terraform/modules/s3_cloudfront"
  name   = "${var.deploy_repo}-${var.deploy_env}-static-website"

  s3_bucket_name       = "${var.deploy_repo}-${var.deploy_env}-bucket"
  dns_name             = "${var.deploy_repo}-${var.deploy_env}.agcloud.bz"
  #dns_name             = var.dns_name
  acm_certificate_arn  = data.aws_ssm_parameter.cert.value
  block_ofac_countries = var.block_ofac_countries

  cache_ttl = {
    min     = var.cache_ttl_min
    default = var.cache_ttl_default
    max     = var.cache_ttl_max
  }
}
