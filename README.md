# todoDemo

Before you build this project, you must install and configure the following dependencies on your machine:

- Node.js - MacOs: brew install node , Linux: sudo apt install nodejs , Windows: https://nodejs.org/en/download/

- npm

### Building

- Open the terminal and go inside the project directory

- In the project file, run this command(s):

  Spring Boot:

      ```
      ./mvnw
      ```

  React:

      ```
      npm start
      ```

- The `npm run` command will list all of the scripts available to run for this project.

## Testing

To launch tests of project, run:

    	```
    	./mvnw verify
    	```

### Client tests

To launch client test of project, run:

    	```
    	npm test
    	```

## Docker

You can directly download the image of this application from Docker Hub:

https://hub.docker.com/r/tarkanbatar/todo-demo

## Shortcomings

- Signing up is not working currently. I couldn't solve the authentication errors, PR will be appreciated :)
- Some of the href's icons are not working. I tried at least 5 different icons but the result didn't change.
