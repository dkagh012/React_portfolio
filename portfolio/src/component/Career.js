import React from 'react';
import {Link} from 'react-router-dom';
import Wrapper from './Wrapper';
import one_locations from '../img/1.jpg';
import three_locations from '../img/3.jpg';
import four_locations from '../img/4.jpg';
import five_locations from '../img/5.jpg';

export default function Career() {
    return(
    <div className="Careers">
        <Wrapper/>
        <div className="my_Career">
        <div className="line">

        </div>
        <span className="Career_title">👨🏻‍💻Career(경력)</span>
                <div className="Career">
                <li>구미 상모고등학교 졸업 (2014년 3월02일 ~ 2017.01.13)</li>
                <li>쿠팡 알바  (2017년 1월 3일 ~ 2017년 2월 13일)</li>
                <li>국립 안동대학교 재학 (2017년03월 03일  ~ ing )</li>
                <li>편의점 알바 (2017년 3월 16일 ~ 2018년 3월 1일)</li>
                <li>안동대학교 선모임 봉사동아리 (2018년 03월 29일 ~ 2018년 12월 03일)</li>
                <li>헌혈 16회</li>
                <li>휴대폰 개발 회사 6개월</li>
                <li>15사단 정보통신대대 부사관 전역 (2018년12월 24일 ~ 2021년 03월 02일)</li><br/>
            </div>
            <div className="Wrapper_img">
        <img className="one_friend" src={one_locations}  alt='global insight center locations' />
        <img className="three_friend" src={three_locations}  alt='global insight center locations' />
        <img className="four_friend" src={four_locations}  alt='global insight center locations' />   
        <img className="five_friend" src={five_locations}  alt='global insight center locations' />            
        </div>  


            
        </div>
      </div>
    );
}

