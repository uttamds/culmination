from django.shortcuts import render
from django.http import HttpResponse
from .models import Emp


# Create your views here.
def hrr(request):
    ee = Emp.objects.all()
    return render(request, 'emps.html', {'emprecs':ee})
    # return HttpResponse("This is from the HR application")

