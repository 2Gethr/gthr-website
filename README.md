# 2Gethr website

It's the 2Gethr website.

## Development

First install dependencies with **Bower**:

`bower install`

If you don't have Bower, install it this way:

`npm install -g bower`

You may need to run this with root privileges. If you don't have npm... Well. You should in Web development. It's shipped with Node.js anyway.

You can start the Go server in your `localhost:8080` :

`goapp serve`

**99.99% of the time**, you'll work only in the front (`public/` folder), so you can just open `index.html`.
You trully don't need to bootstrap the Go server (waste of time).

The Go server is just here to be deployed on AppEngine :

`goapp deploy`
