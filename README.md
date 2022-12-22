# Rails Auth Example Appliction
This application is meant to demonstrate API authentication via React and Rails using secure HTTP cookies rather than JWT.

## Requirements
Ruby 3
Bundler
Node 16+ 

## Installation
1. Fork this repo or simply clone it
1. navigate to the backend directory
1. run `$ bundle`
1. run `$ rails db:migrate` # This may not be required 
1. run `$ rails s -p 3001`
1. In a new terminal navigate to frontend directory
1. run `$ npm install`
1. run `$ npm run start`

For nginx configuration follow [this document](https://dev.to/alizand1992/setting-up-user-auth-with-react-and-rails-minus-the-jwt-headache-39d)
