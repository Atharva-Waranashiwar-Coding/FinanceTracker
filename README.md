
# Expense Tracker

An intuitive and visually engaging web application to help users manage and track their expenses and income. This project leverages React, Tailwind CSS, and Chart.js to provide users with a comprehensive overview of their financial health.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo

![Expense Tracker Screenshot](./screenshots/expense-tracker.png)

## Features

- **Add Income and Expenses**: Easily add and categorize income and expenses.
- **Balance Calculation**: Automatically updates and displays the total balance based on income and expenses.
- **Interactive Charts**: Visual representation of expense categories through an interactive doughnut chart.
- **Smooth Animations and Transitions**: Modern UI elements with smooth transitions and responsive design.
- **Authentication**: Basic authentication to ensure user privacy.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Data Visualization**: Chart.js
- **State Management**: React Context API
- **Authentication**: Custom authentication using React context

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Basic understanding of React and Tailwind CSS.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Configuration

To configure authentication or set up environment variables (e.g., Firebase or backend API keys), create a `.env.local` file in the project root.

```plaintext
REACT_APP_API_URL=your_api_url_here
REACT_APP_SOME_OTHER_ENV_VARIABLE=value_here
```

## Usage

1. **Sign In**: Log in to access your personalized expense tracker.
2. **Add Transactions**: Click on "+ Expenses" or "+ Income" to log your transactions.
3. **View Statistics**: See a visual breakdown of expenses by category in the "Stats" section.

## Project Structure

The project follows a component-based architecture, with a structure as follows:

```plaintext
├── public             # Static assets
├── src
│   ├── components     # Reusable UI components (buttons, modals, charts, etc.)
│   ├── lib
│   │   ├── store      # Contexts for managing global state
│   │   └── utils      # Utility functions (e.g., formatters)
│   ├── pages
│   │   ├── Home.js    # Main home page component
│   ├── styles         # Tailwind CSS configuration and custom styles
│   └── App.js         # Main app entry point
├── .env.local         # Environment variables
└── README.md
```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and open a pull request.

I welcome contributions to improve the app's functionality or add new features. Please feel free to suggest improvements or report bugs!
