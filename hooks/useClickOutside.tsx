import { useEffect, RefObject } from 'react';

type Event = MouseEvent | TouchEvent;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void,) => {
    useEffect(() => {
        function handleClickOutside(event: Event) {
            const el = ref?.current;
            if (!el || el.contains((event?.target as Node) || null)) {
                return;
            }
            handler(event); // Call the handler only if the click is outside of the element passed.
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [ref]);
};