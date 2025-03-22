# React Fiber Architecture
https://github.com/acdlite/react-fiber-architecture?tab=readme-ov-file


## useCallback
useCallback is a React Hook that lets you cache a function definition between re-renders. 
useCallback(fn, dependencies)

## useEffect
useEffect is a React Hook that lets you synchronize a component with an external system. 
useEffect(setup, dependencies?)

## useRef
useRef is a React Hook that lets you reference a value that’s not needed for rendering. 
useRef(initialValue)

## useId
useId is a React Hook for generating unique IDs that can be passed to accessibility attributes. 
useId() 
Do not call useId to generate keys in a list

## Loaders
A loader in react-router-dom is used to fetch data before rendering a page. It ensures the component has the required data before it loads. 
Loaders are just functions which are used to handle the loading of the data while you are navigating between the pages of the website. Imagine you are browsing a website.

## useLoaderData
useLoaderData is a React Router hook used in data loading strategies for React applications. It allows components to access data that was preloaded using a route loader function, ensuring that data is available before rendering the component.

## Context API
Context API is a mechanism that allows you to share data or state across components in a React application without having to pass props down through every level of the component tree, solving the "prop drilling" problem. 

## useContext
useContext is a React Hook that lets you read and subscribe to context from your component. 
useContext(SomeContext)