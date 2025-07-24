# 🧮 Awesome Calculator

An advanced calculator application built with Next.js 15 and React 19, featuring a unique **prime number badge collection system**, beautiful Material UI design, and animated matrix background.

![Calculator Preview](https://via.placeholder.com/800x400?text=Awesome+Calculator+Preview)

## ✨ Features

### 🔢 Core Calculator Functions
- **Basic Arithmetic**: Addition, subtraction, multiplication, division
- **Advanced Operations**: Sign toggle (±), decimal support
- **Clear Functions**: Clear all (C) and clear entry (CE)
- **Chain Calculations**: Perform multiple operations in sequence

### 🏆 Prime Number Badge Collection
- **Automatic Detection**: Discovers prime numbers in calculation results
- **Badge Collection**: Stores and displays collected prime numbers
- **Persistent Storage**: Saves badges to localStorage
- **Beautiful UI**: Animated dialog with badge showcase

### ⌨️ Keyboard Support
- **Number Keys**: `0-9` for input
- **Operators**: `+`, `-`, `*`, `/` for calculations
- **Special Keys**:
  - `Enter` or `=` to calculate
  - `Escape` to clear all
  - `Backspace` to clear entry
  - `Ctrl+C` to copy result

### 🎨 User Experience
- **Copy to Clipboard**: Click icon or use Ctrl+C to copy results
- **Loading States**: Visual feedback for heavy calculations
- **Responsive Design**: Works on desktop and mobile
- **Dark/Light Theme**: Automatic system preference detection
- **Smooth Animations**: Hover effects and transitions

### 🌟 Visual Features
- **Matrix Animation**: Falling prime numbers background
- **Gradient Themes**: Beautiful color schemes for both modes
- **Material UI**: Professional component library
- **Custom Styling**: Theme-aware colors and effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd awesome-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Coverage
The application includes comprehensive tests for:
- ✅ Basic calculator operations
- ✅ Prime number detection
- ✅ UI interactions and button clicks
- ✅ Edge cases (division by zero, invalid inputs)
- ✅ Badge collection system

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

### Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme and metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── icon.tsx            # Favicon generator
│   └── apple-icon.tsx      # Apple touch icon
├── components/
│   ├── Calculator.tsx      # Main calculator component
│   ├── ThemeRegistry.tsx   # Material UI theme provider
│   ├── PrimeMatrixBackground.tsx # Animated background
│   └── __tests__/
│       └── Calculator.test.tsx   # Test suite
├── jest.config.js          # Jest configuration
├── jest.setup.js           # Test setup
└── package.json            # Dependencies and scripts
```

## 🎯 Technical Stack

### Core Technologies
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with modern features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety and developer experience

### UI & Styling
- **[Material UI 7](https://mui.com/)** - React component library
- **[Emotion](https://emotion.sh/)** - CSS-in-JS styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS

### Development Tools
- **[Jest](https://jestjs.io/)** - Testing framework
- **[React Testing Library](https://testing-library.com/)** - Component testing
- **[ESLint 9](https://eslint.org/)** - Code linting
- **[Turbopack](https://turbo.build/pack)** - Fast development builds

## 🔧 Configuration

### Theme Customization
The app automatically detects system theme preference. Themes can be customized in `src/components/ThemeRegistry.tsx`.

### Prime Number Algorithm
Located in `Calculator.tsx:30-39`, optimized for performance with square root limit checking.

### Local Storage
Prime numbers are automatically saved to `localStorage` under the key `calculator-primes`.

## 📱 Responsive Design

The calculator is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop computers (1024px+)
- 🖥️ Large screens (1920px+)

## 🔒 Browser Support

- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m '✨ Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Guidelines
Follow the project's commit convention:
- Always start commits with an emoji and a unique prime number
- Example: `✨ 137 Add keyboard shortcuts support`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using Claude Code
- Material UI for the beautiful component library
- Next.js team for the amazing framework
- The React community for continuous innovation

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/your-repo/awesome-calculator/issues) page
2. Create a new issue with a detailed description
3. Include steps to reproduce any bugs

---

**Made with ❤️ and prime numbers** 🔢✨