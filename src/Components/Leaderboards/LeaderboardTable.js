import React from 'react'
import { HeaderRow } from './HeaderRow';
import { LeaderboardTableRow } from './LeaderboardTableRow';

export function LeaderboardTable(props) {
    console.log(props.playerArray);

    if (props.loading) {
        return (
            <div className="w-full sm:min-h-screen lg:min-h-0 mx-auto mt-5 bg-white rounded-md border border-gray-300 flex-1 overflow-auto text-xs lg:text-sm font-mono font-light text-center">
                <div className="mt-5">
                    <img className="w-14 h-14 mx-auto animate-bounce" src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg" />
                </div>
                <div className="text-gray-700 text-sm uppercase font-light">
                    Loading
                </div>
            </div>
        )
    }
    else if (props.playerArray.length === 0) {
        return (
            <div className="w-full sm:min-h-screen lg:min-h-0 mx-auto mt-5 bg-white rounded-md border border-gray-300 flex-1 overflow-auto text-xs lg:text-sm font-mono font-light text-center">
                <div className="mt-5">
                    <img className="w-14 h-14 mx-auto animate-bounce" src="https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg" />
                </div>
                <div className="text-gray-700 text-sm uppercase font-light">
                    No Results for Selection
                </div>
            </div>
        )
    }
    else {
        const headerRow = <HeaderRow columns={Object.keys(props.playerArray[0])} type={props.type} />;

        return (
            <>
                <div className="mt-5 text-sm text-gray-700 uppercase text-center">{props.type} Leaders</div>
                <div className="max-w-full sm:min-h-screen lg:min-h-0 mx-auto bg-white rounded-md border flex-1 overflow-auto text-xs lg:text-sm font-mono font-light">
                    <table>
                        <thead>
                            {headerRow}
                        </thead>
                        <tbody className="divide-y-2 divide-gray-100">
                            {props.playerArray.map(playerStats => <LeaderboardTableRow key={playerStats.playerId} playerStats={playerStats} />)}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
