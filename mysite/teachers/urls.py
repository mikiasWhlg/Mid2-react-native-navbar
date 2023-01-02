from django.urls import path
from .views import teacherstList, teachersDetials

urlpatterns = [
    path('techlist/', teacherstList.as_view()),
    path('techDetials/<int:pk>', teachersDetials.as_view())
]
