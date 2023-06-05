import React from 'react'

export default function ProjectLoading() {
    return (
        <div class="h-full shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex flex-col justify-center items-start">
                <div className='flex justify-between items-center w-full'>
                    <div class="w-60  bg-slate-700 rounded  h-2 "></div>
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                </div>
                <div class=" py-1 w-full">
                    <div class="grid">
                        <div class="h-2 my-1  bg-slate-700 rounded col-span-2"></div>
                        <div class="h-2  bg-slate-700 rounded col-span-1"></div>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <div className="w-20 rounded h-8 bg-slate-700"></div>
                    <div className="w-20 rounded h-8 bg-slate-700"></div>
                </div>
            </div>
        </div>
    )
}
