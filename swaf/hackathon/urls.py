from django.urls import path
from . import views

app_name = 'hackathon'

urlpatterns = [
    path('', views.home_page, name='home'),
    path('register/', views.register_page, name='register'),
    path('event/', views.event_page, name='event'),
    path('login/', views.login_page, name='login'),
    path('club/', views.club_page, name='club'),
    path('events/', views.events_page, name='events'),
    path('about/', views.about_page, name='about'),
    path('chatbot/', views.chatbot_page, name='chatbot'),
    path('api/chat/', views.chat_with_gemini, name='chat_with_gemini'),
    path('api/load_chat/', views.load_chat_page, name='load_chat_page'),
]