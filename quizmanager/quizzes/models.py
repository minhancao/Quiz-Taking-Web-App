from django.db import models


class QuizQuestion(models.Model):
    question = models.CharField(max_length=500)
    answer1 = models.CharField(max_length=128)
    answer2 = models.CharField(max_length=128)
    answer3 = models.CharField(max_length=128)
    answer4 = models.CharField(max_length=128)
    correct_answer = models.CharField(max_length=128)
    created_at = models.DateTimeField(auto_now_add=True)


class Quiz(models.Model):
    name = models.CharField(max_length=100)
    topic = models.CharField(max_length=100)
    questions = models.ManyToManyField(QuizQuestion)
    created_at = models.DateTimeField(auto_now_add=True)
