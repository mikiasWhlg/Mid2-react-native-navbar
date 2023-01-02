from django.urls import path
from .views import employeestList, employeeDetials

urlpatterns = [
    path('employelist/', employeestList.as_view()),
    path('employeDetials/<int:pk>', employeeDetials.as_view())]
