from django.urls import path

from . import views

app_name = 'item'

urlpatterns = [
    path('', views.items, name='items'),
    path('new/', views.new, name='new'),
    path('<int:pk>/', views.detail, name='detail'),
    path('<int:pk>/delete/', views.delete, name='delete'),
    path('<int:pk>/edit/', views.edit, name='edit'),
    path('catapi/',views.CategoryView.as_view(), name='catapi'),
    path('itemapi/',views.ItemView.as_view(),name='itemapi'),
    path('is_auth/',views.is_auth,name='is_auth')
]
 