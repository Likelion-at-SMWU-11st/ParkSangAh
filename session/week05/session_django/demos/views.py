from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def helloBabyLion(request): #Request를 받아서
    #return HttpResponse('장고의 세계로 들어왔습니다.')
    # 이렇게 응답해 줄 거다. 텍스트 리턴할 것이다.     
    return render(request, 'crazyDjango.html')
    # 위에서 작성항 html 파일 보여지도록 함