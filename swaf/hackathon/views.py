from django.shortcuts import render

def home_page(request):
    return render(request, 'HomePage.html')

def register_page(request):
    return render(request, 'RegisterPage.html')

def event_page(request):
    return render(request, 'EventPage.html')

def login_page(request):
    return render(request, 'LoginPage.html')

def club_page(request):
    return render(request, 'ClubPage.html')

def events_page(request):
    return render(request, 'EventsPage.html')

def about_page(request):
    return render(request, 'AboutPage.html')    

def chatbot_page(request):
    return render(request, 'ChatBot.html')