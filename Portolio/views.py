from django.shortcuts import render
from django.core.mail import send_mail
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.conf import settings

from .forms import ContactForm


def home(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data["name"]
            email = form.cleaned_data["email"]
            message_content = form.cleaned_data["message"]
            subject = f"Message de {name} via le PortFolio"
            from_email = settings.DEFAULT_FROM_EMAIL
            message_content = f"De : {email}\n\n{message_content}"
            to_email = [from_email]
            send_mail(
                subject, message_content, from_email, to_email, fail_silently=False
            )
            return HttpResponseRedirect(reverse("success"))
        else:
            return HttpResponseRedirect(reverse("failure"))
    form = ContactForm()
    return render(request, "index.html", {"form": form})


def success(request):
    return render(request, "success.html")


def failure(request):
    return render(request, "failure.html")


def error_404(request, exception):
    return render(request, "404.html", status=404)


def error_500(request):
    return render(request, "500.html", status=500)
