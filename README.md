# IT Perfect - Web App

A modern web application built with Next.js, React 19, MUI, TailwindCSS, and Clerk for authentication.

## 🧰 Tech Stack

- Next.js 15
- React 19 (RC)
- MUI (Material UI)
- Tailwind CSS
- Clerk – Authentication and user management
- TypeScript
- Toolpad Core
- React Player for media
- ESLint for code linting

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- Internet access to pull dependencies and Clerk configuration

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/itperfectfr/it-perfect.git
cd it-perfect
```

### 2. Install dependencies

```bash
# using yarn (recommended):

yarn install

# or with npm:

npm install
```

### 3. Setup environment variables

Create a .env.local file in the root directory and add your Clerk and app-specific variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### 4. 🧪 Run the app in development

```bash
yarn dev
# or
npm run dev
```

`Visit http://localhost:3000 in your browser.`

### 5. 🛠 Available Scripts

```bash
- yarn dev : Start the development server

- yarn build : Build the application for production

- yarn start : Start the production build locally

- yarn lint : Run ESLint on the codebase
```

### 6. 🎨 Styling

```bash
- Tailwind CSS is used for utility-first styling.

- MUI (Material UI) components are used for UI building blocks.

- Themes are handled using next-themes.
```

### 7. 📦 Folder Structure (basic)

```bash
.
├── pages/         # Next.js pages and routing
├── components/    # Shared components (UI, layout)
├── public/        # Static files and images
├── styles/        # Tailwind and global CSS
├── utils/         # Helpers and utilities
├── .env.local     # Local environment variables
├── package.json
└── README.md

```

### 8. 🙋‍♂️ Support & Contact

```bash
# For any questions or contributions:

- 📧 Email: contact@itperfect.fr
- 🌐 Website: https://www.itperfect.fr
```

Made with ❤️ by the IT Perfect Team.
