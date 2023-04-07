import React, { Dispatch, SetStateAction } from 'react'
import Switch from "react-switch";
import { SunIcon } from '@heroicons/react/24/solid';
import { MoonIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';
import logoLight from '../../../../public/images/logoLight.webp'
import logoDark from '../../../../public/images/logoDark.webp'

export const Footer: React.FC<{
    colorMode: string,
    setColorMode: Dispatch<SetStateAction<'light' | 'dark'>>
}> = ({ setColorMode, colorMode }) => {

    let product = ['Database', 'Authentication', 'Storage', 'Functions', 'Coming soon', 'Pricing']
    let resources = ['Support', 'Case Studies', 'System Status', 'Terms of service']
    let developers = ['Documentation', 'API Reference', 'Guides']
    let company = ['Blog', 'Open Source', 'Humans.txt', 'Lawyers.txt']

    return (
        <footer className='container relative flex-shrink-0 px-6 py-16 mx-auto sm:py-18 md:py-24 lg:px-16 lg:py-24 xl:px-20'>
            <div >
                <div className='flex flex-col gap-20 mt-24 mb-32 sm:flex-row sm:gap-56'>
                    <div className='space-y-8 min-w-fit'>
                        <Link href='/'>
                            <Image
                                src={colorMode === 'light' ? logoLight : logoDark}
                                alt='logo'
                                width={123}
                                height={24}
                            />
                        </Link>
                        <div className='flex gap-6'>
                            <Link href={'/'}>
                                <svg className="w-6 h-6 fill-sup-700 hover:fill-sup-500" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" ></path></svg>
                            </Link>
                            <Link href={'/'}>
                                <svg className="w-6 h-6 fill-sup-700 hover:fill-sup-500" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            </Link>

                        </div>
                    </div>
                    <div className='flex flex-wrap justify-around w-full gap-8'>
                        <div className='flex flex-col gap-4'>
                            <p className='mb-4 text-sup-700'>Product</p>
                            {product.map((item, index) => <Link key={index} href={'/'} className='hover:text-sup-500'>
                                <p>{item}</p>
                            </Link>)}
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='mb-4 text-sup-700'>Resources</p>
                            {resources.map((item, index) => <Link key={index} href={'/'} className='hover:text-sup-500'>
                                <p>{item}</p>
                            </Link>)}
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='mb-4 text-sup-700'>Developers</p>
                            {developers.map((item, index) => <Link key={index} href={'/'} className='hover:text-sup-500'>
                                <p>{item}</p>
                            </Link>)}
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='mb-4 text-sup-700'>Company</p>
                            {company.map((item, index) => <Link key={index} href={'/'} className='hover:text-sup-500'>
                                <p>{item}</p>
                            </Link>)}
                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-full pt-8 mb-24 border-t border-opacity-20 border-sup-700 border-scale-500 dark:border-scale-600'>
                    <p className='text-sup-700'>&#169; Supabase inc</p>
                    <div className='flex items-center gap-1'>
                        <SunIcon className='dark:fill-sup-300 fill-sup-700' width={32} height={32} />
                        <Switch
                            onChange={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
                            checked={colorMode === 'dark'}
                            onColor='#444444'
                            onHandleColor='#1F1F1F'
                            uncheckedIcon={false}
                            checkedIcon={false}
                        />
                        <MoonIcon className='dark:fill-sup-300 fill-sup-700' width={24} height={24} />
                    </div>
                </div>
            </div>
        </footer >
    )
}