![CBASP Companion ReadmeTitle](https://github.com/vaupunkt/cbaspCompanion/assets/119793693/26cf464b-412d-492a-b107-9997921bad76)

# CBASP Companion

CBASP Companion is an app designed to support people with chronic depression undergoing Cognitive Behavioral Analysis System of Psychotherapy (CBASP) therapy.

![CBASPCompanionAnimation](https://github.com/vaupunkt/cbaspCompanion/assets/119793693/a53da82a-602b-486b-bf46-c015d1d6e093)

## About CBASP Therapy

CBASP is a therapeutic approach specifically developed for the treatment of patients with chronic depression. It is a highly structured and directive approach that integrates behavioral, cognitive, psychodynamic, and interpersonal approaches. CBASP was developed by James P. McCullough and has been empirically tested in scientific studies since 1980. It is the only psychotherapeutic approach for the treatment of long-lasting depressive disorders.

## About the Kiesler Circle
![Kieslerkreis](https://github.com/vaupunkt/cbaspCompanion/assets/119793693/335920c1-b318-4982-aa5b-8eaabfaeba0a)

The Kiesler Circle is a communication model developed by the American psychologist Donald J. Kiesler in 1983. It describes how interpersonal interactions can be described on two axes: the axis of control with the poles “dominant” (open) and “submissive” (closed), and the axis of affiliation/relationship with the poles “friendly” (close) and “hostile” (distant). The Kiesler Circle graphically describes the taxonomy of interpersonal problems and plays a significant role in the psychotherapy of chronic depression with CBASP.

## Features
![image](https://github.com/vaupunkt/cbaspCompanion/assets/119793693/92e0e6db-f650-447e-8998-724fb92a611c)

The app offers a variety of features to help users analyze their situation and gain insights into their thoughts and behaviors. With the app, users can fill out and view various situation analyses, including future analysis, past analysis, and inner situation analysis. These analyses allow users to reflect on their past experiences, plan for the future, and understand their current inner state.

To make data entry easy and intuitive, the app uses a chatbot from ConversationalForms. This chatbot guides users through the process of entering their data and provides a conversational interface for interacting with the app.

In addition to the situation analyses, the app also has the Kiesler Circle implemented. The Kiesler Circle is a tool for understanding interpersonal behavior and relationships. It provides an overview of the user’s different positions in behavior and desired behavior, helping them to better understand their interactions with others.

### Progressive Web App
![image](https://github.com/vaupunkt/cbaspCompanion/assets/119793693/91021bce-7599-4266-9f36-ba9146d25b07)

The app is available as a Progressive Web App (PWA), which means it can be installed on your device and used offline. To install the app, simply visit the website using a compatible browser and follow the prompts to add it to your home screen. Once installed, you’ll be able to use the app just like any other native app on your device.

## Repository

The repository for the app can be found here: https://github.com/vaupunkt/cbaspCompanion


### Project Setup

#### Template
This project was created from the neue fische `next` template.

You can [🔗 **use this template on CodeSandbox**](https://codesandbox.io/p/sandbox/github/neuefische/web-exercises/tree/main/templates/next?file=/README.md) or locally by running this command in your Terminal:

```bash
npx -y ghcd@latest neuefische/web-exercises/tree/main/templates/next my-app -i
```

#### To work with this Repository:

![image](https://github.com/vaupunkt/cbaspCompanion/assets/119793693/024e34ce-37a2-4e28-98a7-168bf7e3ff23)
1. Clone this repository
2. `$ npm install` installs all the files and dependencies the app needs to run
3. `$ npm run dev` runs the app in dev mode and opens http://localhost:3000 to view it in your browser. Or you will be asked to confirm another port if this one isn't available.

### Used Packages and Tools

- **[React](https://react.dev/)**: React is a JavaScript library for building user interfaces. It lets you create reusable components that can handle data and events. React also supports server-side rendering, which can improve the performance and SEO of the app.
- **[Next.js](https://nextjs.org/)**: Next.js is a framework for building web applications with React. It provides features such as routing, data fetching, image optimization, and more. Next.js also supports serverless functions, which let you write backend code without managing servers.
- **[styled-components](https://styled-components.com/)**: styled-components is a library that allows you to write CSS code inside the React components. It makes it easier to style the app and avoid conflicts with other CSS rules. It also supports theming, dynamic styling, and server-side rendering.
- **[Chart.js](https://www.chartjs.org/)**: Chart.js is a library for creating HTML5 charts. It is simple yet flexible and provides a wide range of chart types, plugins, and customization options. In the CBASP Companion app, I used Chart.js to draw and make the Kiesler Circle interactive. This allows users to visualize their interpersonal interactions in a more engaging way.
- **[react-chartjs-2](https://react-chartjs-2.js.org/)**: react-chartjs-2 is a React wrapper for Chart.js. It lets you use Chart.js elements as React components. It also handles updating and destroying the charts when the props change or the component unmounts.
- **[uid](https://www.npmjs.com/package/uid)**: uid is a library that generates unique IDs. It can be useful for creating keys, identifiers, or tokens. In the CBASP Companion app, I used uid to generate unique keys for each situation analysis.
- **[react-awesome-reveal](https://react-awesome-reveal.morello.dev/)**: react-awesome-reveal is a library for adding reveal animations to the React components. It uses the Intersection Observer API to detect when the components appear in the viewport and applies CSS animations to them. It also supports custom animations, hooks, and TypeScript.
- **[react-confirm-alert](https://www.npmjs.com/package/react-confirm-alert)**: react-confirm-alert is a library for creating confirm dialogs in React apps. It offers a promise-based API that works well with async/await syntax. It also allows you to customize the dialog style and content.
conversationalform: conversationalform is a library that turns web forms into conversations. It uses a chatbot interface to ask questions and collect user input. It also supports validation, customization, and accessibility.
- **[react-device-detect](https://www.npmjs.com/package/react-device-detect)**: This is an npm package that provides a simple way to detect the type of device a user is using in a React application. It provides a number of functions, such as isMobile, isTablet, and isDesktop, that you can use to conditionally render different components or styles based on the type of device the user is using.
