/*  https://freelance-learn-automation.vercel.app/login
1)Id  --->#
#value
#email1
input#email1

#password1
input#password1

2)Class--->.
.value
.submit-btn
button.submit-btn

.gender-div
div.gender-div

3)Tagname and attribute
  tagname[attribute='value1']

  input[type='email']
  input[placeholder='Enter Email']


4)Tagname and multiple attribute--->It supports and
  tagname[attribute1='value1'][attribute2='value2']
  
  input[placeholder='Enter Email'][id='email1']

  input[placeholder='Enter Password'][id='password1']



5)Contains (*)
tagname[attribute*='value']
input[name='email1']--->exact match
input[name*='email']-->Partial match

button[class='submit-btn']
button[class*='submit']
button[class*='-btn']


6)starts with(^)-->Only check with the starting value
tagname[attribute^='value]

input[id^='ema']
a[href^='/sig']
button[type^='sub']


7)Ends with($)-->Only check with the ending value

tagname[attribute$='value'] 

input[placeholder$='Email']
a[class$='Link']


8)Descentant(space)
 element nextelement nextelement
 form.login-form h2
 form.login-form input
 form.login-form button
 form.login-form a
 div.container-child button

 div.social-btns a--->finds all 9 social media icons
 div.social div a--->Finds only first 5 social media icons

 9)child(>)

 element>child>child>

 div.social>div>a

 form.login-form>div>a
 form.login-form>div>h2
 form.login-form>div>input

 10)sibling
 Adjacent sibling
 generic sibling

 Adjacent sibling(+)
 syntax:-element +adjacent sibling+adjacent sibling 

 h2.header+input+input+button+a

generic sibling(~)
h2.header~input
h2.header~button
h2.header~*


11)indexing
psuedo classes

first child
div.social div a:first-child
div.social div a:last-child
div.social div a:nth-child(3)


















*/