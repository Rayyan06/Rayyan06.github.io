from django.urls import path
from .views import ArticlesListView, ArticleDetail, login_view, logout_view, register, ProjectsListView, CommentCreate, like_article, profile_view, CommentList

urlpatterns = [
    path('', ArticlesListView.as_view(), name="home"),
    path('article/<int:pk>', ArticleDetail.as_view(), name="article"),
    path('article/<int:pk>/comment', CommentCreate.as_view(), name="comment"),
    path('article/<int:pk>/like', like_article, name="like"),
    path('projects', ProjectsListView.as_view(), name="projects"),
    path('api/comments/<int:article_id>', CommentList.as_view(), name="comments"),

    path('login', login_view, name="login"),
    path('logout', logout_view, name="logout"),
    path('profile', profile_view, name="profile"),
    path('register', register, name="register"),
]