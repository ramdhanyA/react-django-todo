from django.db import models


class ToDo(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
