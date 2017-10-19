from django.db import models

class Tables(models.Model):
    name = models.CharField(max_length=100)
    name_id = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Columns(models.Model):
    name = models.CharField(max_length=100)
    name_id = models.CharField(max_length=100)
    tables = models.ForeignKey(Tables)

    def __str__(self):
        return self.name

class Column(models.Model):
    table_name = models.CharField(max_length=100)
    column_name =  models.CharField(max_length=100)
    def __str__(self):
        return  self.table_name + " " + self.column_name

class No_Relation_Table(models.Model):
    columns = models.ForeignKey(Columns)
    priority = models.IntegerField()
    column = models.ForeignKey(Column)

    def __str__(self):
        return self.priority

class Relation_Table(models.Model):
    column = models.ForeignKey(Column)
    columns = models.ForeignKey(Columns)
    priority = models.IntegerField()

    def __str__(self):
        return self.priority

class No_Relation_Columns(models.Model):
    column = models.ForeignKey(Column)
    no_relation_table = models.ForeignKey(No_Relation_Table)

    def __str__(self):
        return self.no_relation_table 

class Relation_Columns(models.Model):
    column = models.ForeignKey(Column)
    relation_table = models.ForeignKey(Relation_Table)

    def __str__(self):
        return self.relation_table 

class No_Relation_Options(models.Model):
    no_relation_column = models.ForeignKey(No_Relation_Columns)
    grep_strings = models.CharField(max_length=100)

    def __str__(self):
        return self.grep_strings

class Relation_Options(models.Model):
    relation_column = models.ForeignKey(Relation_Columns)
    condition = models.CharField(max_length=100)

    def __str__(self):
        return self.condition
