import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'
import { constants } from '../../constants';

export function TeamDisplay(props) {
    let [teamAbv, setTeamAbv] = useState(props.teamData.team);

    useEffect(() => {
        buildGraphic();

        switch (props.teamData.team) {
            case "OAK":
                setTeamAbv("LV");
                break;
            case "STL":
                setTeamAbv("LA");
                break;
            case "JAC":
                setTeamAbv("JAX");
                break;
            case "SD":
                setTeamAbv("LAC");
                break;
        
            default:
                break;
        }
    }, [props.teamData]);

    function teamLogoName(team){
        switch (props.teamData.team) {
            case "OAK":
                return "LV";
            case "STL":
                return "LA";
            case "JAC":
                return "JAX";
            case "SD":
                return "LAC";
        
            default:
                return team;
        }
    }
    return (
        <div className="flex items-center">
            <div className="w-12 h-12 p-1">
                <img src={`https://static.www.nfl.com/league/api/clubs/logos/${teamLogoName(props.teamData.team)}.svg`} />
            </div>
            <div className="w-14">
                {props.teamData.team}
            </div>
            <div className="flex-1 mx-5 rounded-lg overflow-hidden">
                <svg id={`team-graphic-${props.teamData.team}`} className="h-4 w-full">

                </svg>
            </div>
        </div>
    )

    function buildGraphic() {
        let svg = d3.select(`#team-graphic-${props.teamData.team}`);

        svg.selectAll("g").remove();

        let percTotal = 0;
        let keys = Object.keys(props.teamData);
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] === "team" || keys[i] === "total" || props.teamData[keys[i]] === 0) continue;

            svg
                .append("g")
                .append("rect")
                .attr("x", `${percTotal}%`)
                .attr("width", `${props.teamData[keys[i]]*100}%`)
                .attr("height", "100%")
                .attr("fill", constants.PLAY_TYPE_COLORS[keys[i]]);

            percTotal += props.teamData[keys[i]]*100;
        }
        
    }
}
