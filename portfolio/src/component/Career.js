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
        <span className="Career_title">π¨π»βπ»Career(κ²½λ ₯)</span>
                <div className="Career">
                <li>κ΅¬λ―Έ μλͺ¨κ³ λ±νκ΅ μ‘Έμ (2014λ 3μ02μΌ ~ 2017.01.13)</li>
                <li>μΏ ν‘ μλ°  (2017λ 1μ 3μΌ ~ 2017λ 2μ 13μΌ)</li>
                <li>κ΅­λ¦½ μλλνκ΅ μ¬ν (2017λ03μ 03μΌ  ~ ing )</li>
                <li>νΈμμ  μλ° (2017λ 3μ 16μΌ ~ 2018λ 3μ 1μΌ)</li>
                <li>μλλνκ΅ μ λͺ¨μ λ΄μ¬λμλ¦¬ (2018λ 03μ 29μΌ ~ 2018λ 12μ 03μΌ)</li>
                <li>νν 16ν</li>
                <li>ν΄λν° κ°λ° νμ¬ 6κ°μ</li>
                <li>15μ¬λ¨ μ λ³΄ν΅μ λλ λΆμ¬κ΄ μ μ­ (2018λ12μ 24μΌ ~ 2021λ 03μ 02μΌ)</li><br/>
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

