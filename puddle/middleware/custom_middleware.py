from django.http import HttpResponseRedirect
from django.urls import reverse

class LoginRequiredMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        self.excluded_urls = ['/core/login/', '/core/signup/'] 

    def __call__(self, request):
        if not request.user.is_authenticated and not request.path.startswith('/core/login'):
            return HttpResponseRedirect(reverse('core:login'))
        return self.get_response(request)
