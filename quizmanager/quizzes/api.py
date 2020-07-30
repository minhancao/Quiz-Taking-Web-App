from quizzes.models import Quiz, QuizQuestion
from rest_framework import viewsets, permissions
from .serializers import QuizSerializer, QuizQuestionSerializer

# Quiz Viewset


class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = QuizSerializer


class QuizQuestionViewSet(viewsets.ModelViewSet):
    queryset = QuizQuestion.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = QuizQuestionSerializer
