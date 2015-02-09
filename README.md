# 2Gethr website

It's the 2Gethr website.

## Under the hood

A (tiny) Go app to deliver static content (html, js, css..). Super fast!

Then everything is built with AngularJS and our [API](https://github.com/2Gethr/gthr-api).

## Development

You can start the Go app in your `localhost:8080` :

`goapp serve`

**99.5% of the time**, you'll work only in the front (`public/` folder), so you can just open `index.html`.
You trully don't need to bootstrap the Go app (waste of time).

The Go app is just here to be deployed on AppEngine :

`goapp deploy`
