import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import FilePreviewsImage from '../../../public/images/FilePreviews.png'
import ColumnView from '../../../public/images/column-view.webp'
import ListView from '../../../public/images/list-view.webp'
import MultiSelect from '../../../public/images/multi-column-selection.webp'
import Navigator from '../../../public/images/path-setting.webp'
import logo from '../../../public/images/supLogo.png'
import VercelButton from '../../../public/images/VercelButton.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper";
import { TabList } from './TabList'
import Link from 'next/link'

export const DashboardSection: React.FC<{}> = () => {


    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);



    return (
        <div className='py-16 lg:py-24'>
            <h2 className="text-5xl dark:text-sup-100">Sleek dashboard for managing your media</h2>
            <p className='my-4 text-lg dark:text-sup-100'>A complete Object Explorer so that any of your team can use.</p>
            <p>Drag and drop uploading, moving objects, and multiple object selection. As easy as working on your desktop.</p>
            <div className='flex flex-col justify-between lg:flex-row gap-11 pt-11 lg:pt-16'>

                <div className='relative z-10 w-full mt-4 lg:w-1/2 pt-9'>
                    <Swiper
                        spaceBetween={0}
                        noSwiping={true}
                        noSwipingClass='swiper-slide'
                        navigation={false}
                        modules={[Controller]}
                        // всё сделал по пример, можно setState завернуть в функию (swiper: Swiper) => void,
                        // тогда тоже не будет ругаться, но по сути ничего не изменится, поэтому написал просто ts-ignore
                        //@ts-ignore
                        onSwiper={setFirstSwiper}
                        controller={{ control: secondSwiper }}
                        className="static mySwiper2"
                    >

                        <TabList />

                        <SwiperSlide className='overflow-hidden rounded-lg'>
                            <Image
                                className='bg-sup-500'
                                src={FilePreviewsImage}
                                alt='File Previews'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='overflow-hidden rounded-lg'>
                            <Image
                                className='rounded-lg bg-sup-500'
                                src={ColumnView}
                                alt='Column View'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='overflow-hidden rounded-lg'>
                            <Image
                                className='bg-sup-500'
                                src={ListView}
                                alt='List View'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='overflow-hidden rounded-lg'>
                            <Image
                                className='bg-sup-500'
                                src={MultiSelect}
                                alt='Multi Select'
                            />
                        </SwiperSlide>
                        <SwiperSlide className='overflow-hidden rounded-lg'>
                            <Image
                                className='bg-sup-500'
                                src={Navigator}
                                alt='Navigator'
                            />
                        </SwiperSlide>
                    </Swiper>

                </div>

                <div className='flex flex-col items-center justify-center w-full lg:w-1/2'>
                    <Swiper
                        //@ts-ignore
                        onSwiper={setSecondSwiper}
                        noSwiping={true}
                        noSwipingClass='swiper-slide'
                        controller={{ control: firstSwiper }}
                        spaceBetween={0}
                        slidesPerView={1}
                        modules={[Controller]}
                        className="w-72 md:w-96 mySwiper"
                    >

                        <SwiperSlide>
                            <div className='max-w-sm'>
                                <p className='text-lg'>File preview</p>
                                <p className='mt-4'>Preview any media type, including video and audio.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='max-w-sm'>
                                <p className='text-lg'>Column view</p>
                                <p className='mt-4'>Slick Miller-column navigation for rapid folder exploration.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='max-w-sm'>
                                <p className='text-lg'>List view</p>
                                <p className='mt-4'>List View to find detailed File metadata at a glance.</p>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='max-w-sm'>
                                <p className='text-lg'>Multi select actions</p>
                                <p className='mt-4'>Multi-import and multi-export. Select multiple files from multiple folders.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='max-w-sm'>
                                <p className='text-lg'>Path navigator</p>
                                <p className='mt-4'>If you know the exact path of your file, type it in and navigate directly.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className='max-w-sm mt-8'>
                        <p className='text-lg '>Check out our example app</p>
                        <div className='p-6 mt-4 rounded bg-sup-100 dark:bg-sup-600'>
                            <p>Profile management example</p>
                            <p className='mt-1 text-xs'>Update a user account with public profile information, including uploading a profile image.</p>
                            <div className='flex items-center gap-2 mt-4'>
                                <p>Created by:</p>
                                <Image width={24} height={24} src={logo} alt='logo' />
                                <p>supabase</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full max-w-sm mt-5'>
                        <a className="flex flex-row items-center mt-5 text-sm hover:text-sup-500"
                            target="_blank"
                            href="https://github.com/supabase/supabase/tree/master/examples/user-management/nextjs-ts-user-management">
                            <span>nextjs-ts-user-management</span>
                            <span className="inline-block ml-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></span></a>
                        <Link target="_blank"
                            href="https://vercel.com/" >
                            <Image className='mt-3' src={VercelButton} alt="vercel button" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}