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