# Game Travel Planner

**Welcome to Gamel!**Gamel is a fully responsive React application where users can plan a trip, select games to play, choose food options, and provide allergy information — all in one place. This app was created purely as a practice project to sharpen React skills, with a focus on **state management, props, component communication, and dynamic rendering**.

> ⚠️ **Disclaimer:** This app has no real-world use beyond practice and learning. It was designed as a sandbox for experimenting with React fundamentals.

## Table of Contents

1.  [Features](#features)
2.  [Technologies Used](#technologies-used)
3.  [Getting Started](#getting-started)
4.  [App Structure](#app-structure)
5.  [How It Works](#how-it-works)
6.  [Future Improvements](#future-improvements)
7.  [Lessons Learned](#lessons-learned)
8.  [Call to Action](#call-to-action)

## Features

- Fully **responsive layout** that works across desktop, tablet, and mobile devices.
- **Trip selection** with images, participant ranges, duration, and descriptions.
- **Game selection** with detailed info: player count, estimated playtime, and sold-out status.
- **Food selection** including portion size, description, and price.
- **Allergy form** to add/remove allergies dynamically.
- **Summary section** that displays all selected items with the ability to remove them.
- Built with **React** using useState and props for dynamic interactivity.

> ⚡ **Controversial takeaway:** Who needs a fully polished UI/UX if the app works correctly and teaches you **why** React works the way it does?

## Technologies Used

- **React** – UI library for building interactive components.
- **React Hooks (useState)** – Manage dynamic state across components.
- **Props** – Pass data and handlers between parent and child components.
- **CSS** – Custom styling and layout.
- **GitHub Pages** – Deployment for static React apps.

## Getting Started

To run this project locally:

1.  **Clone the repository**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML` git clone https://github.com/MichaelHokl/gamel-tours.git `

1.  **Install dependencies**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML` cd gamel-tours  npm install `

1.  **Start development server**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML` npm start `

1.  **Build and deploy** (for GitHub Pages)

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML` npm run build  npm run deploy `

> Make sure the homepage property in package.json is correctly set to "https://MichaelHokl.github.io/gamel-tours".

## App Structure

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML` /public    /images       # All game, food, and trip images  /src    App.js        # Main app component    index.css     # Styling for the entire app `

- **App.js** – Main component that manages the state for trips, games, food, and allergies. Renders child components: Header, TripList, GameList, FoodList, AllergyForm, AllergyList, Summary.
- **Data Arrays** – gamesData, foodData, tripData are stored as arrays in App.js for easy state management and rendering.
- **Components** – Functional components with clear separation of concerns: each list (games, trips, food) and summary section is modular.

## How It Works

1.  **Select Trips** – Click on a trip to add it to your summary.
2.  **Select Games** – Click on the desired games; sold-out games can be identified visually.
3.  **Select Food** – Click on food items to add them to your trip plan.
4.  **Add Allergies** – Enter any allergies and submit; the list dynamically updates.
5.  **Summary Section** – Displays all selections with the ability to remove items individually.
6.  **Book Now** – Placeholder button to simulate finalizing the selection.

> Every interaction teaches a practical React lesson about **state updates, props communication, dynamic rendering, and event handling**.

## Future Improvements

- Add **pop-up notifications** when items are added to the summary.
- Implement **form validation** for allergies input.
- Enhance **UI/UX** with better visual hierarchy, animations, and interactive feedback.
- Convert the app into a **full-stack project** by connecting to a backend database for real trips and bookings.

## Lessons Learned

- **Props & State:** Learned the "big why" behind passing props and managing state in functional components.
- **Dynamic Rendering:** Practiced mapping over arrays to dynamically generate UI components.
- **Event Handling:** Learned how to handle form submissions, clicks, and conditional rendering efficiently.
- **Responsiveness:** Experienced the challenges of designing a layout that works across different screen sizes.

> 🔥 **Truth bomb:** You don’t need a production-ready product to learn deeply — sometimes, practice apps teach more than real-world projects.

## Call to Action

I’m actively looking for a **React intern position** where I can further grow my skills and contribute to real projects.

If you’re hiring or know a company looking for someone passionate about React, state management, and building intuitive apps, **let’s connect!**

[Connect with me on LinkedIn](https://www.linkedin.com/in/michaelhokl)
