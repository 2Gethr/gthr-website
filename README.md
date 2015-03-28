# 2Gethr website

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1422403/6880709/97df24f4-d540-11e4-8af5-3b8f0aa9b8c2.png"/>
</p>

## Development

First install dependencies with **Bower** :

`bower install`

If you don't have Bower, install it this way :

`npm install -g bower`

You may need to run this with root privileges. If you don't have npm... Well. You should in Web development. It's shipped with Node.js anyway.

Then, you can start the Go server in your `localhost:8080` :

`goapp serve`

The Go server is just here to be deployed on AppEngine :

`goapp deploy`

You don't have `goapp` ? Get it [here](https://cloud.google.com/appengine/docs/go/gettingstarted/devenvironment) !

And obviously, you have to start the API in local too.
