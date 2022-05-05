from django.urls import path
from . import views

urlpatterns = [
    path("all/", views.ListAllPropertiesAPIView.as_view(), name="all-properties"),
    path("agents/", views.ListAgentPropertiesAPIView.as_view(), name="agent-properties"),
    path("details/<slug:slug>/", views.PropertyDetailView.as_view(), name="details-property"),
    path("create/", views.create_property_api_view, name="create-property"),
    path("update/<slug:slug>/", views.update_property_api_view, name="update-property"),
    path("delete/<slug:slug>/", views.delete_property_api_view, name="delete-property"),
    path("search/", views.PropertySearchAPIView.as_view(), name="search-property"),
]
