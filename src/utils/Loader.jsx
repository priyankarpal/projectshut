import React from 'react'

const Loader = () => {
    return (
        <div className="flex w-[100vw] h-[100vh] items-center justify-center ">
            <div className="w-40 h-40 border-t-4 border-b-4 border-[#cb4ec5] rounded-full animate-spin"></div>
        </div>
    )
}

export default Loader