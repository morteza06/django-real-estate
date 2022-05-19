from rest_framework.pagination import PageNumberPagination

class PropertyPaginaiton(PageNumberPagination):
    page_size = 4