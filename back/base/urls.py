"""
URL configuration for myproj project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index), 
    path('login', views.MyTokenObtainPairView.as_view()),
    path('categories', views.CategoryListCreateView.as_view()),
    path('categories/<int:pk>/products/', views.CategoryProductListView.as_view()),
    path('products', views.ProductListCreateView.as_view()),
    path('products/<int:pk>', views.ProductDetailView.as_view(), name="product-detail"),
]
