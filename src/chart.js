import React from 'react'
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from 'recharts'

const placeholderData = {
    salesData:
        [
            {"name": "Month 1", "historical": 4000},
            {"name": "Month 2", "historical": 3000},
            {"name": "Month 3", "historical": 2000},
            {"name": "Month 4", "historical": 2780},
            {"name": "Month 5", "historical": 1890},
            {"name": "Month 6", "historical": 2390, "estimate": 2390},
            {"name": "Month 7", "estimate": 3490}
        ]
}

const ChartView = ({content = placeholderData}) => (
    <div>
        <h1>Chart</h1>
        <AreaChart width={900} height={400} data={content.salesData}
                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorHistorical" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorEstimate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="historical" stroke="#8884d8" fillOpacity={1} fill="url(#colorHistorical)" />
            <Area type="monotone" dataKey="estimate" stroke="#82ca9d" fillOpacity={1} fill="url(#colorEstimate)" />
        </AreaChart>
    </div>
)

export default ChartView