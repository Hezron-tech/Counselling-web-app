from django.urls import path
from .views import PatientRegistrationView, DoctorRegistrationView

app_name = 'Counsellingapp'

urlpatterns = [
    #Registration Urls
    path('registration/patient/', PatientRegistrationView.as_view(), name='register-patient'),
    path('registration/doctor/', DoctorRegistrationView.as_view(), name='register-doctor'),
    
]