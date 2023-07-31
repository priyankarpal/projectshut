export default function ProjectLoading() {
  return (
    <div className="h-full shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-col justify-center items-start">
        <div className="flex justify-between items-center w-full">
          <div className="w-60  bg-slate-700 rounded  h-2 " />
          <div className="rounded-full bg-slate-700 h-10 w-10" />
        </div>
        <div className=" py-1 w-full">
          <div className="grid">
            <div className="h-2 my-1  bg-slate-700 rounded col-span-2" />
            <div className="h-2  bg-slate-700 rounded col-span-1" />
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="w-20 rounded h-8 bg-slate-700" />
          <div className="w-20 rounded h-8 bg-slate-700" />
        </div>
      </div>
    </div>
  );
}
