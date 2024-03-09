# MJStudio React Design Toolkit

A opinioned design system toolkit tailored for React applications using Next.js

This package is top of the Chakra UI, incorporating related libraries internally.

The all libraries are dependency of chakra-ui itself.

## Install

```
yarn add @mj-studio/react-design-toolkit
```

Install Peer Dependencies

```
"@chakra-ui/next-js": "^2.2.0",
"@chakra-ui/react": "^2.8.1",
"@emotion/react": "^11.11.3",
"@emotion/styled": "^11.11.0",
"framer-motion": "^11.0.8",
"styled-components": "^6.1.8",
"styled-system": "^5.1.5"
```

## Usage

`app/layout.tsx`

```tsx
<DesignProvider cookies={cookies().getAll()} cookiesString={cookies().toString()}>
  {children}
</DesignProvider>
```

You should this in React Server Component

## Troubleshooting

This package is on alpha phase.