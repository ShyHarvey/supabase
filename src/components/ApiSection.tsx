import React from 'react'
import { WifiIcon } from '@heroicons/react/24/solid'
import { ClipboardIcon } from '@heroicons/react/24/outline'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'

export const ApiSection: React.FC<{}> = () => {

    const ApiFunctions = ['Upload a file', 'Download a file', 'List files', 'Move and rename files', 'Delete files']

    return (
        <section className='grid grid-cols-12 py-16 lg:gap-16 lg:py-24'>
            <div className='col-span-12 pb-8 lg:col-span-5 xl:col-span-5'>
                <h3 className='text-4xl'>Simple and convenient APIs</h3>
                <div className='mt-4'>
                    <p>Built from the ground-up for interoperable authentication.</p>
                    <p className='mt-5'>Fast and easy to implement using our powerful library clients. Asset optimization and image transformation coming soon!</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-16 mt-20 md:justify-between md:flex-row'>
                    <div className='max-w-xs'>
                        <WifiIcon width={21} height={21} className='my-2 fill-sup-900 dark:fill-sup-500' />
                        <p className='mt-4 text-lg'>CDN integration</p>
                        <p className='mt-5 text-lg'>
                            Serve from the edge to reduce latency.
                        </p>
                        <p className='px-2 mt-5 text-blue-500 rounded-full bg-blue-400/40 dark:text-blue-300 dark:bg-blue-300/20 w-fit'>Coming soon</p>
                    </div>
                    <div className='max-w-xs'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="my-2 fill-sup-900 dark:fill-sup-500"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
                        <p className='mt-4 text-lg'>Auto transformation & optimisation</p>
                        <p className='mt-5 text-lg'>
                            Resize and compress your media before you serve it.
                        </p>
                        <p className='px-2 mt-5 text-blue-500 rounded-full bg-blue-400/40 dark:text-blue-300 dark:bg-blue-300/20 w-fit'>Coming soon</p>
                    </div>
                </div>
            </div>
            <div className='col-span-12 lg:col-span-7 xl:col-span-6 xl:col-start-7'>
                <Tab.Group >
                    <Tab.List className="flex flex-wrap justify-between w-full gap-3">
                        {ApiFunctions.map((item, index) =>
                            <Tab key={index} className={({ selected }) =>
                                classNames(
                                    'w-fit px-3 outline-none border-none rounded py-2 text-xs leading-5',
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
                                    <code className="language-js">
                                        <span>
                                        </span><span></span><span className='text-green-700'>// Upload an image to the "avatars" bucket</span><span><br />
                                        </span><span></span><span className='text-blue-400'>const</span> <span className='text-white'> spaceCat = event.target.files[</span><span className='text-white'>0]</span><span><br />
                                        </span><span></span><span className='text-blue-400'>const</span> <span className='text-white'> {'data, error'} = </span><span className='text-blue-400'>await</span><span className='text-white'> supabase<br />
                                        </span> <span className='text-white'> .storage</span><br />
                                        <span className='text-white'>  .from(</span> <span className='text-green-600'>'avatars'</span> <span className='text-white'>)<br />
                                        </span><span className='text-white'>  .upload(</span><span className='text-green-600'>'space-cat.png'</span> <span className='text-white'>, spaceCat)<br />
                                        </span>
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
                                    <code className="language-js">
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
                                    <code className="language-js">
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
                                    <code className="language-js">
                                        <span className='text-white'>slide 4</span>
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
                                    <code className="language-js">
                                        <span className='text-white'>slide 5</span>
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