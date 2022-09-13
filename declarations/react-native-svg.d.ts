import React from 'react';
import 'react-native-svg';

// declaration file to add missing props on react-native-svg
declare module 'react-native-svg' {
    // svgprops
    export interface SvgProps {
      xmlns?: string;
      xmlnsXlink?: string;
    }

    // gprops
    export interface GProps {
        children?: React.ReactNode; 
    }
  }