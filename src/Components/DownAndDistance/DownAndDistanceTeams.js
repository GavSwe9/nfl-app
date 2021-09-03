import React from 'react'
import { TeamDisplay } from './TeamDisplay'

export function DownAndDistanceTeams(props) {

    if (props.loading) {
        return (
            <div className="w-5/6 mx-auto bg-white rounded-md border border-gray-300">
                <div className="mt-5">
                    <img className="w-14 h-14 mx-auto animate-bounce" src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg" />
                </div>
                <div className="text-gray-700 text-sm uppercase font-light">
                    Loading
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="w-5/6 mx-auto bg-white rounded-md border border-gray-300 divide-y-2 divide-gray-100 flex-1 overflow-y-auto">
                {props.teamDataPercentages.map(teamData => <TeamDisplay teamData={teamData} situation={{
                    "season": props.season,
                    "down": props.down,
                    "distanceLowerBound": props.distanceLowerBound,
                    "distanceUpperBound": props.distanceUpperBound
                }} />)}
            </div>
        )
    }
}
