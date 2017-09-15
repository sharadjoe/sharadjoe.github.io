from django import forms

class loginform(forms.Form):
    user_email = forms.CharField(label='email', max_length=100)
    user_password = forms.CharField(label='password', max_length=100)


class signupform(forms.Form):
    user_email = forms.CharField(label='email', max_length=500)
    user_name = forms.CharField(label='name', max_length=500)
    user_phone_no = forms.CharField(label='phone_number', max_length=10)
    user_password = forms.CharField(label='password', max_length=500)
