from django.shortcuts import render
from .models import book
from django.http import HttpResponse
from django.template import loader
from django.views import generic


def home(request):
    return render(request, "homep.html")

def signin(request):
    return render(request, "signin.html")