import React from 'react'
import Image from 'next/image'
import SectionImage from '../../public/images/StoreSectionImage.png'
import { ArchiveBoxIcon, XMarkIcon, KeyIcon, CircleStackIcon, ChartBarIcon } from '@heroicons/react/24/solid'
import { DocumentCheckIcon } from '@heroicons/react/24/outline'

export const StoreSection: React.FC<{}> = () => {
    return (
        <section className='py-16 lg:py-24'>
            <div className='flex flex-col justify-between md:flex-row gap-9'>
                <div>
                    <div className='flex items-center gap-2'>
                        <div className='p-2 rounded-md bg-sup-900 dark:bg-white'>
                            <ArchiveBoxIcon width={21} height={21} className='fill-sup-100 dark:fill-sup-700' />
                        </div>
                        <p className='text-lg'>Storage</p>
                    </div>
                    <div >
                        <h1 className='text-5xl font-bold mt-7 mb-14'>Store and serve <br /> any type of digital content</h1>
                        <p className='max-w-md mb-5 text-sup-700 dark:text-sup-100'>An open source Object store service with unlimited scalability, for any file type.</p>
                        <p className='max-w-md mb-5 text-sup-700 dark:text-sup-100'>With custom policies and permissions that are familiar and easy to implement.</p>
                        <button className="relative items-center px-4 py-2 mt-16 ml-12 space-x-2 text-sm text-center text-white rounded cursor-pointer outline-0 bg-sup-500 " type="button">
                            <span className="truncate">Start your project</span>
                        </button>
                    </div>
                </div>
                <div>
                    <Image src={SectionImage} alt='image with functions' />
                </div>
            </div>
            <div className='flex flex-wrap justify-center gap-16 mt-16 lg:justify-start lg:mt-24'>
                <div className='max-w-xs'>
                    <div className='flex items-center gap-2'>
                        <div className='p-2 rounded-md bg-sup-900 dark:bg-white'>
                            <ArchiveBoxIcon width={21} height={21} className='fill-sup-100 dark:fill-sup-700' />
                        </div>
                        <XMarkIcon width={30} height={30} />
                        <div className='p-2 rounded-md bg-sup-900 dark:bg-white'>
                            <KeyIcon width={21} height={21} className='fill-sup-100 dark:fill-sup-700' />
                        </div>
                        <XMarkIcon width={30} height={30} />
                        <div className='p-2 rounded-md bg-sup-900 dark:bg-white'>
                            <CircleStackIcon width={21} height={21} className='fill-sup-100 dark:fill-sup-700' />
                        </div>
                    </div>
                    <p className='mt-4 text-lg'>Interoperable</p>
                    <p className='mt-5 text-lg'>
                        Integrates well with the rest of Supabase ecosystem, including Auth and Postgres.
                    </p>
                </div>
                <div className='max-w-xs'>
                    <ChartBarIcon width={21} height={21} className='my-2 fill-sup-900 dark:fill-sup-500' />
                    <p className='mt-4 text-lg'>Lightning fast</p>
                    <p className='mt-5 text-lg'>
                        Integrates well with the rest of Supabase ecosystem, including Auth and Postgres.
                    </p>
                </div>
                <div className='max-w-xs'>
                    <DocumentCheckIcon width={21} height={21} className='my-2 stroke-sup-900 dark:stroke-sup-500' />
                    <p className='mt-4 text-lg'>Interoperable</p>
                    <p className='mt-5 text-lg'>
                        Integrates well with the rest of Supabase ecosystem, including Auth and Postgres.
                    </p>
                </div>
            </div>
        </section>
    )
}