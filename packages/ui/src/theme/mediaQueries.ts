const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

type Breakpoint = keyof typeof breakpoints;

const mediaQuery = (breakpoint: Breakpoint) =>
  `@media (min-width: ${breakpoints[breakpoint]}px)`;

export const mediaQueries = {
  up: (breakpoint: Breakpoint) => mediaQuery(breakpoint),
  down: (breakpoint: Breakpoint) =>
    `@media (max-width: ${breakpoints[breakpoint] - 0.05}px)`,
  between: (start: Breakpoint, end: Breakpoint) =>
    `@media (min-width: ${breakpoints[start]}px) and (max-width: ${breakpoints[end] - 0.05}px)`,
  only: (breakpoint: Breakpoint) => {
    const keys = Object.keys(breakpoints) as Breakpoint[];
    const nextBreakpoint = keys[keys.indexOf(breakpoint) + 1];
    return nextBreakpoint
      ? mediaQueries.between(breakpoint, nextBreakpoint)
      : mediaQueries.up(breakpoint);
  },
};

export const mq = mediaQueries;

// Exemplo de uso:
// const ResponsiveComponent = styled.div`
//   font-size: 16px;

//   ${mq.up('md')} {
//     font-size: 18px;
//   }

//   ${mq.between('md', 'lg')} {
//     background-color: lightblue;
//   }

//   ${mq.down('sm')} {
//     padding: 10px;
//   }

//   ${mq.only('lg')} {
//     border: 1px solid black;
//   }
// `;
