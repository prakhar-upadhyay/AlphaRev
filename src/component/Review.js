import { fontWeight } from '@mui/system'
import React from 'react'
import Chart from 'react-apexcharts'

export default function Review() {
    return (
        <div>
                        <div className='bef' style={{backgroundColor:'#F2F2F2',marginLeft:'240px',height:'65px',width:'200px',borderLeft:'5px solid blue',  borderRadius: '0px 10px 15px' }}><p style={{marginLeft:'30px',}}><strong>REVIEWED ALERTS</strong></p></div>
        <div className='rev2' >            
        <div className='rev1'style={{ borderLeft:'5px solid blue',position:'relative',marginTop:'0px'}}>
        
            <div className='fle'>
                <p style={{fontSize:'11px',marginLeft:'80px',marginTop:'35px'}}>Reviewed Alerts (Last 7 Days)</p>
                <Chart
                    type='bar'
                    width={500}
                    height={300}
                    series={[
                        {
                            name: '% True Match',
                            data: [50, 180, 30, 40, 30, 50, 30],
                            color: '#FF4E61'
                        },
                        {
                            name: '% False Positive',
                            data: [170, 300, 150, 150, 100, 180, 50],
                            color: '#26FB42'
                        },
                        {
                            name: '% AI Processed',
                            data: [80, 150, 40, 40, 30, 40, 50],
                            color: '#56D9FE'
                        },
                        {
                            name: 'Total Alerets',
                            data: [200, 150, 200, 200, 60, 170, 70],
                            color: '#A3A1FB'
                        }
                    ]}
                    options={{
                        chart: {
                            stacked: true,
                            toolbar: {
                                show: false,
                            },
                            bar: {
                                columnWidth: '80%',
                            }
                        },
                        tooltip: {
                            followCursor: true
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        xaxis: {
                            tickPlacement: 'on',
                            categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']
                        },
                        legend: {
                            position: 'top'
                        },
                        // title: {
                        //     text: 'Reviewed Alerts{Last 7 Days}',
                        //     style: {
                        //         fontSize: 10,
                                

                        //     }
                        // },
                        // stroke:{
                        //     show:true,
                        //     width:10
                        // }



                    }}


                >


                </Chart>

            </div>
            <div className='fle'>
                <p style={{fontSize:'11px',marginLeft:'80px',marginTop:'35px'}}>Reviewed Alerts (Month-To Date,Quater-To Date,Year-To Date)</p>
                <Chart
                    type='bar'
                    width={500}
                    height={300}
                    series={[
                        {
                            name: '% True Match',
                            data: [300, 400, 500],
                            color: '#FF4E61'
                        },
                        {
                            name: '% False Positive',
                            data: [600, 700, 1000],
                            color: '#26FB42'
                        },
                        {
                            name: '% AI Processed',
                            data: [300, 600, 800],
                            color: '#56D9FE'
                        },
                        {
                            name: 'Total Alerets',
                            data: [600, 1000, 1200],
                            color: '#A3A1FB'
                        }
                    ]}
                    options={{
                        chart: {
                            stacked: true,
                            toolbar: {
                                show: false,
                            },
                            bar: {
                                columnWidth: '80%',
                            }
                        },
                        tooltip: {
                            followCursor: true
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        xaxis: {
                            tickPlacement: 'on',
                            categories: ['Month-To Date', 'Quarter-To Date', 'Year-To Date']
                        },
                        legend: {
                            position: 'top'
                        },
                        // title: {
                        //     text: 'Reviewed Alerts{Month-To Date,Quater-To Date,Year-To Date}',
                        //     style: {
                        //         fontSize: 10
                        //     }
                        // },
                        // stroke:{
                        //     show:true,
                        //     width:10
                        // }



                    }}


                >

                </Chart>


            </div>
        </div>
        </div>
        </div>

    )
}


