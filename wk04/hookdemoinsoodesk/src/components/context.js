import React from 'react';

export const theme = {
  golden: 'theme-golden'
};

export const locale = {
  rainbow: '🌈',
  Korea: '❤' //to enter emoticon, press Win + .(period)
};

export const ThemeContext = React.createContext(theme.golden);
//export const LocaleContext = React.createContext(locale.rainbow);
export const LocaleContext = React.createContext(locale.Korea);
