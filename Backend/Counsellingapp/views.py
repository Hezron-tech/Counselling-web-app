from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_auth.registration.views import RegisterView
from .serializers import (
    PatientCustomRegistrationSerializer, DoctorCustomRegistrationSerializer
    )

class PatientRegistrationView(RegisterView):
    serializer_class = PatientCustomRegistrationSerializer


class DoctorRegistrationView(RegisterView):
    serializer_class = DoctorCustomRegistrationSerializer
