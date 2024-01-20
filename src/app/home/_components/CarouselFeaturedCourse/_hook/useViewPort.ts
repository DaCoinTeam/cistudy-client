import React from "react"

// const initialWidth = window.innerWidth
const useViewport = () => {
    const [width, setWidth] = React.useState(typeof window !== "undefined" ? window.innerWidth : undefined)
  
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])
  
    return { width }
}
export {useViewport}