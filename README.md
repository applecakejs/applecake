applecake is a javascript library for making HTML elements with javascript really easy .

## Why applecake ?
- Really easy to use
- It is not heavy
- It has a <a href="https://github.com/applecakejs/packer">simple packer</a> to put all of file in to a one file
- It has a <a href="https://github.com/applecakejs/make-applecake-app">template github repository</a> so you don't need to make everything from start

# Installation
You can use make-applecake-app npm project to make a applecake project.
use : 
```npm
npm i -g make-applecake-app
```
then you can :
```
make-applecake-app <name>
```
to create project 
and :
```bash
cd <name>
```
Done.
### requirements for installing
- git
- node >= 8

## What Is CRH?
C Stand for **Components** , R stand for **Renderer** and H stand for **Html**.
Every Component is a function that returns a string then the renderer (`render.js`) will Render that string to Html file and applecake always use CRH .
maybe this image can help you :
<img src="./images/CRH.png"></img>

## Docs 
you can find  all docs in <a href="./docs">/docs</a>
