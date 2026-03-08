# Periodic Table App

An interactive periodic table of elements built with React and Vite. This application displays all chemical elements in a visually appealing grid layout, with detailed information available through modal popups.

## Features

- **Interactive Grid**: Click on any element to view detailed information including atomic number, symbol, name, atomic mass, and more
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Fast Performance**: Built with Vite for lightning-fast development and build times
- **Modern React**: Uses React 18 with hooks and functional components

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **ESLint** - Code linting
- **CSS** - Styling

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd periodic-table
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

- Browse the periodic table by scrolling through the grid
- Click on any element tile to open a modal with detailed information
- Close the modal by clicking the close button or outside the modal area

## Project Structure

```
src/
├── components/
│   ├── ElementModal.jsx      # Modal component for element details
│   ├── ElementTile.jsx       # Individual element tile component
│   └── PeriodicTable.jsx     # Main periodic table grid component
├── data/
│   └── element.js            # Element data and configuration
├── styles/
│   ├── ElementModal.css      # Modal styling
│   ├── ElementTile.css       # Element tile styling
│   └── PeriodicTable.css     # Periodic table grid styling
├── App.jsx                   # Main application component
├── App.css                   # Application-wide styles
├── index.css                 # Global styles
└── main.jsx                  # Application entry point
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
