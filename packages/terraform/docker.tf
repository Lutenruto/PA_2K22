resource "docker_image" "frontend" {
  name = "frontend"
  build {
    path      = "../frontend/"
    tag       = ["frontend:develop"]
    build_arg = {}
    label = {
      author = "MaxLuis"
    }
  }
}

resource "docker_image" "backend" {
  name = "backend"
  build {
    path = "../backend/"
    tag  = ["backend:develop"]
    label = {
      author = "MaxLuis"
    }
  }
}

resource "docker_image" "mongodb" {
  name = "mongo:latest"
}

resource "docker_network" "private_network" {
  name       = "my_network"
  driver     = "bridge"
  attachable = true
}

resource "docker_container" "mongodb" {
  name  = "mongodb_container"
  image = docker_image.mongodb.latest
  env   = ["MONGO_INITDB_ROOT_USERNAME=${var.DB_USER}", "MONGO_INITDB_ROOT_PASSWORD=${var.DB_PASSWORD}"]
  ports {
    internal = 27017
    external = 27017
    protocol = "tcp"
  }
  networks_advanced {
    name    = docker_network.private_network.name
    aliases = ["docknet"]
  }
}

resource "docker_container" "backend" {
  name  = "backend_container"
  image = docker_image.backend.latest
  env   = ["DB_HOST=${var.DB_HOST}", "DB_USER=${var.DB_USER}", "DB_PASSWORD=${var.DB_PASSWORD}", "DB_NAME=${var.DB_NAME}", "DB_PORT=${var.MONGO_PORT}", "PORT=${var.BACKEND_PORT}"]
  ports {
    internal = var.BACKEND_PORT
    external = var.BACKEND_PORT
    protocol = "tcp"
  }
  networks_advanced {
    name    = docker_network.private_network.name
    aliases = ["docknet"]
  }
  depends_on = [
    docker_container.mongodb
  ]
}

resource "docker_container" "frontend" {
  name  = "frontend_container"
  image = docker_image.frontend.latest
  env = ["INLINE_RUNTIME_CHUNK=${var.INLINE_RUNTIME_CHUNK}",
    "NODE_ENV=${var.NODE_ENV}",
    "PORT=${var.PORT}",
    "NODE_VERSION=${var.NODE_VERSION}",
    "REACT_APP_RECAPTCHA_SITE_KEY=${var.REACT_APP_RECAPTCHA_SITE_KEY}",
    "REACT_APP_IPFS_GATEWAY=${var.REACT_APP_IPFS_GATEWAY}",
    "SKIP_PREFLIGHT_CHECK=${var.SKIP_PREFLIGHT_CHECK}",
    "REACT_APP_API_BASEPATH=${var.REACT_APP_API_BASEPATH}"
  ]
  ports {
    internal = 3000
    external = 3000
    protocol = "tcp"
  }
}

