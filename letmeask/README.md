
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## About Project
Project developed on a programming event NLW TOGETHER.
Consists in a real time Q&A app, in which you can create your room and provide its code to be asked about a specific topic by other people.

## What was used in this project?
### `ReactJS`
### `Typescript`
### `Firebase(OAuth / Realtime Database)`



## Guide

### `Home`
This is the main screen of the app

1. In this screen you can choose between create a room or get in one.

2. To create a room you need to be authenticated, so you need to click on `Crie sua sala com Google` button to be authenticated.

3. If you have the room code, you can get in a room filling the field with the code and clicking on `Entrar na sala` button, even if you aren't authenticated.

![image](https://user-images.githubusercontent.com/60116310/148659179-dbbd9b4a-49ff-41f5-bb3a-67caf4f18fe7.png)

### `Admin Room`
This is the admin room, where only the room creator can have access.

1. In this screen you can see the room code and copy by clicking on it.

2. Finish the room as you wish by clicking on the `Encerrar sala` button.

3. Mark a question as answered.

4. Highlight a specific question.

5. Delete a question

![image](https://user-images.githubusercontent.com/60116310/148659036-acad9d71-8ba0-4f24-b589-b142000525bc.png)

### `Room`

This is the room screen, where anybody that have the room code can access.

1. In this screen you can Ask a question.

2. See the room code and copy by clicking on it.

3. Like a question by clicking on the like button


![image](https://user-images.githubusercontent.com/60116310/148659122-66071dcd-f76c-4506-8363-5fe22eefc1da.png)

### `Create new Room`

This is the screen in which you can create a room after being authenticated.

1. Give to your room a name filling the field and click on `criar sala` button.

2. In this room you can choose entering in an existent room by clicking on the `clique aqui` link too.

![image](https://user-images.githubusercontent.com/60116310/148659205-59e7da88-2d2b-46cd-acbf-6bac9e800bc4.png)

### `Need to be logged in to ask a question`

This is the room screen when you are unauthenticanted.

1. You can see the questions but can't make any one.

2. You can be authenticated by clickig on the `Faça seu login` link.

![image](https://user-images.githubusercontent.com/60116310/148659246-09435133-20e7-4075-81d6-13197ae5c2d4.png)
