import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import FilePreviewsImage from '../../../public/images/FilePreviews.png'
import ColumnView from '../../../public/images/column-view.webp'
import ListView from '../../../public/images/list-view.webp'
import MultiSelect from '../../../public/images/multi-column-selection.webp'
import Navigator from '../../../public/images/path-setting.webp'
import logo from '../../../public/images/supLogo.png'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Controller } from "swiper";
import { TabList } from './TabList'

export const DashboardSection: React.FC<{}> = () => {


    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);



    return (
        <div className='py-16 lg:py-24'>
            <h2 className="text-5xl dark:text-sup-100">Sleek dashboard for managing your media</h2>
            <p className='my-4 text-lg dark:text-sup-100'>A complete Object Explorer so that any of your team can use.</p>
            <p>Drag and drop uploading, moving objects, and multiple object selection. As easy as working on your desktop.</p>
            <div className='flex flex-col justify-between lg:flex-row gap-11 pt-11 lg:pt-16'>
                <div>


                    <div className='mt-4 relative pt-9 w-[760px] z-10'>
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
                            className="static transition-all mySwiper2"
                        >

                            <TabList />

                            <SwiperSlide className='overflow-hidden rounded-lg'>
                                <Image
                                    className='bg-sup-500'
                                    src={FilePreviewsImage}
                                    alt='File Previews'
                                />
                            </SwiperSlide>
                            <SwiperSlide className='overflow-hidden'>
                                <Image
                                    className='rounded-lg bg-sup-500'
                                    src={ColumnView}
                                    alt='Column View'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className='bg-sup-500'
                                    src={ListView}
                                    alt='List View'
                                />
                            </SwiperSlide>
                            <SwiperSlide >
                                <Image
                                    className='bg-sup-500'
                                    src={MultiSelect}
                                    alt='Multi Select'
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className='bg-sup-500'
                                    src={Navigator}
                                    alt='Navigator'
                                />
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
                <div className='flex flex-col max-w-xl'>
                    <Swiper
                        //@ts-ignore
                        onSwiper={setSecondSwiper}
                        noSwiping={true}
                        noSwipingClass='swiper-slide'
                        controller={{ control: firstSwiper }}
                        spaceBetween={0}
                        slidesPerView={1}
                        modules={[Controller]}
                        className="mySwiper w-80"
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
                    <div className='max-w-sm'>
                        <p className='mt-8 text-lg'>Check out our example app</p>
                        <div className='p-6 mt-4 rounded bg-sup-600'>
                            <p>Profile management example</p>
                            <p className='mt-1 text-xs'>Update a user account with public profile information, including uploading a profile image.</p>
                            <div className='flex items-center gap-2 mt-4'>
                                <p>Created by:</p>
                                <Image width={24} height={24} src={logo} alt='logo' />
                                <p>supabase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}