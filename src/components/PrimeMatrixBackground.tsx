'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

interface PrimeDroplet {
  id: number;
  x: number;
  y: number;
  speed: number;
  value: number;
  isEmoji?: boolean;
  emoji?: string;
}

const PRIME_NUMBERS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293];

const CHEEKY_EMOJIS = ['😏', '🤓', '🧮', '✨', '🎯', '💫', '🚀', '⚡', '🔢', '🎨'];

export default function PrimeMatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropletsRef = useRef<PrimeDroplet[]>([]);
  const animationRef = useRef<number>();
  const lastEmojiTime = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dropletId = 0;

    const createDroplet = (isEmoji = false): PrimeDroplet => {
      return {
        id: dropletId++,
        x: Math.random() * dimensions.width,
        y: -20,
        speed: Math.random() * 2 + 1,
        value: PRIME_NUMBERS[Math.floor(Math.random() * PRIME_NUMBERS.length)],
        isEmoji,
        emoji: isEmoji ? CHEEKY_EMOJIS[Math.floor(Math.random() * CHEEKY_EMOJIS.length)] : undefined,
      };
    };

    const animate = (currentTime: number) => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Add new prime droplets
      if (Math.random() < 0.1) {
        dropletsRef.current.push(createDroplet());
      }

      // Add emoji droplet every ~10 seconds
      if (currentTime - lastEmojiTime.current > 10000 && Math.random() < 0.01) {
        dropletsRef.current.push(createDroplet(true));
        lastEmojiTime.current = currentTime;
      }

      // Update and draw droplets
      dropletsRef.current = dropletsRef.current.filter(droplet => {
        droplet.y += droplet.speed;

        if (droplet.isEmoji) {
          ctx.font = '20px Arial';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fillText(droplet.emoji!, droplet.x, droplet.y);
        } else {
          ctx.font = '14px monospace';
          ctx.fillStyle = `rgba(0, 255, 0, ${Math.random() * 0.5 + 0.3})`;
          ctx.fillText(droplet.value.toString(), droplet.x, droplet.y);
        }

        return droplet.y < dimensions.height + 20;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          opacity: 0.15,
        }}
      />
    </Box>
  );
}