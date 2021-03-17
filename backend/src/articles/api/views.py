from rest_framework.generics import (ListAPIView,
                                     RetrieveAPIView,
                                     CreateAPIView,
                                     UpdateAPIView,
                                     DestroyAPIView)
from articles.models import Article
from .serializers import ArticlSerializer


class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticlSerializer


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticlSerializer


class ArticleCreateView(CreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticlSerializer


class ArticleUpdateView(UpdateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticlSerializer


class ArticleDeleteView(DestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticlSerializer
