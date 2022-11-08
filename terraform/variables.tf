variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "eu-west-1"
}

variable "cache_ttl_min" {
  description = "CloudFront cache ttl min"
  type        = number
}

variable "cache_ttl_default" {
  description = "CloudFront cache ttl default"
  type        = number
}

variable "cache_ttl_max" {
  description = "CloudFront cache ttl max"
  type        = number
}

variable "block_ofac_countries" {
  description = "flag to block ofac countries"
  type        = bool
  default     = false
}

#variable "dns_name" {
#  description = "dns name"
#  type        = string
#  default     = ""
#}
