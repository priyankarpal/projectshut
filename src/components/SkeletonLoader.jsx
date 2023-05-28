import React from 'react';

export default function SkeletonLoader() {
  return (
    <>
      <div className="border border-slate-800 shadow rounded-md p-4  w-full  mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-2 py-1">
            <div className="flex justify-between items-center">
              <div className="h-2 bg-slate-700 rounded w-52"></div>
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-6 rounded-lg  w-10 bg-slate-700"></div>
              <div className="h-6  rounded-lg w-10 bg-slate-700"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
