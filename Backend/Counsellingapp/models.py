from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

class User(AbstractUser):
  #Boolean fields to select the type of account.
  is_doctor = models.BooleanField(default=False)
  is_patient = models.BooleanField(default=False)

class Patient (models.Model):
    patient = models.OneToOneField(
      settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    area = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    age = models.TextField()

    def __str__(self):
        return self.patient.username

class Doctor (models.Model):
    doctor = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    specialization = models.CharField(max_length=100,default=None)     
     

    def __str__(self):
        return self.doctor.username




    
          

