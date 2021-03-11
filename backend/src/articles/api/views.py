from rest_framework.generics import ListAPIView, RetrieveAPIView
from articles.models import Article
from .serializers import ArticlSerializer


class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticlSerializer



class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticlSerializer