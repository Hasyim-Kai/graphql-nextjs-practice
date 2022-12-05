import Head from 'next/head'
import React, { useCallback, useRef, useState } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import s from '../styles/dropdown.module.scss'

export default function DropdownPopUp() {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleChange = () => { setIsOpen((state) => !state) }
    const closePopUp = () => { setIsOpen(false) }
    useClickOutside(isOpen, ref, closePopUp);

    return <section className={s.wrapper} ref={ref}>
        <button onClick={handleChange} className={s.btn}>V</button>

        <div className={`${s.dropdown} ${isOpen ? s.show : s.hide}`}>
            <p>content</p>
        </div>
    </section>
}