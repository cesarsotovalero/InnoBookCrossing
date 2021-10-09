# :scroll: Design Documentation

## UML diagrams

### Sequence diagram
![Sequence diagram](https://user-images.githubusercontent.com/66779337/134778315-9a577dc9-544c-465e-9f9f-6d72696b0c66.png)

### Use cases
![Use case](https://user-images.githubusercontent.com/66779337/134778380-0efd4238-a096-4360-a2b8-b0ead3dc83f9.jpg)

### SOLID and REST Principles
In the development process the following principles were followed as closely as possible
* SOLID
  * single responsibility - can be seen in "book" and "user" classes whose sole responibility is store book and user data
  * Other principles where not implemented due to the small scale of the project that resulted in lack of opportunities for implementation


* REST - covered by Swagger Framework
  * Client–server architecture
  * Statelessness
  * Cacheability
  * Layered system
  * Code on demand
  * Uniform interface


### Design patterns

The main pattern of the project is based on Model-View-Controller architecture. We separated the business logic of the application (Model) and the visual part of the application (View). We choose MVC pattern for several reasons:

* Separation on View and Model will increase the reusability of the code.
* This separation makes it easier to expand and maintain the system in the future.
* MVC simplifies the program writing and improves code readability.

Also the list of the pattern we used:
* The composite pattern was used in the front-end.
* Facade pattern - it is an inner pattern that subsists in MVC pattern, was used in the back-end. 
![picture](https://www.codeproject.com/KB/java/879896/mvc_role_diagram.png)

