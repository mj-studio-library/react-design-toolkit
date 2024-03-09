# MJStudio React Design Toolkit

A opinioned design system toolkit tailored for React applications using Next.js

This package is top of the Chakra UI, incorporating related libraries internally.

- @chakra-ui/next-js
- @chakra-ui/react
- @emotion/react
- @emotion/styled
- framer-motion
- styled-components
- styled-system

The all libraries are dependency of chakra-ui itself.

## Install

```
yarn add @mj-studio/react-design-toolkit
```

## Usage

`app/layout.tsx`

```tsx
<DesignProvider cookies={cookies().getAll()} cookiesString={cookies().toString()}>
  {children}
</DesignProvider>
```

## Troubleshooting

This package is on alpha phase.