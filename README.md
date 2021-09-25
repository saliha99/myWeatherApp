# Weather Application 

In order to run the application on your own computer, you must first go to your project directory on the terminal screen and install the necessary packages by running the following commands.

###### Firstly, to install a new or existing npm package:
```
$ npm init 
```

###### Secondly, to install the necessary packages used in the application:
```
$ npm i request
$ npm i html
$ npm i express
```
###### Then, replace the existing token with your "own token" from the sites whose address is given in the "url" line in the "forecast.js" and "geocode.js" files in the src/utils directory.

###### After entering the following command in the terminal, you will be able to see the application when you enter "http://localhost:3000/" in your browser.
```
$ nodemon src/app.js 
```


There it is! In the search button, we write the name of the city we want to know the instant weather forecast.

![](w1.png)


After clicking the "Search" button, the results are displayed on our screen as seen.

![](w2.png)
