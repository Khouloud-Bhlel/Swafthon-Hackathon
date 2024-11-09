from django.urls import path
from . import views

app_name = 'hackathon'

urlpatterns = [
    path('', views.home_page, name='home'),
]
