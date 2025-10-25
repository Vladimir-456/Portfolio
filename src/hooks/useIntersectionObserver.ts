import { useState, useEffect } from "react"
type IntersectionObserverProps = {
    ref: React.RefObject<HTMLDivElement | null>;
    options?: IntersectionObserverInit
}
function useIntersectionObserver ({ref, options} : IntersectionObserverProps) : boolean  {
    const [isIntersecting, setIsIntersecting] = useState(false)
    
    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        },
        options
        );

        const current = ref.current;

        if (current) {
        observer.observe(current);
        }

        return () => {
        observer.disconnect();
        };
  }, [ref, options]);

    return isIntersecting
}

export default useIntersectionObserver