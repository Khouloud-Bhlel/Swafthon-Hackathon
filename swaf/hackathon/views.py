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

import google.generativeai as genai
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Configure Gemini API
genai.configure(api_key='AIzaSyARNcBAz7aM8U1ZFEQZ0r9e2QjL-F6Mdig')
model = genai.GenerativeModel('gemini-pro')

@csrf_exempt
def chat_with_gemini(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_message = data.get('message', '')
            
            # Get response from Gemini
            response = model.generate_content(user_message)
            
            return JsonResponse({
                'response': response.text,
                'status': 'success'
            })
        except Exception as e:
            return JsonResponse({
                'error': str(e),
                'status': 'error'
            }, status=500)