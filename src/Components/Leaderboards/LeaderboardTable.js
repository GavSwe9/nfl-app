import React from 'react'
import { PassingHeaderRow } from './PassingHeaderRow';
import { LeaderboardTableRow } from './LeaderboardTableRow';

export function LeaderboardTable(props) {
    console.log(props.playerArray);

    if (props.playerArray.length === 0) {
        return (
            <div className="w-full text-center">
                No Results for Selection
            </div>
        )
    }
    else {
        const headerRow = <PassingHeaderRow columns={Object.keys(props.playerArray[0])} type={props.type} />;

        return (
            <div className="max-w-full sm:min-h-screen lg:min-h-0 mx-auto mt-5 bg-white rounded-md border border-gray-300 flex-1 overflow-auto text-xs lg:text-sm font-mono font-light">
                <table>
                    <thead>
                        {headerRow}
                    </thead>
                    <tbody className="divide-y-2 divide-gray-100">
                        {props.playerArray.map(playerStats => <LeaderboardTableRow playerStats={playerStats} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}
