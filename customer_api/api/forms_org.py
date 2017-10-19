from django import forms
from .models import Skill
def get_categorized_sk():
        sk = {}
        for s in Skill.objects.values('pk', 'name', 'category__name').order_by('category__name'):
                if s['category__name'] not in sk.keys():
                     sk[s['category__name']] = []
                     sk[s['category__name']].append((s['pk'], s['name'])) 
        return sk
                
class SkillSelectionForm(forms.Form): 
        def __init__(self, *args, **kwargs):
                super(SkillSelectionForm, self).__init__(*args, **kwargs)
                sk = get_categorized_sk()
                for idx, cat in enumerate(sk.keys()):
                     field_name = u'category-%d' % (idx)
                     display_name = cat
                     self.fields[field_name] = forms.MultipleChoiceField(choices=sk[],
                                                                                            label=display_name,
                                                                                            widget=forms.SelectMultiple)
