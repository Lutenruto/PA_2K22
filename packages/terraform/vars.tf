variable "DB_USER" {
  type    = string
  default = "admin_pa_user"
}

variable "DB_PASSWORD" {
  type    = string
  default = "blablabla"
}

variable "DB_NAME" {
  type    = string
  default = "projet_annuel"
}

variable "DB_HOST" {
  type    = string
  default = "mongodb_container"
}

variable "BACKEND_PORT" {
  type    = number
  default = 8080
}

variable "MONGO_PORT" {
  type    = number
  default = 27017
}


## FRONTEND variables

variable "INLINE_RUNTIME_CHUNK" {
  type    = bool
  default = false
}

variable "NODE_ENV" {
  type    = string
  default = "dev"
}

variable "PORT" {
  type    = number
  default = 3000
}

variable "NODE_VERSION" {
  type    = string
  default = "16.6.1"
}

variable "REACT_APP_RECAPTCHA_SITE_KEY" {
  type    = string
  default = ""
}
variable "REACT_APP_IPFS_GATEWAY" {
  type    = string
  default = "https://ipfs.io/ipfs"
}

variable "SKIP_PREFLIGHT_CHECK" {
  type    = bool
  default = true
}

variable "REACT_APP_API_BASEPATH" {
  type    = string
  default = "http://localhost:8080"
}
