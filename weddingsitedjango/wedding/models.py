from django.db import models

# Create your models here.
class Guest(models.Model):
    guestid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=True)
    response = models.NullBooleanField()
    rsvp = models.IntegerField()
    plusone = models.BooleanField(default=False)
    added = models.BooleanField(default=False)
    tea = models.CharField(max_length=100, blank=True)
    game = models.CharField(max_length=100, blank=True)
    def __str__(self):
        return self.name

class Registry(models.Model):
    name = models.CharField(max_length=100)
    picture = models.ImageField(upload_to='registryPictures/', blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2, blank=True)
    raised = models.DecimalField(max_digits=6, decimal_places=2, default=0)

class Dietary(models.Model):
    guest_id = models.ForeignKey(Guest, on_delete=models.CASCADE)
    restriction = models.CharField(max_length=100)
    class Meta:
        unique_together =(("guest_id", "restriction"),)

class Picture(models.Model):
    picture = models.ImageField(upload_to='pictures/')

class Contribution(models.Model):
    name = models.CharField(max_length=100, blank=True)
    email = models.CharField(max_length=50, blank=True)
    message = models.TextField(blank=True)
    amount = models.DecimalField(max_digits=6, decimal_places=2)
    itemid = models.ForeignKey(Registry, on_delete=models.CASCADE)
    code = models.CharField(max_length=4)
    date = models.DateTimeField(auto_now=True)

