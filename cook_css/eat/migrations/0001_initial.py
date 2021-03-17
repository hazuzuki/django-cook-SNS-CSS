# Generated by Django 3.0.2 on 2020-12-24 21:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('recipe_name', models.CharField(max_length=20, verbose_name='レシピ名')),
                ('site', models.CharField(blank=True, max_length=2048, verbose_name='参考サイト')),
                ('memo', models.TextField(blank=True, max_length=1000, verbose_name='メモ')),
                ('photo', models.ImageField(blank=True, upload_to='Media', verbose_name='写真')),
                ('ingredient', models.CharField(max_length=200, verbose_name='材料')),
                ('type', models.CharField(choices=[('スープ', 'スープ'), ('ご飯', 'ご飯'), ('おかず', 'おかず'), ('スイーツ', 'スイーツ')], max_length=20, verbose_name='種類')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('public', models.CharField(choices=[('公開', '公開'), ('非公開', '非公開'), ('友達のみ', '友達のみ')], default='非公開', max_length=20, verbose_name='公開')),
                ('quote', models.CharField(default='無し', max_length=10)),
            ],
        ),
    ]
