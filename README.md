<div align="center">
  <img width=500 src="public/images/logo/state-of-neptune-wht-inline.png" />
</div>

---

This is the repository for State Of Neptune's official website https://stateofneptune.com/

## Setting up the project

Install the dependencies for the build and preview process:

```shell
yarn
```

Build the needed client and server modules using the command:

```shell
yarn build
```

Additionally, the build command will use Typescript to run a type check on the source code.

This app has a minimal [Fastify server](https://fastify.io/) implementation. After running a full build, you can preview the build using the command:

```
yarn serve
```

Then visit [http://localhost:3000/](http://localhost:3000/)

### Development

To run the project in watch mode, use the command:

```shell
yarn dev
```

The app is running at [http://localhost:5173/](http://localhost:5173/)

### With Docker

Create a docker image and run a container using the command:

```shell
docker compose up
```

Then visit [http://localhost/](http://localhost/)
