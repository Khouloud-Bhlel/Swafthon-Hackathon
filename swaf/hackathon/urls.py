from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
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
    path('saas/', views.saas_page, name='saas'),
    path('course/', views.course_page, name='course'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)