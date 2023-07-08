import React from 'react';
import './Dashboard.css';
import PieChart from './Piechart';
import 'chartjs-plugin-datalabels';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, ArcElement } from 'chart.js';


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, ArcElement)

function Dashboard() {


    const data = {
        labels: ['Week1', '', 'Week2', '', 'Week3', '', 'week4', '', 'Week5', ''],
        datasets: [
            {

                data: [100, 300, 100, 350, 150, 300, 100, 350, 150],
                borderColor: 'red',
                backgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                tension: 0.4,

            },
            {

                data: [200, 400, 200, 450, 100, 400, 200, 350, 300],
                borderColor: 'green',
                backgroundColor: 'transparent',
                pointBorderColor: 'transparent',
                tension: 0.4,

            },
        ],
    }

    const options = {

        responsive: true,
        maintainAspectRatio: false,
        plugins: {

        },
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                min: 0,
                max: 500,
                weight: 200,
                ticks: {
                    stepSize: 100,
                }
            }
        }

    }


    return (

        <div className="dashboard bg-base-color  ">


             {/*  left section of dashboard with menu options */} 

            <div className="left-section ml-10 mt-10" >
                <div className="dashboard-menu-card bg-black rounded-lg" style={{ width: 280, height: 944 }}>
                    <div className="menu-text  ">
                        <h1 className=' text-white font-extrabold text-4xl font-montserrat pl-12 pt-16 '> Board.</h1>
                    </div>
                    <div className='menu pl-20 pt-16'>
                        <h1 className=' text-white text-lg font-montserrat mb-10 cursor-pointer'> Dashboard</h1>
                        <h1 className=' text-white mb-10 cursor-pointer'> Transaction</h1>
                        <h1 className=' text-white mb-10 cursor-pointer'> Schedule</h1>
                        <h1 className=' text-white mb-10 cursor-pointer'> Users</h1>
                        <h1 className=' text-white mb-96 cursor-pointer'> Settings</h1>
                        <h1 className=' text-white mb-3 cursor-pointer'> Help</h1>
                        <h1 className=' text-white cursor-pointer'> Contact us</h1>
                    </div>
                </div>
            </div>
            <div className="right-section bg-base-color w-auto h-auto items-stretch mt-14 overflow-hidden ">


                {/* navbar */}

                <nav className="flex items-start justify-between bg-base-color text-white px-4 py-3 mb-10">
                    <div className=" font-extrabold font-montserrat text-black text-2xl">Dashboard</div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                           {/*  search box */} 
                            <input
                                type="text"
                                placeholder="Search"
                                className=" bg-white rounded-xl text-white px-2 py-1 "
                            />
                             {/*  notification icon*/} 
                            <div className=' pl-8 pr-5 cursor-pointer'>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/61/61073.png?w=740&t=st=1686840068~exp=1686840668~hmac=dca3d6e061959ffbb1a4ed14b6704de2d0fc5145cd89723feb05f6ddcbb68b95"
                                    alt="bell"
                                    className=" w-5 h-6"
                                />
                            </div>
                        </div>

                         {/*  profile image */} 
                        <div className="flex items-center space-x-2 cursor-pointer">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/945/945226.png?w=740&t=st=1686841817~exp=1686842417~hmac=d6ff8e5cda6752ca507dfc3135d57803fddc52549c4a05fbd7848bb1ffdf21a7"
                                alt="Profile"
                                className="h-8 w-8 rounded-full"
                            />
                        </div>
                    </div>
                </nav>




                {/* 4 card  */}

                 {/*  card  1 */} 
                <div className="card-spacing flex flex-row items-stretch mb-10">
                    <div className="card bg-card-color1 flex " style={{ width: 221, height: 120 }}>
                        <div className=' mt-10 ml-6 mb-14 relative '>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/30/30932.png?w=740&t=st=1686837858~exp=1686838458~hmac=2ec04e6b6a96efaa6f2b6ccd0a50df73c4b96099329a5bdd561b56c9f50e83dc"
                                alt="revenue"
                                className=" w-7 h-6 absolute bottom-5 left-36  "
                            />
                            <h1 className=' text-sm font-normal font-lato'>Total revenue</h1>
                            <h2 className=' text-2xl font-bold'> $22,34,574</h2>
                        </div>
                    </div>

                     {/*  card  2 */} 
                    <div className="card bg-card-color2 flex " style={{ width: 221, height: 120 }}>
                        <div className=' mt-10 ml-6 mb-14 relative '>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/159/159969.png?w=740&t=st=1686839532~exp=1686840132~hmac=9c728905009a9842f64197ef22a26c15de23c7c646ea0980c090b45d89b4e1d2"
                                alt="transaction"
                                className=" w-7 h-6 absolute bottom-5 left-36  "
                            />
                            <h1 className=' text-sm font-normal font-lato'>Total Transaction</h1>
                            <h2 className=' text-2xl font-bold'> 1,82,847</h2>
                        </div>
                    </div>

                     {/*  card  3 */} 
                    <div className="card bg-card-color3 flex " style={{ width: 221, height: 120 }}>
                        <div className=' mt-10 ml-6 mb-14 relative '>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/126/126473.png?w=740&t=st=1686838970~exp=1686839570~hmac=3f3d85882cc5e521af956c673b9e8c7568eca900baf7811f7ee412b8a391c3f8"
                                alt="revenue"
                                className=" w-7 h-6 absolute bottom-5 left-36  "
                            />
                            <h1 className=' text-sm font-normal font-lato'>Total Likes</h1>
                            <h2 className=' text-2xl font-bold'> 474</h2>
                        </div>
                    </div>


                     {/*  card  4 */} 
                    <div className="card bg-card-color4 flex " style={{ width: 221, height: 120 }}>
                        <div className=' mt-10 ml-6 mb-14 mr-16 relative'>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/983/983886.png?w=740&t=st=1686839589~exp=1686840189~hmac=2c6ae7397952a115a5b2b67a46db6dc2595994574cba88906dfa74047579c0e0"
                                alt="revenue"
                                className=" w-7 h-6 absolute bottom-5 left-36  "
                            />
                            <h1 className=' text-sm font-normal font-lato'>Total Users</h1>
                            <h2 className=' text-2xl font-bold'> 574</h2>
                        </div>
                    </div>


               </div>



                {/* Data chart card  */}

                <div className="chartcard mb-10   ">
                    <div className="card bg-white card items-center justify-center" style={{ width: 1000, height: 359 }}>
                        <div className=' '>
                            <h1 className=' text-lg font-montserrat font-bold pt-8 pl-10 '>
                                Activities
                                <h1 className=' font-bold text-xs text-text-gray-color pb-10'>May-June 2021</h1>
                            </h1>
                        </div>

                         {/*  line chart */} 
                        <div style={{ width: '100%', height: '65%' }}>
                            <Line data={data} options={options} className='chart pl-10'> </Line>
                        </div>

                    </div>
                </div>


                {/* details cards 01  */}
                <div className="detail-card card-spacing flex flex-row mb-20 ">

                    <div className="card bg-white card  " style={{ width: 480, height: 256 }}>

                        <div className="top-left font-montserrat font-bold text-lg">
                            <h1 >Top Products</h1>
                        </div>

                        <div className="top-right">
                            <span className="see-all  text-xs font-normal text-gray-400 flex  ">may-June 2021 <img src="https://img.freepik.com/free-icon/up_318-407653.jpg?size=626&ext=jpg" alt="arrow" className=' w-2 h-2 rotate-180 ml-1 mt-1'></img> </span>
                        </div>

                        <div className=' flex'>

                             {/*  piechart */} 
                            <div className="charts-container pl-14 pt-5 ">
                                <div className="chart-wrapper"  >
                                    <PieChart />
                                </div>
                            </div>
                             {/*  piechart details */} 
                            <div className='piecharttext ml-11 mt-7'>
                                <div className='flex-col mb-5'>
                                    <h1 ><span className="dot bg-green-300"></span> Basic tees</h1>
                                    <h2 className=' font-normal text-xs font-lato pl-5'>53%</h2>
                                </div>
                                <div className='flex-col mb-5'>
                                    <h1 ><span className="dot bg-yellow-400"></span>Custom Short Pants</h1>
                                    <h2 className=' font-normal text-xs font-lato pl-5'>30%</h2>
                                </div>
                                <div className='flex-col mb-5'>
                                    <h1 ><span className="dot bg-red-400"></span>Super Hoodies</h1>
                                    <h2 className=' font-normal text-xs font-lato pl-5'>12%</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* details cards  02  */}
                    <div className="card bg-white card" style={{ width: 480, height: 256 }}>

                        <div className=' flex'>
                            <div className="top-left font-montserrat font-bold text-lg mb-6">
                                <h1 >Today's Scheduling</h1>
                            </div>
                            <div className="top-right">
                                <span className="see-all text-xs font-normal text-gray-400 flex">See All <img src="https://img.freepik.com/free-icon/up_318-407653.jpg?size=626&ext=jpg" alt="arrow" className=' w-2 h-2 rotate-90 ml-1 mt-1'></img></span>
                            </div>
                        </div>

                        <div className=' meetings pl-14 pt-7 text-sm font-lato flex '>
                            <div className="strip  "></div>
                            <div className=''>
                                <h2 >Meeting with suppliers from Kuta Bali </h2>
                                <div className=' text-xs '>
                                    <h3> 14.00-15.00</h3>
                                    <h3>at Sunset Road,Kuta,Bali</h3>
                                </div>
                            </div>
                        </div>

                        <div className=' meetings pl-14 pt-7 text-sm font-lato flex '>
                            <div className="strip2  "></div>
                            <div className=''>
                                <h2 >Check Operations at Giga Factory 1 </h2>
                                <div className=' text-xs '>
                                    <h3> 18.00-20.00</h3>
                                    <h3>at Central Jaktara</h3>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    );
}

export default Dashboard;