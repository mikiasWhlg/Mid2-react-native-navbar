from django.urls import path
from .views import studentList, studentDetails

urlpatterns = [
    path('studlist/', studentList.as_view()),
    path('studDetials/<int:pk>', studentDetails.as_view())
]
