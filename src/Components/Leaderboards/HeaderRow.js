import React from 'react'
import { constants } from '../../constants'

export function HeaderRow(props) {
    // Look into making this one data-driven component.. Risk of overengineering with column offsets
    if (props.type === "passing") {
        return (
            <>
                <tr className="h-7 bg-gray-100 sticky top-0 z-20 text-gray-700">
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
                <tr className="bg-gray-100 sticky top-7 z-20 text-gray-700">
                    <th className="bg-gray-100 text-xs sticky left-0 z-30">Player</th>
                    {props.columns.slice(3).map(c => <th key={c} className="text-xs">{constants.STAT_DISPLAY[c].abbreviation}</th>)}
                </tr>
            </>
        )
    }
    if (props.type === "rushing") {
        return (
            <>
                <tr className="h-7 bg-gray-100 sticky top-0 z-20 text-gray-700">
                    <th className="bg-gray-100 sticky left-0 z-30"></th>
                    <th colSpan="7">
                        <div className="border-r-2 border-gray-300 font-extralight">
                            Rushing
                        </div>
                    </th>
                    <th colSpan="8">
                        <div className="border-r-2 border-gray-300 font-extralight">
                            Receiving
                        </div>
                    </th>
                    <th colSpan="2">
                        <div className="font-extralight">
                            Totals
                        </div>
                    </th>
                </tr>
                <tr className="bg-gray-100 sticky top-7 z-20 text-gray-700">
                    <th className="bg-gray-100 text-xs sticky left-0 z-30">Player</th>
                    {props.columns.slice(3).map(c => <th key={c} className="text-xs">{constants.STAT_DISPLAY[c].abbreviation}</th>)}
                </tr>
            </>
        )
    }
    if (props.type === "receiving") {
        return (
            <>
                <tr className="h-7 bg-gray-100 sticky top-0 z-20 text-gray-700">
                    <th className="bg-gray-100 sticky left-0 z-30"></th>
                    <th colSpan="10">
                        <div className="font-extralight">
                            Receiving
                        </div>
                    </th>
                    
                </tr>
                <tr className="bg-gray-100 sticky top-7 z-20 text-gray-700">
                    <th className="bg-gray-100 text-xs sticky left-0 z-30">Player</th>
                    {props.columns.slice(3).map(c => <th key={c} className="text-xs">{constants.STAT_DISPLAY[c].abbreviation}</th>)}
                </tr>
            </>
        )
    }
}
