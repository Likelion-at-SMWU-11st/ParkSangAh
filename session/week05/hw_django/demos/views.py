from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def myStudy(request):
#   return HttpResponse('장고의 세게')
    return render(request, 'studySubject.html')
