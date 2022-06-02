import React, { useEffect, useState } from 'react'
import { constants } from '../../constants';
import { LeaderboardOptions } from './LeaderboardOptions';
import { LeaderboardTable } from './LeaderboardTable';

export function Leaderboard(props) {
    let [loading, setLoading] = useState(true);

    let [season, setSeason] = useState(2021);
    let [seasonType, setSeasonType] = useState(["REG"]);
    let [weeks, setWeeks] = useState([]);
    let [teams, setTeams] = useState([]);
    let [playerArray, setPlayerArray] = useState([]);

    useEffect(() => {
        if (seasonType.length === 0) {
            setSeasonType(['REG']); 
            return;
        }

        setLoading(true);

        let requestBody = {
            season,
            seasonType
        };

        if (weeks.length > 0) requestBody["weeks"] = weeks;
        if (teams.length > 0) requestBody["teams"] = teams;

        fetchData();
        async function fetchData() {
            let response = await fetch(`${constants.BASE_URL}/${props.endpoint}Board`, {
                method: "POST",
                body: JSON.stringify(requestBody)
            });

            response = await response.json();
            setPlayerArray(response);
            setLoading(false);
        }
    }, [season, seasonType, weeks, teams, props.endpoint])

    return (
        <>
            <div className="w-11/12 md:5/6 lg:w-2/3 mx-auto flex-none">
                <LeaderboardOptions season={season} setSeason={setSeason} seasonType={seasonType} setSeasonType={setSeasonType} weeks={weeks} setWeeks={setWeeks} teams={teams} setTeams={setTeams} />
            </div>
            <div className="w-11/12 md:5/6 lg:w-2/3 mx-auto flex-1 overflow-y-auto flex flex-col">
                <LeaderboardTable loading={loading} playerArray={playerArray} type={props.endpoint} />
            </div>
        </>
    )
}
