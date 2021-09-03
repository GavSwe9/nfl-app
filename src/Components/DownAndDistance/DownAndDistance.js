import React, { useEffect, useState } from 'react'
import { constants } from '../../constants';
import { DownAndDistanceTeams } from './DownAndDistanceTeams';
import { Legend } from './Legend';
import { Options } from './Options';
import { TeamDisplay } from './TeamDisplay';

export function DownAndDistance() {
    let [loading, setLoading] = useState(false);

    let [teamDataPercentages, setTeamPercentages] = useState([]);
    let [season, setSeason] = useState(2020);
    let [down, setDown] = useState(1);
    let [distanceLowerBound, setDistanceLowerBound] = useState(7);
    let [distanceUpperBound, setDistanceUpperBound] = useState(10);

    useEffect(() => {
        setLoading(true);
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
            setTeamPercentages(response);
            setLoading(false);
        }
    }, [season, down, distanceLowerBound, distanceUpperBound]);

    return (
        <div className="h-full text-center select-none flex flex-col">
            <div className="my-4 text-2xl font-extralight">
                Down & Distance Team Tendencies
            </div>
            <div className="h-20">
                <Options setSeason={setSeason} setDown={setDown} setDistanceLowerBound={setDistanceLowerBound} setDistanceUpperBound={setDistanceUpperBound} />
            </div>
            <div>
                <Legend />
            </div>
            <div id="tooltip" className="p-2 bg-white border border-gray-300 shadow-lg rounded-md invisible absolute z-10"></div>
            <DownAndDistanceTeams loading={loading} teamDataPercentages={teamDataPercentages} season={season} down={down} distanceLowerBound={distanceLowerBound} distanceUpperBound={distanceUpperBound} />
        </div>
    )
}
