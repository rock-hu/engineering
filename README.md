# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

## install    
```bash
npm install @slidev/cli
```

To start the slide show:

- `npm install`
- `npm run dev`
- visit http://localhost:3030

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev on [documentations](https://sli.dev/).


## mustache    
```bash
plop article -- --article plop
plop article -- --article slidev
plop article -- --article mermaid

```

```bash
plop slide -- --domain microservices --topic actuator
```

## build    

```bash
slidev build *.md
```

## export    
```bash
npm i -D playwright-chromium
slidev export -dark --with-clicks --with-toc
```



## deploy

## theme    
```bash
---
theme: seriph
---
```
```bash
npm install @slidev/theme-seriph
```