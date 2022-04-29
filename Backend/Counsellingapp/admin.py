from django.contrib import admin
from .models import Counselor, Client, SupportGroup, Session, Medication, MedicationDosage
# Register your models here.


admin.site.register(Counselor)
admin.site.register(Client)
admin.site.register(SupportGroup)
admin.site.register(Session)
admin.site.register(Medication)
admin.site.register(MedicationDosage)


