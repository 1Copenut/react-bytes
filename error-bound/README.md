# Error Boundary

This app will be built to test out React's [Error Boundaries](https://reactjs.org/docs/error-boundaries.html) for graceful fallback when things go wrong. And this is software development&mdash;things <strong>will</strong> go wrong.

## The details

I've created an `ErrorBound` class-based component that can be triggered by toggling the `hasError` state to true using the React dev tools. I'm working on a way to demonstrate it in a production setting. Check the resources below for more information.

## Make it run!

1. Download the react-bytes apps
1. `$ cd /error-bound`
1. `$ npm install`
1. `$ npm run build`
1. `$ cd build`
1. `$ npx http-server --push-state`
1. View app on `http://127.0.0.1:8080`. You should see the tomato banner with "Oh no!"

## Resources

- [React API: Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
- [2 Minutes to Learn React 16's componentDidCatch Lifecycle Method](https://medium.com/@sgroff04/2-minutes-to-learn-react-16s-componentdidcatch-lifecycle-method-d1a69a1f753)
- [Use react-error-boundary to handle errors in React](https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react)
- [How to test production build of React apps locally?](https://www.linkedin.com/pulse/how-test-production-build-react-js-app-locally-vinay-sharma-he-him-)
