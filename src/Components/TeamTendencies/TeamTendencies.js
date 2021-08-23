import React, { useEffect, useState } from 'react'
import { constants } from '../../constants';
import { Options } from './Options';

export function TeamTendencies() {
    let [teamDataPercentages, setTeamPercentages] = useState([]);
    let [season, setSeason] = useState(2020);
    let [down, setDown] = useState(1);
    let [distanceLowerBound, setDistanceLowerBound] = useState(7);
    let [distanceUpperBound, setDistanceUpperBound] = useState(10);

    useEffect(() => {
        console.log({
            "season": season,
            "down": down,
            "distanceLowerBound": distanceLowerBound,
            "distanceUpperBound": distanceUpperBound
        });

        fetchData();
        async function fetchData() {
            let response = await fetch(constants.BASE_URL + "/downAndDistance", {
                method: "POST",
                body: JSON.stringify({
                    "season": season,
                    "down": down,
                    "distanceLowerBound": distanceLowerBound,
                    "distanceUpperBound": distanceUpperBound
                })
            });

            response = await response.json();
            console.log(response);
            setTeamPercentages(response);
        }
    }, [season, down, distanceLowerBound, distanceUpperBound]);

    return (
        <div className="text-center">
            <div className="my-4 text-2xl font-extralight">
                Run Pass Team Tendencies
            </div>
            <div className="h-20">
                <Options setSeason={setSeason} setDown={setDown} setDistanceLowerBound={setDistanceLowerBound} setDistanceUpperBound={setDistanceUpperBound} />
            </div>
            <div>
                {teamDataPercentages.length}
            </div>
        </div>
    )
}
