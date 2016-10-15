# Full Stack Blog

Blog implemented using Universal React techniques.

* Server side rendering
* Redux
* Express
* Redux router

---

## About

This application was originally cloned from [docs-code-examples-electrode-io/express-react-redux-webpack](https://github.com/docs-code-examples-electrode-io/express-react-redux-webpack), which in turn was originally forked from [erikras/react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example). We have demonstrated the use of 3 features of Electrode Stand Alone modules:

* [Electrode Server Side Rendering component caching](https://github.com/electrode-io/electrode-react-ssr-caching)
* [Electrode Redux Router Engine](https://github.com/electrode-io/electrode-redux-router-engine)
* [Electrode Above the fold only server render](https://github.com/electrode-io/above-the-fold-only-server-render)

## Installation

```
npm install
```

## Running Server in Production Mode

```
npm run build
npm run start
```
---
## <a name="electrode-react-ssr-caching"></a>Electrode Server Side Rendering Component Caching ##

[Electrode-react-ssr-caching](https://github.com/electrode-io/electrode-react-ssr-caching) module supports profiling React Server Side Rendering time and component caching to help you speed up SSR.

It supports 2 types of caching:

* Simple - Component Props become the cache key. This is useful for cases like Header and Footer, where the number of variations of props data is minimal which will make sure the cache size stays small.
* Template - Components Props are first tokenized and then the generated template html is cached. The idea is akin to generating logic-less handlebars template from your React components and then use string replace to process the template with different props. This is useful for cases like displaying Product information in a Carousel where you have millions of products in the repository.

### Install
```bash
$ npm install --save electrode-react-ssr-caching
```
