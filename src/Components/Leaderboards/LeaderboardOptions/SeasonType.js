import React from 'react'

export function SeasonType(props) {
    const seasonTypesOptions = ["PRE", "REG", "POST"];

    const seasonTypeDisplay = {
        "PRE": "Preseason",
        "REG": "Regular Season",
        "POST": "Postseason"
    }

    return (
        <div className="w-full mt-3 lg:mt-0 lg:w-1/4 px-5 text-center">
            <div className="border-b-2 border-gray-100 font-bold">
                Season Type
            </div>

            <div>
                {seasonTypesOptions.map(st => (
                    <div key={st} className={`w-40 mx-auto m-1 border-2 rounded-md cursor-pointer hover:bg-gray-100 ${props.seasonType.includes(st) ? "border-green-400" : "border-white"}`} onClick={() => seasonTypeClick(st)}>
                        {seasonTypeDisplay[st]}
                    </div>
                ))}
            </div>

        </div>
    )

    function seasonTypeClick(seasonTypeClicked) {
        const seasonTypeListStr = JSON.stringify(props.seasonType);
        let seasonTypeList = JSON.parse(seasonTypeListStr);

        if (seasonTypeList.includes(seasonTypeClicked)) {
            let index = seasonTypeList.indexOf(seasonTypeClicked);
            seasonTypeList.splice(index, 1);
        }
        else {
            seasonTypeList.push(seasonTypeClicked);
        }

        props.setSeasonType(seasonTypeList);
    }

}