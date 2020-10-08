# [BOOKS STORE](https://booksstore-react.herokuapp.com/shop/products/all/1)

Techstack:

* React-apollo/@apollo-client
* Apollo-Boost
* Axios
* GraphQL
* React-Graphql
* Express
* Express-GraphQl
* Redux
* React-Redux
* React-Router-DOM
* Chokidar
* Connect-history-API-fallback
* Cors
* Faker
* JSON-Server
* JSONWebToken
* Node.js

An app that enables the purchasing of books, using React along with RESTful and GraphQL architecture. The former allows a CRUD interaction by the client:

* The client is able to read the data: the user is able to scroll through different
products and paginations offered by the server through GET requests.
* The client can create new data: the user can place orders through POST requests
offered by the server.
* The client can delete data: the user can delete ordered batch of products.
* The client can update data: the user can create a new batch of ordered
products thanks to the data by GET requests.

The latter is an alternative appproach to REST which allows the client to request
specific data through features defined by *schema*, which is implemented by *resolvers*. This results in an interaction that is not dependent on URL requests
but still allows a simpler and flexbile CRUD between a client and a server.
It is implemented in Administration of products.

* Administrators can see products ordered
* They can mark if the products have been delivered
* They can create new products.
* They can edit a product information.

Thanks to JSONWebToken,  the administration is protected by username and password.
Please send me an email if you want to test the capability of the administration
section.