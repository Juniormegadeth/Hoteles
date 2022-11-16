from django.urls import path
from apps.hoteles.views import *

urlpatterns = [
    path('', HotelesView.as_view()),
    path('create/', HotelesCreate.as_view()),
    path('update/<int:pk>/', HotelesUpdate.as_view()),
    path('delete/<int:pk>/', HotelesDelete.as_view()),
    path('all/', HotelesViewOwner.as_view()),

    path('c', CategoriaView.as_view()),
    path('ccreate/', CategoriaCreate.as_view()),
    path('cupdate/<int:pk>/', CategoriaUpdate.as_view()),
    path('cdelete/<int:pk>/', CategoriaDelete.as_view()),
    path('call/', CategoriaViewOwner.as_view()),
]
