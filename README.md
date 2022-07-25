This is a TypeScript [Next.js](https://nextjs.org/) template that has configured tools listed below to work together nicely.

## Packages

- [Next.js](https://nextjs.org/) as main framework
- [SWR](https://swr.vercel.app) as API shared state management
- [Axios](https://axios-http.com/docs/intro) for HTTP calls (used by SWR as well)
- [MUI](https://mui.com) as component library
- [next-translate](https://github.com/vinissimus/next-translate) localization 

### Development tools
- [Storybook](https://storybook.js.org) for component / page development
- [MSW](http://mswjs.io) to mock API responses in Storybook / local environment

---

## Getting Started

First, run the development server:

```bash
yarn
yarn dev # To start dev server on port 3000
yarn storybook # To start storybook
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.