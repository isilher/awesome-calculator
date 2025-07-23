'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { EmojiEvents, Star } from '@mui/icons-material';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  const [primeNumbers, setPrimeNumbers] = useState<Set<number>>(new Set());
  const [showBadges, setShowBadges] = useState(false);

  const isPrime = (num: number): boolean => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const checkForPrime = (result: number) => {
    if (isPrime(result) && result > 1) {
      setPrimeNumbers(prev => new Set([...prev, result]));
    }
  };

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);
      
      setDisplay(String(newValue));
      setPreviousValue(newValue);
      checkForPrime(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
      checkForPrime(newValue);
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const clearEntry = () => {
    setDisplay('0');
  };

  const buttons = [
    ['C', 'CE', '±', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '', '=']
  ];

  const getButtonColor = (button: string) => {
    if (['C', 'CE', '±'].includes(button)) return 'error';
    if (['÷', '×', '-', '+', '='].includes(button)) return 'primary';
    return 'secondary';
  };

  const getButtonVariant = (button: string) => {
    if (['÷', '×', '-', '+', '='].includes(button)) return 'contained';
    return 'outlined';
  };

  const handleButtonClick = (button: string) => {
    switch (button) {
      case 'C':
        clearAll();
        break;
      case 'CE':
        clearEntry();
        break;
      case '=':
        performCalculation();
        break;
      case '+':
      case '-':
      case '×':
      case '÷':
        inputOperation(button);
        break;
      case '.':
        if (display.indexOf('.') === -1) {
          inputNumber(button);
        }
        break;
      case '±':
        setDisplay(String(parseFloat(display) * -1));
        break;
      default:
        inputNumber(button);
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 2,
      background: (theme) => theme.palette.mode === 'dark' 
        ? 'linear-gradient(135deg, #0c4a6e 0%, #1e293b 100%)'
        : 'linear-gradient(135deg, #e0f2fe 0%, #f8fafc 100%)',
    }}>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              background: (theme) => theme.palette.mode === 'dark'
                ? 'linear-gradient(45deg, #90caf9, #e1bee7)'
                : 'linear-gradient(45deg, #1976d2, #9c27b0)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3
            }}
          >
            🧮 Awesome Calculator
          </Typography>
          
          <Chip
            icon={<EmojiEvents />}
            label={`Prime Badges: ${primeNumbers.size} 🏆`}
            color="primary"
            onClick={() => setShowBadges(true)}
            sx={{ 
              cursor: 'pointer',
              fontSize: '0.95rem',
              height: 36,
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.2s ease-in-out',
              }
            }}
          />
        </Box>

        <Card 
          elevation={12}
          sx={{
            background: (theme) => theme.palette.mode === 'dark'
              ? 'linear-gradient(145deg, #1e1e1e, #2d2d2d)'
              : 'linear-gradient(145deg, #ffffff, #f5f5f5)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box
              sx={{
                background: (theme) => theme.palette.mode === 'dark' 
                  ? 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)'
                  : 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                color: '#ffffff',
                p: 3,
                mb: 3,
                borderRadius: 3,
                textAlign: 'right',
                minHeight: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.3)',
                border: (theme) => theme.palette.mode === 'dark' 
                  ? '1px solid rgba(255,255,255,0.1)'
                  : '1px solid rgba(0,0,0,0.1)',
              }}
            >
              <Typography 
                variant="h4" 
                component="div"
                sx={{ 
                  fontFamily: 'monospace',
                  fontWeight: 600,
                  textShadow: '0 0 10px rgba(255,255,255,0.3)',
                }}
              >
                {display} ✨
              </Typography>
            </Box>

            <Box sx={{ display: 'grid', gap: 1.5 }}>
              {buttons.map((row, rowIndex) => (
                <Box 
                  key={rowIndex} 
                  sx={{ 
                    display: 'grid',
                    gridTemplateColumns: rowIndex === 4 ? '2fr 1fr 1fr 1fr' : 'repeat(4, 1fr)',
                    gap: 1.5,
                  }}
                >
                  {row.map((button, buttonIndex) => {
                    if (button === '') return <Box key={buttonIndex} />;
                    
                    return (
                      <Button
                        key={button}
                        variant={getButtonVariant(button)}
                        color={getButtonColor(button)}
                        size="large"
                        onClick={() => handleButtonClick(button)}
                        sx={{
                          height: '70px',
                          fontSize: '1.4rem',
                          fontWeight: 700,
                          borderRadius: 2,
                          minWidth: 0,
                          transition: 'all 0.2s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: (theme) => theme.palette.mode === 'dark'
                              ? '0 6px 20px rgba(255,255,255,0.1)'
                              : '0 6px 20px rgba(0,0,0,0.15)',
                          },
                          '&:active': {
                            transform: 'translateY(0px)',
                          },
                        }}
                      >
                        {button}
                      </Button>
                    );
                  })}
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Container>

      <Dialog 
        open={showBadges} 
        onClose={() => setShowBadges(false)} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            background: (theme) => theme.palette.mode === 'dark'
              ? 'linear-gradient(145deg, #1e1e1e, #2d2d2d)'
              : 'linear-gradient(145deg, #ffffff, #f8f9fa)',
          }
        }}
      >
        <DialogTitle sx={{ 
          textAlign: 'center', 
          fontSize: '1.5rem',
          fontWeight: 700,
          background: (theme) => theme.palette.mode === 'dark'
            ? 'linear-gradient(45deg, #ffd700, #ffb347)'
            : 'linear-gradient(45deg, #f39c12, #e74c3c)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          🏆 Prime Number Badges 🏆
        </DialogTitle>
        <DialogContent>
          {primeNumbers.size === 0 ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, opacity: 0.7 }}>
                No prime badges yet! 😢
              </Typography>
              <Typography variant="body1">
                Try some calculations to discover prime numbers! 🔢✨
              </Typography>
            </Box>
          ) : (
            <List sx={{ pt: 0 }}>
              {Array.from(primeNumbers).sort((a, b) => a - b).map((prime) => (
                <ListItem 
                  key={prime}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    background: (theme) => theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.05)'
                      : 'rgba(0,0,0,0.02)',
                    '&:hover': {
                      background: (theme) => theme.palette.mode === 'dark'
                        ? 'rgba(255,255,255,0.1)'
                        : 'rgba(0,0,0,0.05)',
                    }
                  }}
                >
                  <ListItemIcon>
                    <Star sx={{ color: '#ffd700', fontSize: '2rem' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Prime {prime} 🌟
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Discovered this amazing prime number!
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button 
            onClick={() => setShowBadges(false)} 
            variant="contained"
            fullWidth
            sx={{ 
              borderRadius: 3,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
            }}
          >
            Close 🚪
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calculator;