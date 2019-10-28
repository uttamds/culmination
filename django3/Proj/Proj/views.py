
from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return HttpResponse("Hey you")

def contact(request):
    return HttpResponse("Contacts page")
def menu(request):
    # return HttpResponse("Menu page")
    return render(request , "menu.html")



