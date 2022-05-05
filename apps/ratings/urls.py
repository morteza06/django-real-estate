from django.urls import path

from . import views

urlpatterns = [
    path("<str:profile_id>/", views.create_agent_reiview, name="create-rating")
]
