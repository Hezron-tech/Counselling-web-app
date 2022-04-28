
from django.db import models
from django.db.models import fields
from rest_framework import fields, serializers

from .models import Counselor, Client, SupportGroup, Session, Medication, MedicationDosage, update_session


class CounselorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counselor
        fields = ('id', 'first_name', 'last_name', 'email', 'phone', 'password')


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('id', 'first_name', 'last_name', 'email', 'phone', 'password')


class SupportGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportGroup
        fields = ('id', 'counselor', 'client', 'date', 'time')


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ('id', 'counselor', 'client', 'date', 'start_time', 'end_time', 'support_group')


class MedicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medication
        fields = ('id', 'name', 'dosage', 'description', 'price', 'image')


class MedicationDosageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medication
        fields = ('id', 'patient', 'medication', 'dosage', 'start_date', 'end_date')


class update_sessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = update_session
        fields = ('id', 'counselor', 'client', 'date', 'start_time', 'end_time', 'support_group')


        