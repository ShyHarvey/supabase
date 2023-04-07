import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logoLight from '../../../../public/images/logoLight.webp'
import logoDark from '../../../../public/images/logoDark.webp'
import { Bars3Icon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

export const Header: React.FC<{ colorMode: string }> = ({ colorMode }) => {


    return (
        <header className='sticky top-0 z-50 flex items-center justify-between h-16 bg-white dark:bg-sup-900'>
            <nav className='flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20'>
                <div className='absolute left-4 top-4 lg:hidden'>
                    <button>
                        <Bars3Icon width={30} height={30} className='stroke-2 fill-sup-700 hover:fill-sup-500' />
                    </button>
                </div>
                <div className='flex items-center gap-3 lg:justify-start'>
                    <Link href='/'>
                        <Image
                            className='min-w-fit'
                            src={colorMode === 'light' ? logoLight : logoDark}
                            alt='logo'
                            width={123}
                            height={24}
                        />
                    </Link>

                    <div className='hidden gap-4 ml-10 lg:flex'>
                        <div className='inline-flex items-center py-5 text-sm hover:text-sup-500 hover:cursor-pointer'>
                            <span>Product</span> <ChevronDownIcon width={20} height={14} />
                        </div>
                        <div className='inline-flex items-center py-5 text-sm hover:text-sup-500 hover:cursor-pointer'>
                            <span>Developers</span> <ChevronUpIcon width={20} height={14} />
                        </div>
                        <Link href={'/'}
                            className='inline-flex items-center py-5 text-sm border-t-2 border-b-2 border-transparent text-scale-1200 hover:text-sup-500 hover:border-b-sup-500'>
                            Beta
                        </Link>
                        <Link href={'/'}
                            className='inline-flex items-center py-5 text-sm border-t-2 border-b-2 border-transparent text-scale-1200 hover:text-sup-500 hover:border-b-sup-500'>
                            Pricing
                        </Link>
                    </div>
                </div>
                <div className='items-center hidden gap-4 lg:flex'>
                    <Link href={'/'} className='px-4 py-2 text-xs font-bold rounded-md text-sup-50 bg-sup-500'>Start your project</Link>
                    <Link href={'/'} className='font-bold hover:text-sup-500'>Sign in</Link>
                </div>
            </nav>
        </header>
    )
}