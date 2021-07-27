# Fetch Async

This app will be built to fetch data asynchronously and use the return value to create a meaningful display.

The app uses the ~~[FBI&rsquo;s Crime Data API](https://crime-data-explorer.fr.cloud.gov/pages/docApi) to report computer crime information. The first iteration focuses on computer crimes such as embezzlement, hacking, or fraud.~~ [Faker API](https://fakerapi.it/en) for a first iteration. It will focus on companies with different languages of origin and quantity of companies returned. The FBI Crime Data API does not like async requests from `localhost` URLs. Preliminary research suggests a missing CORS header.

## Resources I&rsquo; found helpful

- [FBI Crime Data API](https://crime-data-explorer.fr.cloud.gov/pages/docApi)
- [Faker API](https://fakerapi.it/en)
- [Handling Multiple Inputs with a Single onChange Handler in React](https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react)
- [Consuming REST APIs In React With Fetch And Axios](https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/)
