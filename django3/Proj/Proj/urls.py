
from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls import url , include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('home/',views.home),
    path('contacts/', views.contact),
    path('menu/', views.menu),
    path('hr/', include('hr.urls')),
    path('admin/', admin.site.urls),
]

urlpatterns += staticfiles_urlpatterns()
