from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin 
from django.utils.translation import gettext_lazy as _
from .forms import CustomerUserChangeForm,CustomerUserCreationForm
from .models import User 

class UserAdmin(BaseUserAdmin):
    ordering = ['email']
    add_form = CustomerUserCreationForm
    form = CustomerUserChangeForm
    model = User
    list_display = ['pkid', 'id', 'email', 'username', 'first_name', 'last_name', 'is_staff', 'is_active']
    list_display_link = ['id', 'email']
    list_filter = ['email', 'username', 'first_name', 'last_name' , 'is_staff', 'is_active']
    fieldsets = (
            (
                _("Login Credentials"),
                        {
                            "fields": (
                                "email",
                                "password",
                            )
                        },
            ),
            (
                _("Personal Information"),
                {
                    "fields": (
                        "username", 
                        "first_name",
                        "last_name",
                    )
                },
                        
            ),
            (
                _("Permissions and Groups"),
                    {
                        "fields": (
                            "is_active",
                            "is_staff",
                            "is_superuser",
                            "groups",
                            "user_premissions",
                        )
                    },
            ),
            (_("Important Dates"), {"fields": ("last_login", "date_joined")}),
    )
    add_fieldsets=(
        (
            None, 
            {
                "classes": ("wide",),
                "fields": ("email", "password1", "password2", "is_staff",
                           "is_active"),
            },
        ),
    )
    search_fields = ["email", "username", "first_name", "last_name"]


admin.site.register(User, UserAdmin)  
