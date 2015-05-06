# 2Gethr website

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1422403/6880709/97df24f4-d540-11e4-8af5-3b8f0aa9b8c2.png"/>
</p>

## Development

First install dependencies with **Bower** :

`bower install`

If you don't have Bower, install it this way :

`npm install -g bower`

You may need to run this with root privileges. If you don't have npm... Well. You should in Web development. It's shipped with Node.js anyway. You could also need the package 'nodejs-legacy'.

Then, you can start the Go server in your `localhost:8080` :

`goapp serve`

The Go server is just here to be deployed on AppEngine :

`goapp deploy`

You don't have `goapp` ? Get it [here](https://cloud.google.com/appengine/docs/go/gettingstarted/devenvironment) !

And obviously, you have to start the API in local too.

## What have been done

This project (both this repository and the api-repository) proposes :
- A working api, which is documented in the api-repository
- A working interface that allow us to
  - Sign in with a google account
  - Subscribe to some locations (here locations are very precise but we could add "meta-location" like Nantes)
  - Add a new event with the administration page (for allow you to test it, any user can access it, but normally it would be restricted to administrators)
- A working event activity : can be access at http://to-gethr-api.appspot.com/event/ask.html
- A working notification for incoming event 
  - The notifications manager is checking for updates every hours using the cron services
  - You can force it to check for updates at http://to-gethr-api.appspot.com/services/notification.html

## What have not been done

- More events, and specially more complex events with client/server communication (sending an answer, score calculation for example)
- Starting the event at the right time for users that are at the right location : the only way to test an event is to go at http://to-gethr-api.appspot.com/event/ask.html
- History of the past event which you participated to - Scores and rewards
