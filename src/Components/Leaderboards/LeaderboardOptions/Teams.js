import React from 'react'
import { getTeamAllNamesArr, teamLogoName } from '../../../util';

export function Teams(props) {
    const teamOptions = [
        'ARI','ATL','BAL','BUF','CAR','CHI','CIN','CLE','DAL','DEN','DET','GB','HOU','IND','JAX','KC','LA','LAC','LV','MIA','MIN','NE','NO','NYG','NYJ','PHI','PIT','SEA','SF','TB','TEN','WAS'
    ];

    return (
        <div className="w-full mt-3 lg:mt-0 lg:w-1/4 px-5 text-center flex flex-col">
            <div className="border-b-2 border-gray-100 font-bold">
                Teams
            </div>

            <div className="flex-1 overflow-y-auto flex flex-wrap justify-center">
                {teamOptions.map(t => (
                    <div key={t} className={`w-10 m-1 border-2 rounded-md cursor-pointer hover:bg-gray-100 ${props.teams.includes(t) ? "border-green-400" : "border-white"}`} onClick={() => teamClick(t)}>
                        <img src={`https://static.www.nfl.com/league/api/clubs/logos/${t}.svg`} />
                    </div>
                ))}
            </div>

        </div>
    )

    function teamClick(teamClicked) {
        let teamNamesArr = getTeamAllNamesArr(teamClicked);

        const teamListStr = JSON.stringify(props.teams);
        let teamList = JSON.parse(teamListStr);

        for (let i = 0; i < teamNamesArr.length; i++) {
    
            if (teamList.includes(teamNamesArr[i])) {
                let index = teamList.indexOf(teamNamesArr[i]);
                teamList.splice(index, 1);
            }
            else {
                teamList.push(teamNamesArr[i]);
            }
    
            console.log(teamList);
            
        }

        props.setTeams(teamList);
    }
}
