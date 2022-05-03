from .base import *

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = env("EMAIL_HOST")
EMAIL_HOST_TLS = True
EMAIL_PORT = env("EMAIL_PORT")
EMAIL_HOST_USER = env("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")
EMAIL_HOST_EMAIL = "mgahangir2006@gmail.com"
DOMAIN = env("DOMAIN")
SITE_NAME = "Real Estate"

DATABASES = {
    "default": {
        "ENGINE": env("POSTGRES_ENGINE"),
        "NAME": env("POSTGRES_DB"),
        "USER": env("POSTGRES_USER"),
        "PASSWORD": env("POSTGRES_PASSWORD"),
        "HOST": env("PG_HOST"),
        "PORT": env("PG_PORT"),
    }
}
