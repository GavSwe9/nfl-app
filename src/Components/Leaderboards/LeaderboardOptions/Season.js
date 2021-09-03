import React from 'react'

export function Season(props) {
    const seasonOptions = [2021, 2020, 2019, 2018, 2017, 2016, 2015];

    return (
        <div className="w-full mt-3 lg:mt-0 lg:w-1/4 px-5 text-center flex flex-col">
            <div className="border-b-2 border-gray-100 font-bold">
                Season
            </div>
            <div className="overflow-y-auto flex-1">
                {seasonOptions.map(s => (
                    <div key={s} className={`w-24 mx-auto m-1 border-2 rounded-md cursor-pointer hover:bg-gray-100 ${props.season === s ? "border-green-400" : "border-white"}`} onClick={() => props.setSeason(s)}>
                        {s}
                    </div>
                ))}
            </div>
        </div>
    )
}
