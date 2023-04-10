import React from 'react'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import { useSwiper } from "swiper/react";



export const TabList: React.FC<{}> = () => {

    let dashboardFunctions = ['File previews', 'Column view', 'List view', 'Multi select actions', 'Path navigator']


    const swiper = useSwiper();

    return (
        <Tab.Group >
            <Tab.List className="absolute z-50 flex justify-between gap-3 -top-3 ">
                {dashboardFunctions.map((item, index) =>
                    <Tab onClick={() => swiper.slideTo(index)} key={index} className={({ selected }) =>
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

            </Tab.List>
        </Tab.Group>
    )
}