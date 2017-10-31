from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from books.models import bookly

def home(request):
    return render(request, "homep.html")

def dashboard(request):
    return render(request,"dashboard.html")