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
            <div className="max-w-5/6 mx-auto my-5 bg-white rounded-md border border-gray-300 flex-1 overflow-y-auto font-mono font-light">
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
