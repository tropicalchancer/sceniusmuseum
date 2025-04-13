# Scenius Museum

A Next.js web application showcasing historical "sceniuses" (scenes of collective genius) throughout history. The application features a responsive grid layout of cards, detailed modal views, and filtering capabilities.

## Features

- Responsive grid layout of scenius cards
- Detailed modal view for each scenius
- Filtering by category, century, and location
- Sorting by impact score, century, and name
- Modern, clean design with Tailwind CSS
- TypeScript for type safety
- Server-side rendering with Next.js App Router

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sceniusmuseum.git
   cd sceniusmuseum
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
sceniusmuseum/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── SceniusCard.tsx
│   │   ├── SceniusModal.tsx
│   │   └── SceniusFilters.tsx
│   ├── data/
│   │   └── sceniuses.ts
│   └── types/
│       └── scenius.ts
├── public/
│   └── images/
├── package.json
└── README.md
```

## Adding New Sceniuses

To add new sceniuses to the database:

1. Open `src/data/sceniuses.ts`
2. Add a new entry to the `sceniuses` array following the `Scenius` interface structure
3. Add corresponding images to the `public/images` directory

## Deployment

The application is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
