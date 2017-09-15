from django.conf.urls import url

from . import views

urlpatterns=[
    #/books/
    url(r'^$',views.home),
    url(r'^signin/',views.signin),
    ]
