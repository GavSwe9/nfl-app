import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'
import { constants } from '../../constants';
import { teamLogoName } from '../../util';

export function TeamDisplay(props) {
    useEffect(() => {
        buildGraphic();
    }, [props.teamData]);

    return (
        <div id={`DnD-team-row-${props.teamData.team}`} className="DnD-team-row flex items-center">
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
                .on("mouseenter", (d) => showTooltip(d, keys[i], props.teamData[keys[i]].toFixed(1), "mouse"))
                .on("mouseout", () => hideTooltip())
                .on("touchstart", (d) => showTooltip(d, keys[i], props.teamData[keys[i]].toFixed(1), "touch"))
                .on("touchend", () => hideTooltip())
                .append("rect")
                .attr("x", `${percTotal}%`)
                .attr("width", `${props.teamData[keys[i]]}%`)
                .attr("height", "100%")
                .attr("fill", constants.PLAY_TYPE_COLORS[keys[i]])

            percTotal += props.teamData[keys[i]];
        }
    }

    function showTooltip(d, stat, value, source) {
        d3.select("#tooltip-content-container").remove();
        
        // Location of the tooltip depends on whether or not a user is tapping on a mobile device
        let verticalOffset = source === "mouse" ? 145 : 175;
        let horizontalOffset = source === "mouse" ? 0 : 70;

        // Set tooltip visibility and location
        let tooltip = d3.select("#tooltip")
            .style("visibility", "visible")
            .style("top", (d.pageY - verticalOffset) + "px")
            .style("left", (d.pageX - horizontalOffset) + "px")
            .append("div")
            .attr("id", "tooltip-content-container");

        // First Row - Team Logo
        tooltip
            .append("div")
            .append("img")
            .attr("src", `https://static.www.nfl.com/league/api/clubs/logos/${teamLogoName(props.teamData.team)}.svg`)
            .attr("class", "w-16 mx-auto")

        // Second Row - Situation
        tooltip
            .append("div")
            .attr("class", "font-light")
            .text(`${constants.DOWN_ORDINAL[props.situation.down]} & ${constants.STOCK_DISTANCE_DISPLAY[props.situation.distanceLowerBound.toString() + "-" + props.situation.distanceUpperBound.toString()]}`);

        // Thrid Row - Rate
        tooltip
            .append("div")
            .text(`${value}% ${constants.PLAY_TYPE_DISPLAY[stat]} Rate`);

        // Fade all team rows, then show the current team row normally
        fadeAllTeamRows();
        showTeamRow(props.teamData.team);
        
    }

    function hideTooltip() {
        d3.select("#tooltip")
            .style("visibility", "hidden");
        
        showAllTeamRows();
    }

    function fadeAllTeamRows() {
        d3.selectAll(".DnD-team-row")
            .style("opacity", .3)
    }

    function showAllTeamRows() {
        d3.selectAll(".DnD-team-row")
            .style("opacity", 1)
    }

    function showTeamRow(team) {
        d3.select(`#DnD-team-row-${team}`)
            .style("opacity", 1)
    }
}
