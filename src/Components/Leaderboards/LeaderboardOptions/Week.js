import React from 'react'

export function Weeks(props) {
    const weekOptions = [];
    let lastWeek = props.season >= 2021 ? 18 : 17;
    
    for (let i = 1; i <= lastWeek; i++) {
        weekOptions.push(i);
    }

    return (
        <div className="w-full mt-3 lg:mt-0 lg:w-1/4 px-5 text-center flex flex-col">
            <div className="border-b-2 border-gray-100 font-bold">
                Weeks
            </div>

            <div className="flex-1 overflow-y-auto flex flex-wrap justify-center">
                {weekOptions.map(w => (
                    <div key={w} className={`w-12 m-1 border-2 rounded-md cursor-pointer hover:bg-gray-100 ${props.weeks.includes(w) ? "border-green-400" : "border-white"}`} onClick={() => weekClick(w)}>
                        {w}
                    </div>
                ))}
            </div>

        </div>
    )

    function weekClick(weekClicked) {
        const weekListStr = JSON.stringify(props.weeks);
        let weekList = JSON.parse(weekListStr);

        if (weekList.includes(weekClicked)) {
            let index = weekList.indexOf(weekClicked);
            weekList.splice(index, 1);
        }
        else {
            weekList.push(weekClicked);
        }

        props.setWeeks(weekList);
    }
}