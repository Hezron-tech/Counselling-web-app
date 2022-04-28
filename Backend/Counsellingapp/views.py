from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import CounselorSerializer, ClientSerializer, SupportGroupSerializer, SessionSerializer, MedicationSerializer, MedicationDosageSerializer, update_sessionSerializer
from .models import Counselor, Client, SupportGroup, Session, Medication, MedicationDosage, update_session
from rest_framework import status


# Create your views here.


class CounselorList(APIView):
    def get(self, request):
        counselors = Counselor.objects.all()
        serializer = CounselorSerializer(counselors, many=True)
        return Response(serializer.data)


class CounselorDetail(APIView):
    def get_object(self, pk):
        try:
            return Counselor.objects.get(pk=pk)
        except Counselor.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        counselor = self.get_object(pk)
        serializer = CounselorSerializer(counselor)
        return Response(serializer.data)
            
    def put(self, request, pk):
        counselor = self.get_object(pk)
        serializer = CounselorSerializer(counselor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        counselor = self.get_object(pk)
        counselor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ClientList(APIView):
    def get(self, request):
        clients = Client.objects.all()
        serializer = ClientSerializer(clients, many=True)
        return Response(serializer.data)


class ClientDetail(APIView):
    def get_object(self, pk):
        try:
            return Client.objects.get(pk=pk)
        except Client.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        client = self.get_object(pk)
        serializer = ClientSerializer(client)
        return Response(serializer.data)
        
    def put(self, request, pk):
        client = self.get_object(pk)
        serializer = ClientSerializer(client, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        client = self.get_object(pk)
        client.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class SupportGroupList(APIView):
    def get(self, request):
        supportgroups = SupportGroup.objects.all()
        serializer = SupportGroupSerializer(supportgroups, many=True)
        return Response(serializer.data)


class SupportGroupDetail(APIView):
    def get_object(self, pk):
        try:
            return SupportGroup.objects.get(pk=pk)
        except SupportGroup.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        supportgroup = self.get_object(pk)
        serializer = SupportGroupSerializer(supportgroup)
        return Response(serializer.data)
            
    def put(self, request, pk):
        supportgroup = self.get_object(pk)
        serializer = SupportGroupSerializer(supportgroup, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        supportgroup = self.get_object(pk)
        supportgroup.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class SessionList(APIView):
    def get(self, request):
        sessions = Session.objects.all()
        serializer = SessionSerializer(sessions, many=True)
        return Response(serializer.data)


class SessionDetail(APIView):
    def get_object(self, pk):
        try:
            return Session.objects.get(pk=pk)
        except Session.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        session = self.get_object(pk)
        serializer = SessionSerializer(session)
        return Response(serializer.data)
            
    def put(self, request, pk):
        session = self.get_object(pk)
        serializer = SessionSerializer(session, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        session = self.get_object(pk)
        session.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class MedicationList(APIView):
    def get(self, request):
        medications = Medication.objects.all()
        serializer = MedicationSerializer(medications, many=True)
        return Response(serializer.data)


class MedicationDetail(APIView):
    def get_object(self, pk):
        try:
            return Medication.objects.get(pk=pk)
        except Medication.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        medication = self.get_object(pk)
        serializer = MedicationSerializer(medication)
        return Response(serializer.data)
            
    def put(self, request, pk):
        medication = self.get_object(pk)
        serializer = MedicationSerializer(medication, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        medication = self.get_object(pk)
        medication.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




