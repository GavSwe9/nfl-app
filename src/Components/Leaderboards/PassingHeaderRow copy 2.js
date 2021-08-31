import React from 'react'
import { constants } from '../../constants'

export function PassingHeaderRow(props) {
    return (
        <>
            <tr className="h-7 bg-gray-100 sticky top-0 z-20">
                <th className="bg-gray-100 sticky left-0 z-30"></th>
                <th colSpan="16">
                    <div className="border-r-2 border-gray-300 font-extralight">
                        Passing
                    </div>
                </th>
                <th colSpan="5">
                    <div className="border-r-2 border-gray-300 font-extralight">
                        Rushing
                    </div>
                </th>
                <th></th>
            </tr>
            <tr className="h-10 bg-gray-100 sticky top-7 z-20">
                <th className="bg-gray-100 sticky left-0 z-30">Player</th>
                {props.columns.slice(3).map(c => <th>{constants.STAT_DISPLAY[c].abbreviation}</th>)}
            </tr>
        </>
    )
}
