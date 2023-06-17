
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

Docker run image for backend: ```docker run --hostname=cd97e8065a70 --mac-address=02:42:ac:11:00:03 --env=PATH=/usr/local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=LANG=C.UTF-8 --env=GPG_KEY=A035C8C19219BA821ECEA86B64E628F8D684696D --env=PYTHON_VERSION=3.10.12 --env=PYTHON_PIP_VERSION=23.0.1 --env=PYTHON_SETUPTOOLS_VERSION=65.5.1 --env=PYTHON_GET_PIP_URL=https://github.com/pypa/get-pip/raw/0d8570dc44796f4369b652222cf176b3db6ac70e/public/get-pip.py --env=PYTHON_GET_PIP_SHA256=96461deced5c2a487ddc65207ec5a9cffeca0d34e7af7ea1afc470ff0d746207 --env=POETRY_HOME=/usr/local --runtime=runc -dp 7200:7200 nikolaik/python-nodejs:python3.10-nodejs18```

Docker MariaDB setup: ```docker run --detach --name tasty --env MARIADB_USER=wstern --env MARIADB_PASSWORD=Courtland01 --env MARIADB_ROOT_PASSWORD=Courtland01  -dp 3306:3306 mariadb:10.11```



