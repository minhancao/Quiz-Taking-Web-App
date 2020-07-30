from rest_framework import routers
from .api import QuizViewSet, QuizQuestionViewSet

router = routers.DefaultRouter()
router.register('api/quizzes', QuizViewSet, 'quizzes')
router.register('api/quizquestions', QuizQuestionViewSet, 'quizquestions')

urlpatterns = router.urls
