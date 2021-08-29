import React, { useEffect, useState } from 'react'

export function Options(props) {
    let [viewMenu, setViewMenu] = useState(false);

    useEffect(() => {
        seasonClick(2020);
        downClick(1);
        distanceClick(7,10);
    }, []);

    function seasonClick(season) {
        let items = document.getElementsByClassName("season");

        for (let i = 0; i < items.length; i++) {
            items[i].style.removeProperty("border");
        }

        document.getElementById(`season-${season}`).style.border = "2px solid #10B981";

        props.setSeason(season);
    }

    function downClick(down) {
        let items = document.getElementsByClassName("down");

        for (let i = 0; i < items.length; i++) {
            items[i].style.removeProperty("border");
        }

        document.getElementById(`down-${down}`).style.border = "2px solid #10B981";

        props.setDown(down);
    }

    function distanceClick(lower, upper) {
        let items = document.getElementsByClassName("distance");

        for (let i = 0; i < items.length; i++) {
            items[i].style.removeProperty("border");
            // items[i].style.removeProperty("border-bottom");
        }

        document.getElementById(`distance-${lower}-${upper}`).style.border = "2px solid #10B981";
        // document.getElementById(`distance-${lower}-${upper}`).style.borderBottom = "2px solid #10B981";

        props.setDistanceLowerBound(lower);
        props.setDistanceUpperBound(upper);
    }

    return (
        <div className="relative inline-block text-left">
            <div>
                <button type="button" className="inline-flex justify-center w-32 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" onClick={() => setViewMenu(!viewMenu)}>
                    Options
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 z-10 ${viewMenu ? "visible" : "hidden"}`}>
                <div className="py-1">
                    <div className="text-center font-semibold text-gray-700 block px-4 py-2">
                        Season
                    </div>
                    <div className="flex flex-wrap justify-evenly">
                        <div id="season-2015" className="season text-gray-700 block px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-2 border-white" onClick={() => seasonClick(2015)}>2015</div>
                        <div id="season-2016" className="season text-gray-700 block px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-2 border-white" onClick={() => seasonClick(2016)}>2016</div>
                        <div id="season-2017" className="season text-gray-700 block px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-2 border-white" onClick={() => seasonClick(2017)}>2017</div>
                        <div id="season-2018" className="season text-gray-700 block px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-2 border-white" onClick={() => seasonClick(2018)}>2018</div>
                        <div id="season-2019" className="season text-gray-700 block px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-2 border-white" onClick={() => seasonClick(2019)}>2019</div>
                        <div id="season-2020" className="season text-gray-700 block px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-2 border-white" onClick={() => seasonClick(2020)}>2020</div>
                        <div id="season-2021" className="season text-gray-700 block px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-2 border-white" onClick={() => seasonClick(2021)}>2021</div>
                    </div>
                </div>
                <div className="py-1">
                    <div className="text-center font-semibold text-gray-700 block px-4 py-2">
                        Down
                    </div>
                    <div className="flex justify-evenly">
                        <div id="down-1" className="down text-gray-700 block px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-2 border-white" onClick={() => downClick(1)}>1</div>
                        <div id="down-2" className="down text-gray-700 block px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-2 border-white" onClick={() => downClick(2)}>2</div>
                        <div id="down-3" className="down text-gray-700 block px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-2 border-white" onClick={() => downClick(3)}>3</div>
                        <div id="down-4" className="down text-gray-700 block px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-2 border-white" onClick={() => downClick(4)}>4</div>
                    </div>
                </div>
                <div className="py-1">
                    <div className="text-center font-semibold text-gray-700 block px-4 py-2">
                        Distance
                    </div>
                    <div>
                        <div id="distance-1-3" className="distance w-56 mx-auto text-gray-700 px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-t-2 border-b-2 border-white flex justify-around" onClick={() => distanceClick(1,3)}>
                            <div className="w-16">Short</div>
                            <div className="w-12 ml-1 bg-gray-200 text-gray-900 rounded-md cursor-pointer text-center">1-3</div>
                        </div>
                        <div id="distance-4-6" className="distance w-56 mx-auto text-gray-700 px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-t-2 border-b-2 border-white flex justify-around" onClick={() => distanceClick(4,6)}>
                            <div className="w-16">Medium</div>
                            <div className="w-12 ml-1 bg-gray-200 text-gray-900 rounded-md cursor-pointer text-center">4-6</div>
                        </div>
                        <div id="distance-7-10" className="distance w-56 mx-auto text-gray-700 px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-t-2 border-b-2 border-white flex justify-around" onClick={() => distanceClick(7,10)}>
                            <div className="w-16">Long</div>
                            <div className="w-12 ml-1 bg-gray-200 text-gray-900 rounded-md cursor-pointer text-center">7-10</div>
                        </div>
                        <div id="distance-11-99" className="distance w-56 mx-auto text-gray-700 px-4 py-2 text-sm rounded-md cursor-pointer hover:bg-gray-100 border-t-2 border-b-2 border-white flex justify-around" onClick={() => distanceClick(11,99)}>
                            <div className="w-16">Beyond</div>
                            <div className="w-12 ml-1 bg-gray-200 text-gray-900 rounded-md cursor-pointer text-center">11+</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
