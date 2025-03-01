

import React from 'react';
import { LineChart, SatisfactionPieChart, BarChart } from './chartt-A';

function Board() {
    return (
        <div className="flex flex-row space-x-24 mt-14">
            <div className='flex flex-col ml-10 '>
                {/* Overall Balance */}
                <div className="min-h-28 w-full mb-28">
                    <h1 className="text-2xl font-semibold text-gray-800">Overall Balance</h1>
                    <h1 className="text-5xl font-bold ">$11,121.22</h1>
                    <div className="mt-4 text-sm text-gray-500">Chart Placeholder</div>
                </div>
                {/* Customer Satisfaction */}
                <div className="min-h-40 w-96">
                    <h1 className="text-3xl font-semibold text-gray-800">Customer Satisfaction</h1>
                    <div className="mt-4 text-sm text-gray-500">
                        <div><SatisfactionPieChart /></div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-full'>
                {/* Profit */}
                <div className="min-h-60 w-10/12 border px-4 rounded-3xl shadow-2xl bg-gray-800 mb-6">
                    <h3 className="text-lg font-semibold text-white mt-4 ml-3">Profit</h3>
                    <h1 className="text-2xl font-bold text-green-600 ml-3">$4,269.23</h1>
                    <div className="text-sm text-gray-500 ml-28">
                        <LineChart />
                    </div>
                </div>
                {/* Placeholder for future chart */}
                <div className="min-h-40 w-10/12 border p-4 rounded-3xl shadow-lg bg-white">
                    {/* <h1 className="text-lg font-semibold text-gray-800">Other Metric</h1> */}
                    <div className="text-sm text-gray-500">
                        <div><BarChart /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Board;
