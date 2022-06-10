# ApiCrud
create api with express.js mongodb  check test on postman 

-Node.js
-Express.js
-MongoDB
-Postman
![Crudapi1](https://user-images.githubusercontent.com/97218117/173028976-7bc48258-7f2f-45df-b82e-29dde8044537.png)

run with > nodemon index_readApi.js

#create user on shell script on mongodb

1 use admin

2 db.createUser({user: "Entername", pwd: "EnterPastword", roles: [{role: "userAdminAnyDatabase", db: "admin"}, "readWriteAnyDatabase"]})

3 connect mongo and set Authentication Database

# run script file in text editor

> npm init
run with > nodemon namefile.js

#test in POSTMAN

1 use method post

2 set url:http://localhost:port/.....anyroute

3 in Body (row -JSON)
![postman_testapi](https://user-images.githubusercontent.com/97218117/172418585-8a896c0d-88c7-46aa-9a0a-96aa55432eeb.png)
