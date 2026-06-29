# Terminology Service Widgets Demonstration (React)
A simple Next.js project to demonstrate the integration of the React Terminology Service Suite widgets.

For this demo, a Next.js app was set up with `Node.js v18.18.0`.

## Install and run the demo application

1) Install
```bash
npm install
```

2) Run
```bash
npm run dev
```
to start the app in development mode.

## Implementation

This demo project uses widgets from the `@ts4nfdi/terminology-service-suite` package.

The package is already installed in this project. If you want to use the widgets in another React or Next.js project, install the package first:

```bash
npm install @ts4nfdi/terminology-service-suite
```

After installing the package, choose the widget you want to use, import it into your React component, and render it on your page with the required properties.

The easiest way to find the right widget and understand how to configure it is to use the Storybook documentation. Storybook shows the available widgets, their properties, example configurations, and live previews:

[Open the Storybook documentation](https://terminology.services.base4nfdi.de/tss/comp/latest/iframe.html?viewMode=docs&id=overview--docs&globals=#how-to-use-this-storybook)

In this demo project, you can see an example implementation in `MainPage.tsx`.


## React Next.js Widgets Demo Project - Docker Usage

This guide explains how to use the provided `Dockerfile` to build and run the Next.js application in a Docker container.

### Building the Docker Image
To build the Docker image, run the following command in the project root directory:

```sh
docker build -t react-next-widgets-demo .
```

This command will create a Docker image named `react-next-widgets-demo`.

### Running the Container
Once the image is built, you can run a container with:

```sh
docker run -p 3000:3000 react-next-widgets-demo
```

This maps port 3000 inside the container to port 3000 on your local machine.

### Accessing the Application
After running the container, open a web browser and go to:

```
http://localhost:3000
```

### Stopping the Container
To stop the running container, press `Ctrl+C` if running in the foreground, or find the container ID with:

```sh
docker ps
```

Then stop it using:

```sh
docker stop <container_id>
```

### Running in Detached Mode
To run the container in the background (detached mode), use:

```sh
docker run -d -p 3000:3000 react-next-widgets-demo
```

To view logs from a detached container:

```sh
docker logs <container_id>
```

### Cleaning Up
To remove the container:

```sh
docker rm <container_id>
```

To remove the image:

```sh
docker rmi react-next-widgets-demo
```

### Development Mode
If you want to mount your local project folder inside the container for development, use:

```sh
docker run -p 3000:3000 -v $(pwd):/app react-next-widgets-demo
```

This ensures changes in your local project reflect inside the container.

---

This guide helps you build, run, and manage your Next.js application using Docker. Happy coding! 🚀
