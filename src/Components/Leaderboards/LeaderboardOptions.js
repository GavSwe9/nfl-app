import React, { useState } from 'react'
import { Season } from './LeaderboardOptions/Season'
import { SeasonType } from './LeaderboardOptions/SeasonType'
import { Teams } from './LeaderboardOptions/Teams'
import { Weeks } from './LeaderboardOptions/Week'

export function LeaderboardOptions(props){
    let [expandOptions, setExpandOptions] = useState(false);

    return (
        <div className={`${expandOptions ? "max-h-screen" : "max-h-8"} lg:max-h-screen max-w-full h-96 lg:h-40 mt-5 pt-1 mx-auto bg-white rounded-md shadow-md overflow-hidden transition-maxHeight duration-300 flex flex-col`}>
            <div className="text-center pb-2 font-light uppercase flex border-b border-gray-300 justify-between lg:hidden">
                <div className="w-12"></div>
                <div>
                    Filters
                </div>
                <div className="w-12" onClick={() => setExpandOptions(!expandOptions)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto flex flex-col lg:flex-row">
                <SeasonType seasonType={props.seasonType} setSeasonType={props.setSeasonType} />
                <Season season={props.season} setSeason={props.setSeason} />
                <Weeks weeks={props.weeks} setWeeks={props.setWeeks} season={props.season} />
                <Teams teams={props.teams} setTeams={props.setTeams} season={props.season} />
            </div>
        </div>
    )
}
