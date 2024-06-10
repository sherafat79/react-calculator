# Simple Engineering Calculator

This repository contains a simple engineering calculator built using React, TypeScript, and Tailwind CSS. It includes basic arithmetic operations and some engineering-specific calculations.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)


## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Engineering-specific calculations.
- Responsive design with Tailwind CSS.


## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/sherafat79/react-calculator.git
    cd react-calculator
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm start
    ```

The app will run on [http://localhost:3000](http://localhost:3000).

## Usage

Open the application in your web browser, input the values, and perform the desired calculations using the provided buttons.

## Project Structure

```plaintext
react-calculator/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Calculator.tsx
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   ├── styles/
│   │   └── tailwind.css
│   └── ...
├── tailwind.config.cjs
├── tsconfig.json
├── package.json
└── ...
```
public/: HTML template.
src/: React components and styles.
components/: Individual components, e.g., Calculator.
styles/: Tailwind CSS configurations.

## Technologies Used
- React: For building the user interface.
- TypeScript: For type safety.
- Tailwind CSS: For utility-first styling.
