from django.urls import path
from apps.personas.views import *

urlpatterns = [
    path('a', AgenciaView.as_view()),
    path('acreate/', AgenciaCreate.as_view()),
    path('aupdate/<int:pk>/', AgenciaUpdate.as_view()),
    path('adelete/<int:pk>/', AgenciaDelete.as_view()),
    path('aall/', AgenciaViewOwner.as_view()),

    path('r', ReservaView.as_view()),
    path('rcreate/', ReservaCreate.as_view()),
    path('rupdate/<int:pk>/', ReservaUpdate.as_view()),
    path('rdelete/<int:pk>/', ReservaDelete.as_view()),
    path('rall/', ReservaViewOwner.as_view()),
]
