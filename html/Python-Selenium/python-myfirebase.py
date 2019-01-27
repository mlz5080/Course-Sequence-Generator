import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
from firebase_admin import db
from firebase_admin import firestore

cred = credentials.Certificate('conuhacksv-firebase-adminsdk-xebfg-b6413b072b.json')
default_app = firebase_admin.initialize_app(cred,{
	'databaseURL': 'https://conuhacksv.firebaseio.com/'
})

# page = auth.list_users()
# while page:
#     for user in page.users:
#         print('User: ' + user.uid)
#     # Get next batch of users.
#     page = page.get_next_page()

# # Iterate through all users. This will still retrieve users in batches,
# # buffering no more than 1000 users in memory at a time.
# for user in auth.list_users().iterate_all():
#     print('User: ' + user.uid)


# As an admin, the app has access to read and write all data, regradless of Security Rules
DB = db.reference('/All_Classes')
Eng_Core = db.reference('/Core/0') #Firebase OBject
Coen_Elec_Core = db.reference('/Core/COEN-ELEC/0')

myengr=[]
myeleccore=[]
mycoencore=[]

prerequisite=[]
filterd_pre=[]
ELEC = DB.order_by_child('Subject').equal_to('ELEC').get()
COEN = DB.order_by_child('Subject').equal_to('COEN').get()

for key,val in ELEC.items():
	for i,j in val.items():
		if("Requisite" in i):
			prerequisite.append(j.replace(". Must have completed all required 200 level courses","").replace("This course is reserved for ECE students only","").replace("CHEM205,","").replace("PHYS205; ","").replace("Course Prerequisite: ","").replace("Course Co-requisite: ","").replace("Prerequisite:","").replace(" ","").replace("Mustcompleteallrequired200levelcourses",""))
for i in prerequisite:
	if i:
		filterd_pre.append(i.replace(".","").replace("Youmustcomplete1ofthefollowingrules","").replace("Prerequisites:","").replace("NeverTaken/NotRegistered:",""))
prerequisite=[]


for key,val in Eng_Core.get().items():
	if "Engineering Core" in key:
		# print(val.replace("[","").replace("]","").replace("'","").split(","))
		myengrcore=val.replace("[","").replace("]","").replace("'","").split(",")
for key,val in Coen_Elec_Core.get().items():
	if "Electrical Engineering Core" in key:
		#print(val.replace("[","").replace("]","").replace("'","").split(","))
		myeleccore=val.replace("[","").replace("]","").replace("'","").split(",")
	if "Computer Engineering Core" in key:
		# print(val.replace("[","").replace("]","").replace("'","").split(","))
		mycoencore=val.replace("[","").replace("]","").replace("'","").split(",")

#print(Coen_Elec_Core.get())

# print(myeleccore)
# print(mycoencore)

myelecquery =[]
mycoenquery =[]
for i in myengrcore:
	if(" 2" in i):
		myelecquery.append(i)
for i in myeleccore:
	if(" 2" in i):
		myelecquery.append(i)

for i in myengrcore:
	if not i in myelecquery:
		myelecquery.append(i)
for i in myeleccore:
	if not i in myelecquery:
		myelecquery.append(i)

for i in myengrcore:
	if(" 2" in i):
		mycoenquery.append(i)
for i in myeleccore:
	if(" 2" in i):
		mycoenquery.append(i)

for i in myengrcore:
	if not i in mycoenquery:
		mycoenquery.append(i)
for i in myeleccore:
	if not i in mycoenquery:
		mycoenquery.append(i)

		
		
# print(Coen_Elec_Core.get())