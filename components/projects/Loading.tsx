export const Loading = {
  Profile: () => (
    <div className="animate-pulse w-full h-max grid place-items-center md:w-[50%] md:h-5/6 lg:max-w-[35%] shadow-xl rounded-md mb-4 md:mb-0 md:sticky md:top-28 px-8  border border-gray-800 mt-1">
      <div className="flex w-full items-center justify-between my-4">
        <div className="bg-slate-700 h-7 w-7 rounded-full" />
        <div className="bg-slate-700 h-7 w-7 rounded-full" />
      </div>
      <div className="mb-3 my-10 w-36 h-36 bg-slate-700 rounded-full" />
      <div className="flex justify-center items-center my-3 h-2 rounded w-32 bg-slate-700 " />
      <div className="justify-center items-center rounded my-7 h-2 w-28 bg-slate-700" />
      <div className="flex flex-row flex-wrap justify-center items-center xsm:mx-auto my-5">
        <div className="mx-5 xsm:mx-2 inline-flex items-center rounded-full bg-slate-700 h-6 w-6" />
        <div className="mx-5 xsm:mx-2 inline-flex items-center rounded-full bg-slate-700 h-6 w-6" />
        <div className="mx-5 xsm:mx-2 inline-flex items-center rounded-full bg-slate-700 h-6 w-6" />
      </div>
    </div>
  ),

  Project: () => (
    <div className="animate-pulse my-1 p-4 mb-4 border rounded-lg border-gray-800 min-h-[6rem]">
      <div className="border-b border-gray-600 p-4 relative">
        <div className="basis-full line-clamp-1 h-5 w-44 bg-slate-700 rounded-full" />
        <div className="grid pr-2 my-4 max-xsm:mx-4">
          <div className="h-2 my-1  bg-slate-700 rounded col-span-2" />
          <div className="h-2  bg-slate-700 rounded col-span-1" />
        </div>
        <div className="absolute -top-0.5 -right-0.5 inline-flex h-6 w-6 bg-slate-700 items-center rounded-md" />
      </div>
      {/* Tech Stack section */}
      <div className="flex flex-wrap flex-row items-center m-4 gap-2">
        {[...Array(3)].map((i) => (
          <div
            key={i}
            className="text-xs inline-block py-1 px-2 rounded mr-2 bg-slate-700 h-4 w-20"
          />
        ))}
      </div>
    </div>
  ),
};
