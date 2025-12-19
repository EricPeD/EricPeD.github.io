- - - 

## Diseñamos la estructura de carpetas

## Creamos models.py en la carpepta src/

[/home/triskis/Escritorio/programando/AprenderPython/django-portfolio/src/models.py](models.py)

```python
from django.db import models

  
  

class Reporter(models.Model):

full_name = models.CharField(max_length=70)

  

def __str__(self):

return self.full_name

  
  

class Article(models.Model):

pub_date = models.DateField()

headline = models.CharField(max_length=200)

content = models.TextField()

reporter = models.ForeignKey(Reporter, on_delete=models.CASCADE)

  

def __str__(self):

return self.headline
```

> [!NOTE]
> ## Design your model[¶](https://docs.djangoproject.com/en/6.0/intro/overview/#design-your-model "Link to this heading")
> 
> Although you can use Django without a database, it comes with an [object-relational mapper](https://en.wikipedia.org/wiki/Object-relational_mapping) in which you describe your database layout in Python code.
> 
> The [data-model syntax](https://docs.djangoproject.com/en/6.0/topics/db/models/) offers many rich ways of representing your models – so far, it’s been solving many years’ worth of database-schema problems. Here’s a quick example:
> Lo dice aqui -> https://docs.djangoproject.com/en/6.0/intro/overview/#design-your-model

### Lo instalamos
```bash

```
