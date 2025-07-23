# 🧮 Awesome Calculator

A beautiful, modern calculator built with Next.js and Material UI that makes math fun with **prime number badges**! ✨

![Calculator Preview](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=flat-square&logo=next.js)
![Material UI](https://img.shields.io/badge/UI-Material%20UI-blue?style=flat-square&logo=mui)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

### 🎯 **Core Functionality**
- ➕ **Full Calculator** - Addition, subtraction, multiplication, division
- 🧮 **Professional UI** - Clean, intuitive interface with perfect button alignment
- 📱 **Responsive Design** - Works beautifully on desktop, tablet, and mobile

### 🏆 **Unique Prime Badge System**
- 🔢 **Prime Detection** - Automatically detects when calculation results are prime numbers
- 🌟 **Badge Collection** - Collect and showcase every unique prime number you discover
- 🎉 **Achievement Tracking** - Visual badge counter with beautiful dialog showcase

### 🎨 **Modern Design**
- 🌓 **System Theme Detection** - Automatically adapts to light/dark mode preferences
- ✨ **Smooth Animations** - Delightful hover effects and transitions
- 💎 **Professional Styling** - Gradient backgrounds, shadows, and modern typography
- 🎯 **Perfect Alignment** - OCD-friendly button grid layout

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/[your-username]/awesome-calculator.git
cd awesome-calculator

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your calculator in action! 🎉

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🎮 How to Use

1. **Calculate Normally** - Use like any standard calculator
2. **Discover Primes** - Try calculations like `2+1=3`, `5+2=7`, `11+0=11`
3. **Collect Badges** - Click the badge counter to see your prime number collection
4. **Enjoy Themes** - Switch your system theme to see the calculator adapt!

## 🛠️ Technology Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[Material UI](https://mui.com/)** - React component library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Emotion](https://emotion.sh/)** - CSS-in-JS styling
- **[React 19](https://react.dev/)** - Latest React with modern features

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
└── components/
    ├── Calculator.tsx      # Main calculator component
    └── ThemeRegistry.tsx   # Theme configuration and provider
```

## 🎨 Key Features Deep Dive

### Prime Number Detection Algorithm
```typescript
const isPrime = (num: number): boolean => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};
```

### Responsive Button Grid
- **Perfect Alignment** - CSS Grid ensures pixel-perfect button positioning
- **Professional Spacing** - Consistent 12px gaps between all elements
- **Touch-Friendly** - 70px button height optimal for mobile interaction

### System Theme Integration
- **Automatic Detection** - Uses `prefers-color-scheme` media query
- **Dynamic Colors** - Separate color palettes for light and dark modes
- **Smooth Transitions** - Seamless theme switching without flicker

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 About

This awesome calculator was built in **minutes** using [Claude Code](https://claude.ai/code) - showcasing the power of AI-assisted development! 🤖✨

**What makes this special:**
- 🚀 **Rapid Development** - From concept to production-ready app in minutes
- 🎨 **Professional Design** - No compromises on visual quality or UX
- 🧠 **Smart Features** - Prime number detection adds educational value
- 📱 **Modern Standards** - Latest Next.js, TypeScript, and Material UI

## 🌟 Acknowledgments

- Built with the amazing [Claude Code](https://claude.ai/code) AI assistant
- Powered by the incredible [Next.js](https://nextjs.org/) framework
- Beautiful components from [Material UI](https://mui.com/)
- Icons from [Material Design Icons](https://mui.com/material-ui/material-icons/)

## 👥 Contributors

- **[Nicole Kuong](https://github.com/NicoleKuong)** - Project collaboration and insights
- **[Claude Code](https://claude.ai/code)** - AI development assistant

---

**Made with ❤️ and AI magic** ✨

*Found a prime number? Share it with the world! #AwesomeCalculator #PrimeNumbers*
