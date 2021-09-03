import React from 'react'
import { teamLogoName } from '../../util';

export function LeaderboardTableRow(props) {
    const fields = Object.keys(props.playerStats);

    return (
        <tr>
            <th className="bg-white sticky left-0 z-10 font-normal whitespace-nowrap">
                <div className="px-1 lg:px-2 flex justify-start items-center border-r border-gray-100">
                    <div className="w-5 h-5 lg:w-10 lg:h-10">
                        <img src={`https://static.www.nfl.com/league/api/clubs/logos/${teamLogoName(props.playerStats.team)}.svg`} />
                    </div>
                    <div className="pl-1 lg:pl-2">
                        {props.playerStats.playerName.replace(".",". ")}
                    </div>
                </div>                
            </th>
            {fields.slice(3).map(stat => (
                <td key={stat} className="px-5 text-right">
                    {props.playerStats[stat]}
                </td>
            ))}
        </tr>
    )
}
