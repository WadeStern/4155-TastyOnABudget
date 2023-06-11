
Client:
First install NodeJS (https://nodejs.org/en/download/) and Python3 then restart your computer  
clone the repo by running ```git clone https://github.com/WadeStern/4155-TastyOnABudget.git```  
open the 4155-TastyOnABudget folder in vs code then type cd client  
then type ```npm install```    
Finally run ```npm start``` now the front end is working  
  
Server:  
Make a new powershell and navigate to server with ```cd server```  
run ```pip install "fastapi[all]"```  
```pip install -r requirements.txt```

start api server ```python -m uvicorn main:app  --reload --host 0.0.0.0 --port 7200```  

Database:
install mariadb 10.11
creat a user named dbuser with a password of gj=wvK?L5Ck9+L&K7zbaKz=
Navigate to 
```C:\Program Files\MariaDB 10.11\bin```
open a cmd prompt
```mariadb.exe -u dbuser -p tasty < ~pathto\4155-TastyOnABudget\RecipieDB-dump.sql\RecipieDB-dump.sql```


Docker Image build command: ```docker build . -t react```

Docker run image for client: ```docker run --hostname=3f52b779d693 --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=NODE_VERSION=20.3.0 --env=YARN_VERSION=1.22.19 --env=NODE_ENV=development --workdir=/react-app --runtime=runc -dp 3000:3000 react:latest```
