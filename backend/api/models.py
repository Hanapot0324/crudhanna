from django.db import models

class Item(models.Model): 
    first_name = models.CharField(max_length=100, null=True)
    middle_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    email = models.EmailField(max_length=150, null=True)
    residential_address = models.CharField(max_length=150, null=True)
    permanent_address = models.CharField(max_length=150, null=True)
    zipcode = models.CharField(max_length=10, null=True)
    birthday = models.DateField(null=True)
    telephone = models.CharField(max_length=15, null=True)  # Adjusted max_length
    mobile_phone = models.CharField(max_length=15, null=True)  # Adjusted max_length
    place_of_birth = models.CharField(max_length=100, null=True)
    sex = models.CharField(max_length=10, null=True)
    civil_status = models.CharField(max_length=20, null=True)
    citizenship = models.CharField(max_length=100, null=True)
    height = models.DecimalField(max_digits=5, decimal_places=2, null=True)
    weight = models.DecimalField(max_digits=5, decimal_places=2, null=True)
    blood_type = models.CharField(max_length=5, null=True)
    father_name = models.CharField(max_length=100, null=True)
    father_occupation = models.CharField(max_length=100, null=True)
    mother_name = models.CharField(max_length=100, null=True)
    mother_occupation = models.CharField(max_length=100, null=True)
    elementary_school = models.CharField(max_length=150, null=True)
    high_school = models.CharField(max_length=150, null=True)
    senior_high_school = models.CharField(max_length=150, null=True)
    college = models.CharField(max_length=150, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
