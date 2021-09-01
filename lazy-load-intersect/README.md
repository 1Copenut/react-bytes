# Lazy Load Intersect

This app will be built to test out React.Suspense and React.lazy for code splitting. It builds off the previous work in my [lazy-load-render](https://github.com/1Copenut/react-bytes/tree/main/lazy-load-render) and [lazy-load-click](https://github.com/1Copenut/react-bytes/tree/main/lazy-load-click) apps. This iteration uses the Intersection Observer API to load a modal dialog when a toggle button is in the user's viewport.

Big thanks to [Alex Sexton](https://twitter.com/SlexAxton) for his article [Deploying JavaScript Applications](https://alexsexton.com/blog/2013/03/deploying-javascript-applications/) circa 2013 for the original inspiration. I read the article when it was new, and saw a lot of potential in loading JavaScript based on user behavior. Saved bytes then, saves bytes now.

## The details

This app deliberately creates a stream of business ipsum nonsense to ensure the `<main>` is longer than a typical viewport. Open your favorite browser dev tools, and select JavaScript under the Network tab. Scroll down, down, down some more, until the "This is the observable" button is in your viewport. At that point, you should see two new JavaScript files load asynchronously. These files are the modal dialog and a React Portal being [created by React Modal](https://github.com/reactjs/react-modal).

As an aside, I <strong>highly</strong> recommend React Modal for an accessible modal dialog solution. It adds the modal outside your document root, does a good job of focus management, and includes the right ARIA hooks to identify itself to assistive technology.

## Resources

- [Deploying JavaScript Applications](https://alexsexton.com/blog/2013/03/deploying-javascript-applications/)
- [MDN: Intersection Observer API](zilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Intersection Observer using React](https://dev.to/producthackers/intersection-observer-using-react-49ko) -[GitHub: React Modal](https://github.com/reactjs/react-modal)
