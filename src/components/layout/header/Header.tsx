import React, { Fragment } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logoLight from '../../../../public/images/logoLight.webp'
import logoDark from '../../../../public/images/logoDark.webp'
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { Popover, Transition } from '@headlessui/react'

export const Header: React.FC<{ colorMode: string }> = ({ colorMode }) => {


    return (
        <header className='sticky top-0 z-50 flex items-center justify-between h-16 bg-white dark:bg-sup-900'>
            <nav className='flex justify-between h-16 mx-auto lg:container lg:px-16 xl:px-20'>
                <div className='absolute left-4 top-4 lg:hidden'>
                    <Popover className="relative">
                        <Popover.Button
                            className={'outline-none border-none hover:text-sup-500 hover:cursor-pointer'}
                        >
                            <Bars3Icon width={30} height={30} className='stroke-2 fill-sup-700 hover:fill-sup-500' />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-0"
                            enterTo="opacity-100 translate-y-1"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-1"
                            leaveTo="opacity-0 translate-y-0"
                        >
                            <Popover.Panel className="absolute z-10 bg-white rounded-lg p-7 dark:bg-sup-900 top-11 ">
                                <div className="flex flex-col gap-3">
                                    <p className='text-xl animate-bounce hover:animate-spin'>Empty menu</p>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
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

                        <Popover className="relative inline-flex items-center">
                            <Popover.Button
                                className={'inline-flex items-center outline-none border-none py-5 text-sm hover:text-sup-500 hover:cursor-pointer'}
                            >
                                Product <ChevronDownIcon width={20} height={14} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-0"
                                enterTo="opacity-100 translate-y-1"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-1"
                                leaveTo="opacity-0 translate-y-0"
                            >
                                <Popover.Panel className="absolute z-10 bg-white rounded-lg p-7 dark:bg-sup-900 top-11 ">
                                    <div className="flex flex-col gap-3">
                                        <Link className='hover:text-sup-500' href="/">Analytics</Link>
                                        <Link className='hover:text-sup-500' href="/">Engagement</Link>
                                        <Link className='hover:text-sup-500' href="/">Security</Link>
                                        <Link className='hover:text-sup-500' href="/">Integrations</Link>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <Popover className="relative inline-flex items-center">
                            <Popover.Button
                                className={'inline-flex items-center outline-none border-none py-5 text-sm hover:text-sup-500 hover:cursor-pointer'}
                            >
                                Developers <ChevronDownIcon width={20} height={14} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-0"
                                enterTo="opacity-100 translate-y-1"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-1"
                                leaveTo="opacity-0 translate-y-0"
                            >
                                <Popover.Panel className="absolute z-10 bg-white rounded-lg p-7 dark:bg-sup-900 top-11 ">
                                    <div className="flex flex-col gap-3">
                                        <Link className='hover:text-sup-500' href="/">Analytics</Link>
                                        <Link className='hover:text-sup-500' href="/">Engagement</Link>
                                        <Link className='hover:text-sup-500' href="/">Security</Link>
                                        <Link className='hover:text-sup-500' href="/">Integrations</Link>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>
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