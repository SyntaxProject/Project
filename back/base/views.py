from django.shortcuts import render, redirect
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView, FormView
from django.urls import reverse_lazy

from django.contrib.auth.views import LoginView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login


from django.views import View
from django.shortcuts import redirect
from django.db import transaction

from .models import Task,Contact, Money
from .forms import PositionForm
from .filter import AppFilter

from .serializers import TaskSerializer,MoneySerializer, ContactSerializer
from rest_framework import generics

class TaskListCreate(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class MoneyListCreate(generics.ListCreateAPIView):
    queryset = Money.objects.all()
    serializer_class = MoneySerializer

class ContactListCreate(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class CustomLoginView(LoginView):
    template_name = 'front/index.html'
    fields = '__all__'
    redirect_authenticated_user = True

    def get_success_url(self):
        return reverse_lazy('tasks')


class RegisterPage(FormView):
    template_name = 'front/index.html'
    form_class = UserCreationForm
    redirect_authenticated_user = True
    success_url = reverse_lazy('tasks')

    def form_valid(self, form):
        user = form.save()
        if user is not None:
            login(self.request, user)
        return super(RegisterPage, self).form_valid(form)

    def get(self, *args, **kwargs):
        if self.request.user.is_authenticated:
            return redirect('tasks')
        return super(RegisterPage, self).get(*args, **kwargs)

   
class TaskList(LoginRequiredMixin, ListView):
    model = Task
    context_object_name = 'tasks'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['tasks'] = context['tasks'].filter(user=self.request.user)
        context['count'] = context['tasks'].filter(complete=False).count()
        context['filter'] = AppFilter(self.request.get, queryset = self.get_queryset())

        search_input = self.request.GET.get('search-area') or ''
        if search_input:
            context['tasks'] = context['tasks'].filter(
                title__startswith=search_input)

        context['search_input'] = search_input

        return context


class TaskDetail(LoginRequiredMixin, DetailView):
    model = Task
    context_object_name = 'task'
    template_name = 'front/index.html'


class TaskCreate(LoginRequiredMixin, CreateView):
    model = Task
    fields = ['title', 'description', 'complete']
    success_url = reverse_lazy('tasks')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(TaskCreate, self).form_valid(form)


class TaskUpdate(LoginRequiredMixin, UpdateView):
    model = Task
    fields = ['title', 'description', 'complete']
    success_url = reverse_lazy('tasks')


class DeleteView(LoginRequiredMixin, DeleteView):
    model = Task
    context_object_name = 'task'
    success_url = reverse_lazy('tasks')


class TaskReorder(View):
    def post(self, request):
        form = PositionForm(request.POST)

        if form.is_valid():
            positionList = form.cleaned_data["position"].split(',')

            with transaction.atomic():
                self.request.user.set_task_order(positionList)

        return redirect(reverse_lazy('tasks'))

class ContactList(LoginRequiredMixin,ListView):
    model = Contact 
    context_object_name = 'contacts'
     
    def index(request):
        contacts = Contact.objects.all()

        context['contacts'] = context['contacts'].filter(user=self.request.user)
        context['filter'] = AppFilter(self.request.get, queryset = self.get_queryset())
        search_input = request.GET.get('search-area')
        if search_input:
            contacts = Contact.objects.filter(full_name__icontains=search_input)
        else:
            contacts = Contact.objects.all()
            search_input = ''
        return render(request, 'front/index.html', {'contacts': contacts, 'search_input': search_input})

class ContactCreate(LoginRequiredMixin,CreateView):
    model = Contact
    fields = ['full_name', 'email', 'phone_number']
    success_url = reverse_lazy('contacts')

    def addContact(request):
        if request.method == 'POST':

            new_contact = Contact(
                full_name=request.POST['fullname'],
                email=request.POST['email'],
                phone_number=request.POST['phone-number'],
                )
            new_contact.save()
            return redirect('/')

        return render(request, 'front/index.html')

class ContactsUpdate(LoginRequiredMixin, UpdateView):
    model = Contact
    fields = ['full_name', 'email', 'phone_number']
    success_url = reverse_lazy('contacts')

    def editContact(request, pk):
        contact = Contact.objects.get(id=pk)

        if request.method == 'POST':
            contact.full_name = request.POST['fullname']
            contact.relationship = request.POST['relationship']
            contact.email = request.POST['email']
            contact.phone_number = request.POST['phone-number']
            contact.address = request.POST['address']
            contact.save()

            return redirect('/profile/'+str(contact.id))
        return render(request, 'front/index.html', {'contact': contact})

class ContactDelete(LoginRequiredMixin, DeleteView):
    model = Contact
    context_object_name = 'contact'
    success_url = reverse_lazy('contacts')

    def deleteContact(request, pk):
        contact = Contact.objects.get(id=pk)

        if request.method == 'POST':
            contact.delete()
            return redirect('/')

        return render(request, 'front/index.html', {'contact': contact})

class ContactDetail(LoginRequiredMixin, DetailView):
    model = Contact
    context_object_name = 'contact'
    template_name = 'front/index.html'

    def contactProfile(request, pk):
        contact = Contact.objects.get(id=pk)
        return render(request, 'front/index.html', {'contact':contact})


class MoneyList(LoginRequiredMixin, ListView):
    model = Money
    context_object_name = 'moneys'
     

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['moneys'] = context['moneys'].filter(user=self.request.user)
        context['count'] = context['moneys'].filter(complete=False).count()
        context['filter'] = AppFilter(self.request.get, queryset = self.get_queryset())

        search_input = self.request.GET.get('search-area') or ''
        if search_input:
            context['moneys'] = context['moneys'].filter(
                title__startswith=search_input)

        context['search_input'] = search_input

        return context

class MoneyCreate(LoginRequiredMixin, CreateView):
    model = Money
    fields = ['date', 'complete', 'suma1', 'suma2']
    success_url = reverse_lazy('moneys')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super(MoneyCreate, self).form_valid(form)


class MoneyUpdate(LoginRequiredMixin, UpdateView):
    model = Money
    fields = ['date', 'complete', 'suma1', 'suma2']
    success_url = reverse_lazy('moneys')


class MoneyDelete(LoginRequiredMixin, DeleteView):
    model = Money
    context_object_name = 'money'
    success_url = reverse_lazy('moneys')

class MoneyDetail(LoginRequiredMixin, DetailView):
    model = Money
    context_object_name = 'money'
    template_name = 'front/index.html'

class MoneyReorder(View):
    def post(self, request):
        form = PositionForm(request.POST)

        if form.is_valid():
            positionList = form.cleaned_data["position"].split(',')

            with transaction.atomic():
                self.request.user.set_money_order(positionList)

        return redirect(reverse_lazy('moneys'))
 