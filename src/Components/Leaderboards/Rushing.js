import React, { useEffect, useState } from 'react'
import { constants } from '../../constants';

export function Rushing() {
    let [season, setSeason] = useState(2020);
    let [seasonType, setSeasonType] = useState(["REG"]);
    let [weeks, setWeeks] = useState([]);
    let [teams, setTeams] = useState([]);

    useEffect(() => {
        let requestBody = {
            season,
            seasonType
        };

        if (weeks.length > 0) requestBody["weeks"] = weeks;
        if (teams.length > 0) requestBody["teams"] = teams;

        fetchData();
        async function fetchData() {
            let response = await fetch(constants.BASE_URL + "/rushingBoard", {
                method: "POST",
                body: JSON.stringify(requestBody)
            });

            response = await response.json();
            console.log(response);
        }
    }, [season, seasonType, weeks, teams])

    return (
        <div></div>
    )
}