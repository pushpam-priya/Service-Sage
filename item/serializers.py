from rest_framework import serializers
from .models import Category, Item

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model= Category
        fields = ('id','name')
     

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model= Item
        fields = ('id','category','name','description','price','image','is_sold','created_by','created_at')