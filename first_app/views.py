from django.shortcuts import render
from django.http import HttpResponse
from first_app.models import Topic,Webpage,AccessRecord

# Create your views here. b

def index(request):
    webpages_list = AccessRecord.objects.order_by('date')
    date_dict = {'access_records':webpages_list}
    my_dict = {'insert_me':"Hello, I am from first_app/index.html!",'insert_two':'secondary text'}
    return render(request,'first_app/index.html',context=date_dict)

