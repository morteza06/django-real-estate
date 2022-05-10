from .base import *

EMAIL_BACKEND = "djcelery_email.backends.CeleryEmailBackend"
EMAIL_HOST = env("EMAIL_HOST")
EMAIL_HOST_TLS = True
EMAIL_PORT = env("EMAIL_PORT")
EMAIL_HOST_USER = env("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = env("EMAIL_HOST_PASSWORD")
EMAIL_HOST_EMAIL = "mgahangir2006@gmail.com"
DOMAIN = env("DOMAIN")
SITE_NAME = "Real Estate"
DEFAULT_FROM_EMAIL = "mgahangir2006@gmail.com"

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

CELERY_BROKER_URL = env("CELERY_BROKER")
CELERY_RESULT_BACKEND = env("CELERY_BACKEND")
CELERY_TIMEZONE = "Asia/Tehran"