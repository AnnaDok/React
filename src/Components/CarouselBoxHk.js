import React, {Component} from 'react';
import OneImg from '../assets/1.jpg';
import TwoImg from '../assets/2.jpg';
import ThreeImg from '../assets/3.jpg';
import FourImg from '../assets/4.jpg';
import {Carousel} from "react-bootstrap";

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={OneImg}
                        alt="Pic one"/>
                    <Carousel.Caption>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={TwoImg}
                        alt="Pic two"/>
                    <Carousel.Caption>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ThreeImg}
                        alt="Pic three"/>
                    <Carousel.Caption>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={FourImg}
                        alt="Pic four"/>
                    <Carousel.Caption>
                        <h3>Lorem ipsum</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBoxHk;