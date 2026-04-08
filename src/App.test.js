import { render, screen } from '@testing-library/react';

jest.mock(
  '@vercel/analytics/react',
  () => ({
    Analytics: () => null,
  }),
  { virtual: true }
);

jest.mock('framer-motion', () => {
  const React = require('react');
  const MotionProxy = new Proxy(
    {},
    {
      get: (_, element) =>
        React.forwardRef(
          (
            {
              animate,
              children,
              exit,
              initial,
              transition,
              variants,
              viewport,
              whileHover,
              whileInView,
              ...props
            },
            ref
          ) => React.createElement(element, { ...props, ref }, children)
        ),
    }
  );

  return { motion: MotionProxy };
});

import App from './App';

test('renders portfolio hero headline', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /i build ai systems, automation platforms, and internal tools/i,
    })
  ).toBeInTheDocument();
});
