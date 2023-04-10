import React from 'react'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import { ClipboardIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline'

export const AuthSection: React.FC<{}> = () => {
    const AuthFunctions = ['Public access to a bucket', 'Public access to a folder', 'Authenticated access to a bucket', 'Individual access to a file']
    return (
        <section className='grid grid-cols-12 py-16 lg:gap-16 lg:py-24'>
            <div className='col-span-12 pb-8 lg:col-span-5 xl:col-span-5'>
                <h3 className='text-4xl'>Integrates natively with Supabase Auth</h3>
                <div className='mt-5'>
                    <p>Using Postgres Row Level Security to create Object access rules.</p>
                    <p className='mt-10 max-w-[590px]'>Storage Authorization is built around Postgres so that you can use any combination of SQL, Postgres functions, and even your own metadata to write policies.</p>
                </div>
                <button className='flex items-center gap-2 px-3 py-2 mt-8 rounded bg-sup-700/40 '>
                    <ArrowUpRightIcon height={18} width={18} />
                    Explore documentation
                </button>
            </div>
            <div className='col-span-12 lg:col-span-7 xl:col-span-6 xl:col-start-7 '>
                <Tab.Group >
                    <Tab.List className="flex flex-wrap w-full gap-2">
                        {AuthFunctions.map((item, index) =>
                            <Tab key={index} className={({ selected }) =>
                                classNames(
                                    'w-fit px-2 outline-none border-none rounded py-1 text-xs leading-5',
                                    selected
                                        ? 'bg-sup-700 text-white border-none'
                                        : 'dark:text-sup-700 hover:bg-sup-900/50 hover:dark:bg-white/[0.12] hover:text-sup-100 hover:dark:text-white'
                                )
                            }
                            >
                                {item}
                            </Tab>)}
                        <Tab.Panels className='w-full'>
                            <Tab.Panel className='relative px-5 py-8 overflow-hidden rounded-lg bg-sup-600 dark:bg-sup-950'>
                                <button
                                    className='absolute px-2 rounded right-2 top-2 hover:bg-sup-700/20'
                                    onClick={() => { navigator.clipboard.writeText('Code') }}
                                >
                                    <ClipboardIcon width={21} height={21} className='my-2 stroke-sup-500' />
                                </button>
                                <pre className="w-full rounded-lg">
                                    <code className="language-sql">
                                        <span className='text-blue-400'>create</span><span className='text-white'> policy "Public Access"<br />
                                        </span><span></span><span className='text-blue-400'>on</span><span className='text-white'> storage.objects </span><span className='text-blue-400'>for all</span><span><br />
                                        </span><span></span><span className='text-blue-400'>using</span><span className='text-white'> ( bucket_id = <span className='text-green-600'>'avatars'</span> ); </span><br />
                                    </code>
                                </pre>
                            </Tab.Panel>
                            <Tab.Panel className='relative px-5 py-8 overflow-hidden rounded-lg bg-sup-600 dark:bg-sup-950'>
                                <button
                                    className='absolute px-2 rounded right-2 top-2 hover:bg-sup-700/20'
                                    onClick={() => { navigator.clipboard.writeText('Code') }}
                                >
                                    <ClipboardIcon width={21} height={21} className='my-2 stroke-sup-500' />
                                </button>
                                <pre className="w-full rounded-lg">
                                    <code className="language-sql">
                                        <span className='text-white'>slide 2</span>
                                    </code>
                                </pre>
                            </Tab.Panel>
                            <Tab.Panel className='relative px-5 py-8 overflow-hidden rounded-lg bg-sup-600 dark:bg-sup-950'>
                                <button
                                    className='absolute px-2 rounded right-2 top-2 hover:bg-sup-700/20'
                                    onClick={() => { navigator.clipboard.writeText('Code') }}
                                >
                                    <ClipboardIcon width={21} height={21} className='my-2 stroke-sup-500' />
                                </button>
                                <pre className="w-full rounded-lg">
                                    <code className="language-sql">
                                        <span className='text-white'>slide 3</span>
                                    </code>
                                </pre>
                            </Tab.Panel>
                            <Tab.Panel className='relative px-5 py-8 overflow-hidden rounded-lg bg-sup-600 dark:bg-sup-950'>
                                <button
                                    className='absolute px-2 rounded right-2 top-2 hover:bg-sup-700/20'
                                    onClick={() => { navigator.clipboard.writeText('Code') }}
                                >
                                    <ClipboardIcon width={21} height={21} className='my-2 stroke-sup-500' />
                                </button>
                                <pre className="w-full rounded-lg">
                                    <code className="language-sql">
                                        <span className='text-white'>slide 4</span>
                                    </code>
                                </pre>
                            </Tab.Panel>

                        </Tab.Panels>

                    </Tab.List>
                </Tab.Group>
            </div>
        </section >
    )
}