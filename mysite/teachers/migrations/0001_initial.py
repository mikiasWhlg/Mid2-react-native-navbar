# Generated by Django 4.1.4 on 2022-12-29 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='teachers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('teachersName', models.CharField(max_length=100)),
                ('course', models.CharField(max_length=10)),
            ],
        ),
    ]
