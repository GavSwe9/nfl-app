import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { constants } from '../../constants';

export function Legend() {
    useEffect(() => {
        buildLegend();
    })

    return (
        <div id="legend" className="h-10 w-5/6 mx-auto flex justify-evenly items-center"></div>
    )

    function buildLegend() {
        let keys = Object.keys(constants.PLAY_TYPE_COLORS);

        let legend = d3.select("#legend");

        legend.selectAll("div").remove();

        for (let i = 0; i < keys.length; i++) {
            let legendItem = legend.append("div")
                .attr("class", "w-28 flex justify-center items-center");

            legendItem.append("svg")
                .attr("height", 10)
                .attr("width", 30)
                .append("rect")
                .attr("height", 10)
                .attr("width", 30)
                .attr("rx", 5)
                .attr("cy", 5)
                .attr("cx", 5)
                .attr("fill", constants.PLAY_TYPE_COLORS[keys[i]]);

            legendItem.append("div")
                .attr("class", "ml-1")
                .text(constants.PLAY_TYPE_DISPLAY[keys[i]]);
        }
    }
}
