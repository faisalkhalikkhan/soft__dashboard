import React from 'react'
import './Home.css'

import Card from '../CustomCard/Card'
import Header from '../Header/Header'
import Middle from '../Middle/Middle'

import { IconButton, Button } from '@material-ui/core'
import { AccountCircleOutlined, ArrowForward, CallMade, Email, MoreHoriz, NearMeOutlined, Phone } from '@material-ui/icons'
import { Doughnut } from 'react-chartjs-2';

const Home = () => {

    const state1 = {
        labels: ["25%", "45%", "30%"],
        datasets: [{
            // label: 'My First Dataset',
            data: [25, 45, 30],
            fill: true,
            tension: 0.1
        }]
    }

    return (
        <div className="home">
            <Header />
            <div className="home__dash">
                <div className="home__left">
                    <div className="home__left__cards">
                        <Card bg="transparent" colo="blueviolet" ringColor="blueviolet" />
                        <div className="blank__card">
                            <Card bg="rgb(0, 163, 212)" colo="#fff" ringColor="#fff" />
                        </div>
                        <Card bg="transparent" colo="rgb(185, 28, 28)" ringColor="rgb(185, 28, 28)" />
                    </div>
                    <Middle />
                    <div className="home__end">
                        <div className="campaign">
                            <div className="campaign__top">
                                <p>Referals And Campaign Stats</p>
                                <div className="campaign__top__right">
                                    <NearMeOutlined color="secondary" />
                                    <div className="campaign__top__right__text">
                                        <p>40 Campaign send in total</p>
                                        <p>4 Campaign send in last month</p>
                                    </div>
                                </div>
                            </div>
                            <div className="campaign__middle">
                                <div className="campaign__middle__box">
                                    <p style={{ fontSize: "13px", marginBottom: "5px" }}>User's Reached</p>
                                    <span style={{ fontSize: "12px", color: "rgb(0, 163, 212)" }}><CallMade style={{ height: "12px" }} />+3.59%</span>
                                    <p style={{ fontSize: "25px" }}>7956</p>
                                </div>
                                <div className="campaign__middle__box">
                                    <p style={{ fontSize: "13px", marginBottom: "5px" }}>Referals</p>
                                    <span style={{ fontSize: "12px", color: "rgb(0, 163, 212)" }}><CallMade style={{ height: "12px" }} />+3.59%</span>
                                    <p style={{ fontSize: "25px" }}>7956</p>
                                </div>
                                <div className="campaign__middle__box">
                                    <p style={{ fontSize: "13px", marginBottom: "5px" }}>Share</p>
                                    <span style={{ fontSize: "12px", color: "rgb(0, 163, 212)" }}><CallMade style={{ height: "12px" }} />+3.59%</span>
                                    <p style={{ fontSize: "25px" }}>7956</p>
                                </div>
                                <div className="campaign__middle__box">
                                    <p style={{ fontSize: "13px", marginBottom: "5px" }}>Applications</p>
                                    <span style={{ fontSize: "12px", color: "rgb(0, 163, 212)" }}><CallMade style={{ height: "12px" }} />+3.59%</span>
                                    <p style={{ fontSize: "25px" }}>7956</p>
                                </div>
                            </div>
                            <div className="campaign__end">
                                <Button variant="contained" style={{ backgroundColor: "rgb(0, 163, 212)", marginRight: "10px" }}>Start a New Campaign Now</Button>
                                <Button variant="contained" color="secondary">Pause All Running Campaign</Button>
                            </div>
                        </div>

                        <div className="pie__chart">
                            <div className="pie__chart__top">
                                <p>Open Positions By Department</p>
                                <MoreHoriz />
                            </div>
                            <div className="pie__chart__main">
                                <Doughnut
                                    data={state1}
                                    options={{
                                        maintainAspectRatio: false,
                                        title: {
                                            display: true,
                                            text: 'faisal Khan',
                                            fontSize: 20
                                        },
                                        backgroundColor: ["blue","orange", "red"],
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="home__right">
                    <div className="home__right__top">
                        <p>Hello John Bayer,</p>
                        <p>You have 8 New Applications Today!</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcATwugJR_GWFv7GtE59MuNSLEo8JYgiSwFA&usqp=CAU" alt="logo" />
                    </div>
                    <div className="home__right__end">
                        <div className="home__right__end__top">
                            <p>New Applicants</p>
                            <IconButton>
                                <ArrowForward style={{ color: "#fff" }} />
                            </IconButton>
                        </div>
                        <div className="home__right__end__bottom">
                            <div className="applicant">
                                <AccountCircleOutlined style={{ width: "30px", height: "30px" }} />
                                <div className="applicant__name">
                                    <p>Rosie Metts.</p>
                                    <p id="applicant__text">Application for <span>IOS developer</span></p>
                                </div>
                                <div className="applicant__btn">
                                    <IconButton style={{ marginRight: "15px", marginLeft: "15px" }}>
                                        <Email />
                                    </IconButton>
                                    <IconButton>
                                        <Phone />
                                    </IconButton>
                                </div>
                            </div>
                            <div className="applicant">
                                <AccountCircleOutlined style={{ width: "30px", height: "30px" }} />
                                <div className="applicant__name">
                                    <p>Rosie Metts.</p>
                                    <p id="applicant__text">Application for <span>IOS developer</span></p>
                                </div>
                                <div className="applicant__btn">
                                    <IconButton style={{ marginRight: "15px", marginLeft: "15px" }}>
                                        <Email />
                                    </IconButton>
                                    <IconButton>
                                        <Phone />
                                    </IconButton>
                                </div>
                            </div>
                            <div className="applicant">
                                <AccountCircleOutlined style={{ width: "30px", height: "30px" }} />
                                <div className="applicant__name">
                                    <p>Rosie Metts.</p>
                                    <p id="applicant__text">Application for <span>IOS developer</span></p>
                                </div>
                                <div className="applicant__btn">
                                    <IconButton style={{ marginRight: "15px", marginLeft: "15px" }}>
                                        <Email />
                                    </IconButton>
                                    <IconButton>
                                        <Phone />
                                    </IconButton>
                                </div>
                            </div>
                            <div className="applicant">
                                <AccountCircleOutlined style={{ width: "30px", height: "30px" }} />
                                <div className="applicant__name">
                                    <p>Rosie Metts.</p>
                                    <p id="applicant__text">Application for <span>IOS developer</span></p>
                                </div>
                                <div className="applicant__btn">
                                    <IconButton style={{ marginRight: "15px", marginLeft: "15px" }}>
                                        <Email />
                                    </IconButton>
                                    <IconButton>
                                        <Phone />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
