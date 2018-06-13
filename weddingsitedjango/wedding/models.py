from django.db import models

# Create your models here.
class RSVP(models.Model):
    code = models.CharField(max_length=4, primary_key=True)
    number = models.IntegerField()

class Guest(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=True)
    response = models.NullBooleanField()
    code = models.ForeignKey(RSVP, on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class Registry(models.Model):
    name = models.CharField(max_length=100)
    picture = models.ImageField(upload_to='registryPictures/', blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2, blank=True)
    raised = models.DecimalField(max_digits=6, decimal_places=2, blank=True)

class Dietary(models.Model):
    guest_id = models.ForeignKey(Guest, on_delete=models.CASCADE)
    restriction = models.CharField(max_length=100)

class Picture(models.Model):
    picture = models.ImageField(upload_to='pictures/')
