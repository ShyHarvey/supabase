import Link from 'next/link'
import React from 'react'

export const StartProjectSection: React.FC<{}> = () => {
    return (
        <div className="grid items-center grid-cols-12 gap-4 pt-16 text-center lg:pt-24">
            <div className="col-span-12">
                <h2 className="text-3xl">
                    <span className="text-sup-500">Build in a weekend,</span><span className="text-scale-1200 dark:text-white"> scale to millions</span>
                </h2>
            </div>
            <div className="col-span-12 mt-4">
                <Link href="https://app.supabase.com/">
                    <button className="relative items-center px-4 py-2 space-x-2 text-sm text-center text-white rounded cursor-pointer outline-0 bg-sup-500 " type="button">
                        <span className="truncate">Start your project</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}