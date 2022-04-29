from django.urls import path,register_converter,include
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [
    path('api/',views.CounselorList.as_view()),#list
    path('api/<int:pk>/',views.CounselorDetail.as_view()),#detail
    path('api/client/',views.ClientList.as_view()),#list
    path('api/client/<int:pk>/',views.ClientDetail.as_view()),
    path('api/supportgroup/',views.SupportGroupList.as_view()),
    path('api/supportgroup/<int:pk>/',views.SupportGroupDetail.as_view()),
    path('api/session/',views.SessionList.as_view()),
    path('api/session/<int:pk>/',views.SessionDetail.as_view()),
    path('api/medication/',views.MedicationList.as_view()),
    path('api/medication/<int:pk>/',views.MedicationDetail.as_view()),
    path('api/medicationdosage/',views.MedicationDosageList.as_view()),
    path('api/medicationdosage/<int:pk>/',views.MedicationDosageDetail.as_view()),

  
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

