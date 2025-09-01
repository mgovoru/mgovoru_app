'use client';

import React from 'react';
import Home from './components/Home/home';
import DotGrid from './components/DotGrid/DotGrid';


export default function App() { 


  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: 'auto',
          height: '100%',
          zIndex: -1,
        }}
      >
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor='#4b5563'
          activeColor='#FF7949'
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <Home />
    </>
  );
}
