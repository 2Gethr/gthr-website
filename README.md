# 2Gethr website

It's the 2Gethr website.

## Under the hood

A (tiny) [Go](https://golang.org/) server to deliver static content (html, js, css..). Super fast!

Then everything is built with AngularJS and our [API](https://github.com/2Gethr/gthr-api).

## Development

You can start the Go server in your `localhost:8080` :

`goapp serve`

**99.99% of the time**, you'll work only in the front (`public/` folder), so you can just open `index.html`.
You trully don't need to bootstrap the Go server (waste of time).

The Go server is just here to be deployed on AppEngine :

`goapp deploy`
