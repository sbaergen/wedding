from django.conf.urls import url
from django.contrib.staticfiles.views import serve
from django.views.generic import RedirectView

from .views import *

urlpatterns = [
    url(r'^guest/all/$', GuestDetailAPIView.as_view(), name='guest-all'),
    url(r'^rsvp/all/$', RSVPDetailAPIView.as_view(), name='rsvp-all'),
    url(r'^registry/all/$', RegistryDetailAPIView.as_view(), name='registry-all'),
    url(r'^dietary/all/$', GuestDetailAPIView.as_view(), name='dietary-all'),
    url(r'^$', serve,kwargs={'path': 'index.html'}),
        url(r'^(?!/?static/)(?!/?media/)(?P<path>.*\..*)$',
        RedirectView.as_view(url='/static/%(path)s', permanent=False)),
]
