# Exercise 3

## Setup
### Backend - Java
Didn't get it to work... it is possible to define the Query / Mutation to reach the REST Controller, but I have no idea 
how to access the same database in the Backend and on Hasura... I didn't find any examples on how to do this, therefore the
Frontend handles the update of the
- **Docker**:
    - Run ```docker-compose up``` from the docker folder (or copy the docker-compose.yml to a different folder and run there)
    - Open *localhost:8080/console* to use Hasura with Docker
    - Setup the Database, the necessary Actions and the Events in the Console, in the End it should look like this:
      todo

- **ngrok** should be installed to query from Hasura to the local server (if the Docker solution is not used)
    - to start NGROK: ```run ngrok http 8080``` from the commandline
    - update the Handler of the Action / Event in Hasura to the URL displayed after starting NGROK

### Frontend / UI - Angular
- This [Tutorial](https://betterprogramming.pub/hasura-graphql-and-auto-code-generation-with-angular-2e6321e4d532) was used
  to setup an Angular Frontend which connects to Hasura
- update the codegen.yml file if needed
- run ```npm run codegen``` to generate the GraphQL code (file needs some small adaptions after generation)
- run ```npm run start``` to start the server and go to *localhost:4200*
  - Subscription to Payment and Transaction shows the current data in the Database
  - Mutations insert and update the new data in the Database