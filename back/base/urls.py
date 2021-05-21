from django.urls import path
from .views import TaskList, TaskDetail, TaskCreate, TaskUpdate, DeleteView, CustomLoginView, RegisterPage, TaskReorder
from django.contrib.auth.views import LogoutView
from . import views 

urlpatterns = [
    path('api/lead/', views.TaskListCreate.as_view() ),
    path('api/lead/', views.MoneyListCreate.as_view() ),
    path('api/lead/', views.ContactListCreate.as_view() ),

    path('login/', CustomLoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'),
    path('register/', RegisterPage.as_view(), name='register'),

    path('', TaskList.as_view(), name='tasks'),
    path('task/<int:pk>/', TaskDetail.as_view(), name='task'),
    path('task-create/', TaskCreate.as_view(), name='task-create'),
    path('task-update/<int:pk>/', TaskUpdate.as_view(), name='task-update'),
    path('task-delete/<int:pk>/', DeleteView.as_view(), name='task-delete'),
    path('task-reorder/', TaskReorder.as_view(), name='task-reorder'),
    
    path('', ContactList.as_view(), name='contacts'),
    path('contact/<int:pk>/', ContactDetail.as_view(), name='contact'),
    path('contact-create/', ContactCreate.as_view(), name='contact-create'),
    path('contact-update/<int:pk>/', ContactUpdate.as_view(), name='contact-update'),
    path('contact-delete/<int:pk>/', ContactDelete.as_view(), name='contact-delete'),
    path('contact-reorder/', ContactReorder.as_view(), name='contact-reorder'),
    
    path('', MoneyList.as_view(), name='moneys'),
    path('money/<int:pk>/', MoneyDetail.as_view(), name='money'),
    path('money-create/', MoneyCreate.as_view(), name='money-create'),
    path('money-update/<int:pk>/', MoneyUpdate.as_view(), name='money-update'),
    path('money-delete/<int:pk>/', MoneyDelete.as_view(), name='money-delete'),
    path('money-reorder/', MoneyReorder.as_view(), name='money-reorder'),


    
]
