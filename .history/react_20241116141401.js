function useMemo() {
  // const factorial = useMemo(() => computeFactorial(number), [number]);
  // In this example, the factorial of a number is computed. The computeFactorial function is memoized using useMemo,
  // so it only recalculates when the number prop changes.
}

function useCallback() {
  //   const handleClick = useCallback(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, []);
  // In this example, handleClick is memoized with useCallback. This means that unless the dependencies
  // (in this case, there are none) change, handleClick will maintain the same reference across renders.
  // This prevents the ChildComponent from re-rendering unnecessarily, since the onClick prop remains stable.
}

function memo() {
  //export default memo(component)
  // this will prevent re rendering of the react component unless the props change
  // if we are passing the funtion as argument we have to wrap it using usecallback as the funtion will be updated on render
  // that will cause un-necessary render
}
