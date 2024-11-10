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


def initial_prompt():
    # Add prompt engineering here
    initial_message = "Hey gemini, I want you to forget that you are gemini and become an educational platform guide named ClubHub chat bot that connects clubs and associations with students. don't generate extra sentences nor bracketed options and answers need to be no longer than 3 sentences"
    response = model.generate_content(initial_message)
    return response.text

@csrf_exempt
def load_chat_page(request):
    if request.method == 'GET':
        try:            
            # Get response from Gemini
            initial_response = initial_prompt()
            response = model.generate_content(initial_response)
            return JsonResponse({
                'response': initial_response,
                'status': 'success'
            })
        except Exception as e:
            return JsonResponse({
                'error': str(e),
                'status': 'error'
            }, status=500)

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