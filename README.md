# flowapt Website

A modern React + Vite website for flowapt, a WhatsApp AI agent company that integrates with Shopify stores to provide conversational AI sales agents.

## Features

- Animated hero section with rotating text effects using Framer Motion
- Custom "all-round-gothic" font integration from Typekit
- Responsive design with Tailwind CSS
- Modern UI components

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Radix UI

## Getting Started

### Prerequisites

- Node.js 16+ (recommended: 18+)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/flowapt-website.git
cd flowapt-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
flowapt-website/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── ui/         # UI components
│   │   │   └── button.tsx
│   │   └── Hero.tsx   # Hero component
│   ├── lib/           # Utility functions
│   │   └── utils.ts
│   ├── App.tsx        # Main App component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js  # PostCSS configuration
└── package.json       # Project dependencies
```

## Building for Production

```bash
npm run build
```

This will create a `dist` folder with all the optimized files ready for deployment.

## License

[MIT License](LICENSE)
