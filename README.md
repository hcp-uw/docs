# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

Here's the website: [https://hcp-uw.github.io/hcp-documentation/](https://docs.hcp-uw.com/)

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


### Deploy

Our docs are deployed through [vercel](https://vercel.com/husky-coding-projects-projects/docs/deployments) automatically from the `vercel_deploy` branch. Just push changes to `main`, and then merge `main` into `vercel_deploy` to deploy the changes.

```
git checkout main
git pull
git add <files>
git commit -m "message"
git push origin main
git checkout vercel_deploy
git merge main
git push origin vercel_deploy
```
