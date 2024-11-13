# ![](/public/portfolio.png) Portfolio Website

Welcome to my portfolio website! This project showcases my skills, projects, and experiences as a developer. It’s built using **Next.js** and designed to be easy to set up and customize. Follow the steps below to get your own instance up and running.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Customizing Your Portfolio](#customizing-your-portfolio)
- [Built With](#built-with)
- [License](#license)

## Getting Started

Follow these steps to set up the portfolio website on your local machine.

### Prerequisites

Before running the portfolio website, ensure you have the following installed:

- **Node.js**: This project requires Node.js. Download and install it from [here](https://nodejs.org/).
- **npm or Yarn**: You can use either npm (comes with Node.js) or Yarn as the package manager. If you don’t have Yarn, you can install it from [here](https://yarnpkg.com/getting-started/install).

### Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Meyiwa123/portfolio-v2
    ```

2. **Navigate into the project directory**:
    ```bash
    cd portfolio-v2
    ```

3. **Install project dependencies**:
    Choose your preferred package manager:
    - Using npm:
      ```bash
      npm install
      ```
    - Using Yarn:
      ```bash
      yarn install
      ```

### Running the Development Server

1. **Start the development server**:
    - Using npm:
      ```bash
      npm run dev
      ```
    - Using Yarn:
      ```bash
      yarn dev
      ```

2. **Access the website**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to view your portfolio.

## Customizing Your Portfolio

This portfolio is designed to be customizable. To personalize it with your own information and projects:

1. **Update your profile**:
   - Replace the profile image and text in `pages/index.js` to reflect your own.

2. **Modify the sections**:
   - Add or remove sections in the `SECTIONS` constant in the `components/Header.js` file to include the content most relevant to you.

3. **Update projects and experiences**:
   - Edit the content of the project and experience sections in the `components/Projects.js` and `components/Experience.js` files.

4. **Customize the design**:
   - Feel free to modify the styles in `styles/globals.css` or use your own stylesheets to match your personal branding.

## Built With

- [Next.js](https://nextjs.org/) – The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for custom design
- [Framer Motion](https://www.framer.com/motion/) – For smooth animations and transitions
- [Lucide Icons](https://lucide.dev/) – Set of high-quality icons
- [React](https://reactjs.org/) – JavaScript library for building user interfaces

## License

This project is licensed under the MIT License
