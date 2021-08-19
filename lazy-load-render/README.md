# Lazy Load Render

This app will be built to test out React.Suspense and React.lazy for code splitting.

## The details

I'll start small, using the code splitting in an app to simulate progressive rendering. Load the app shell, then load in the cards after data is "ready". I'm using a static data object for now, but if you enable Network Throttling in your developer tools, you can see the suspense message for a few moments before cards render.

## Resources

- [React API: Code-Splitting](https://reactjs.org/docs/code-splitting.html)
- [Addy Osmani: The Import On Interaction Pattern](https://addyosmani.com/blog/import-on-interaction/)
- [Apply instant loading with the PRPL pattern](https://web.dev/apply-instant-loading-with-prpl/)
