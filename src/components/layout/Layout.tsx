import { FC, PropsWithChildren, useState, useEffect } from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'


export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [colorMode, setColorMode] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const className = "dark";
        const bodyClass = window.document.body.classList;

        colorMode === "dark"
            ? bodyClass.add(className)
            : bodyClass.remove(className);

    }, [colorMode]);

    return (
        <>
            <Header colorMode={colorMode} />
            <div className='flex-1'>
                {children}
            </div>
            <Footer setColorMode={setColorMode} colorMode={colorMode} />
        </>
    )
}