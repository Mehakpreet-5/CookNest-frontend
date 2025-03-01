import React from "react";
import ApexCharts from "react-apexcharts";

export const LineChart = () => {
    const chartConfig = {
        series: [
            {
                name: "Sales",
                data: [120, 160, 180, 160, 190, 190, 200, 220, 225],
            },
        ],
        chart: {
            type: "line",
            height: 180, // Decrease the chart height here
            toolbar: { show: false },
        },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth", colors: ["#e9b0dd"] },
        xaxis: {
            categories: [],
            axisTicks: { show: false },
            axisBorder: { show: false },
            labels: { show: false },
        },
        yaxis: { labels: { show: false } },
        grid: { show: false },
        tooltip: { theme: "dark" },
    };

    return (
        <div className="w-80 h-28"> {/* Adjust the height here as well */}
            <ApexCharts options={chartConfig} series={chartConfig.series} type="line" height={180} /> {/* Match height here */}
        </div>
    );
};


import Chart from 'react-apexcharts';

export
    const SatisfactionPieChart = () => {
        // Sample data for customer satisfaction ratings
        const chartOptions = {
            chart: {
                type: 'pie',
                toolbar: {
                    show: false,
                },
            },
            labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'],
            colors: ['#f791d5', '#7ee1f3', '#f0ee8e', '#8ef091', '#9CA3AF'], // Colors for each category
            legend: {
                show: false, // Hide default legend, as we're using custom legends
            },
        };

        const chartSeries = [55, 30, 15, 7,]; // Sample data representing ratings

        return (
            <div className="">
                <div className="h-[300px]  justify-center items-center  flex flex-row">
                    {/* Pie Chart */}
                    <div id="hs-pie-chart">
                        <Chart options={chartOptions} series={chartSeries} type="pie" height={300} />
                    </div>

                    {/* Legend Indicator */}
                    <div className="flex flex-col sm:justify-end gap-x-4 mt-3 sm:mt-6 space-y-2">
                        <div className="inline-flex items-center">
                            <span className="size-2.5 inline-block w-2.5 h-2.5 bg-green-300 rounded-sm mr-2"></span>
                            <span className="text-[16px] text-gray-600 dark:text-neutral-400">Very Satisfied</span>
                        </div>

                        <div className="inline-flex items-center">
                            <span className="size-2.5 inline-block w-2.5 h-2.5 bg-yellow-300 rounded-sm mr-2"></span>
                            <span className="text-[16px] text-gray-600 dark:text-neutral-400">Neutral</span>
                        </div>
                        <div className="inline-flex items-center">
                            <span className="size-2.5 inline-block w-2.5 h-2.5 bg-pink-400 rounded-sm mr-2"></span>
                            <span className="text-[16px] text-gray-600 dark:text-neutral-400">Dissatisfied</span>
                        </div>

                    </div>
                    {/* End Legend Indicator */}
                </div>
            </div>
        );
    };


    // import React from 'react';
    // import Chart from 'react-apexcharts'; // Ensure Chart component is imported
    
    export const BarChart = () => {
        const chartConfig = {
            series: [{
                name: "Sales",
                data: [50, 40, 300, 320, 401, 350, 200, 230, 500],
            }],
            chart: {
                type: "bar",
                height: 240,
                toolbar: { show: false },
            },
            colors: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFDB33', '#33FFF0', '#F033FF', '#F0FF33', '#FF5733'],
            plotOptions: {
                bar: {
                    columnWidth: "40%",
                    borderRadius: 2,
                    borderWidth: 2, // Add border width for bars
                    borderColor: "#af75f1", // Add a border color for bars
                    colors: {
                        ranges: [
                            { from: 0, to: 100, color: "#f8e53b" },
                            { from: 101, to: 200, color: "#75f179" },
                            { from: 201, to: 300, color: "#49e3ee" },
                            { from: 301, to: 400, color: "#ee49af" },
                            { from: 401, to: 500, color: "#af75f1" }
                        ]
                    }
                },
            },
            xaxis: {
                categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                labels: {
                    style: { fontSize: "12px", colors: "#616161" }
                }
            },
            yaxis: {
                labels: { style: { fontSize: "12px", colors: "#616161" } }
            },
            grid: { show: false },
            tooltip: { theme: "dark" },
        };
    
        return (
            <div className="px-4 py-2 ">
                <Chart options={chartConfig} series={chartConfig.series} type="bar" height={240} />
            </div>
        );
    };
    