# Coursera React Advanced Portfolio Lab

This project is a React-based portfolio application, designed as part of a Coursera advanced React course. It demonstrates modern React concepts, component-based architecture, and best practices for building a personal portfolio website.

## Project Structure

- **public/**: Static assets and the main HTML template.
- **src/**: Source code for the React application.
  - **components/**: Reusable React components (e.g., Header, Footer, Card, etc.).
  - **context/**: React context for global state management (e.g., alert context).
  - **hooks/**: Custom React hooks (e.g., useSubmit).
  - **images/**: Image assets used in the portfolio.
- **screenshots/**: Screenshots and GIFs demonstrating the app's features and UI.
- **package.json**: Project dependencies and scripts.
- **README.md**: Project documentation.
- **INSTRUCTIONS.md**: Additional instructions or notes.

## Main Features

- **Landing Section**: Introduction and welcome message.
- **Header**: Navigation and branding.
- **Projects Section**: Showcases portfolio projects using cards.
- **Contact Me Section**: Contact form with validation and alert context.
- **Footer**: Social links and copyright.
- **Alert System**: Context-based alert messages for user feedback.
- **Responsive Design**: Mobile-friendly and visually appealing UI.

## Project Flow

1. **App Initialization**: The app starts from `src/index.js`, rendering the `App` component.
2. **Component Rendering**: The `App` component composes the main sections (Header, Landing, Projects, Contact, Footer) using reusable components.
3. **State Management**: Uses React Context (in `src/context/alertContext.js`) for global alert state, and custom hooks (in `src/hooks/useSubmit.js`) for form handling.
4. **Styling**: CSS files (`App.css`, `index.css`) provide global and component-level styles.
5. **Assets**: Images and static files are loaded from `public/` and `src/images/`.
6. **Testing**: Basic tests are provided in `src/App.test.js` and setup in `src/setupTests.js`.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the app locally:**
   ```sh
   npm start
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```
4. **Run tests:**
   ```sh
   npm test
   ```

## Customization

- Update content in the components under `src/components/` to personalize your portfolio.
- Add or replace images in `src/images/` and update references in components.
- Modify styles in `App.css` and `index.css` as needed.

## Screenshots

Screenshots and demo GIFs are available in the `screenshots/` folder.

## License

This project is for educational purposes as part of the Coursera React Advanced course.
