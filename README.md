# URL Shortener

A simple and elegant URL shortener built with React and Vite.

## Description

This project is a URL shortener application where users can enter a URL, and the application will shorten it using an external API. The application includes features such as a loading spinner while the URL is being shortened, error handling, and toast notifications for successful URL copy and errors.

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/amirsohail66/URL-Shortener
   cd url-shortener
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Usage

1. Open your browser and navigate to `http://localhost:5173/` (or the appropriate port).
2. Enter the URL you want to shorten in the input field.
3. Click on the "Shorten" button.
4. The shortened URL will be displayed. You can click the copy icon to copy it to the clipboard.

## Project Structure

```plaintext
.
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
└── index.html
```

### `App.jsx`

Contains the main React component for the URL shortener application. It includes state management for the input URL, shortened URL, loading state, and error handling.

### `App.css`

Contains the styling for the application, including classes for the loader, buttons, and input fields.

### `main.jsx`

The entry point for the React application, rendering the `App` component into the DOM.

### `index.html`

The main HTML file that includes the root div where the React application is rendered.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Styled-components**: A library for styling React components.
- **React-icons**: A library for including popular icons in React projects.
- **React-toastify**: A library for providing toast notifications.
- **Vite**: A build tool that aims to provide a faster and leaner development experience.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.