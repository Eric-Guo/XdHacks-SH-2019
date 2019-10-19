set :nginx_use_ssl, true

server "oauth2id.com", user: "ubuntu", roles: %w{app db web}
