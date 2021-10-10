## :hammer: Architecture

![image](https://user-images.githubusercontent.com/66779337/136684819-9c6b91c7-e298-44bb-b5e7-a0dc0233392f.png)

Our project applies Three-Tier Client Server architecture. It follows by division of project operational logic on 3 different parts: 
* The Browser, which clients use for interacting with the website.
* The Server, that is responsible for receiving and handling user requests.
* The Database that provides corresponding information to the server.

### Detailed description of each part:

* The Browser part

    Once user start interacting with the website, front-end part of our project sends requests on needed data (such as titles or photos of books) using HTTP request to the server. Once server completed its operation it sends HTTP response with all requested data. Then browser is ready to use the information and display webpage’s content. 
    
* The Server part

    The server receives HTTP request from the server and then decides which data should be fetched from database and sent to user. The Server and Database parts are interconnected by Object-Relational Mapping(ORM) that allows the Server to retrieve rows from database and properly convert them to Java objects. Once all objects are compiled, the Server sends HTTP response with all information to the client’s browser.
    
* The Database part

    As for database management system we selected PostgreSQL. It stores all data that associated with user’s and book’s information in multiple tables. For avoiding data anomalies, we normalized our DB to … form. The database receives responses on fetching and updating data from server, performs it and then send the result to server using ORM.
