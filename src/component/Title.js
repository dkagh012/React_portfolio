import React from 'react';
import two_locations from '../img/2.jpg';
import {Link} from 'react-router-dom';
import six_locations from '../img/6.png';
import seven_locations from '../img/7.png';
export default function Title() {
    return(
    <div className="Title">
        <div className="my_title">
            <div className="title">
                
                <span className="name">배정태 포트폴리오🏋🏻‍♂️</span>

               
                <img className="two_friend" src={two_locations}  alt='global insight center locations' />
                    
               
                
            <div className="Main_title"> 
                <div className="top_title">
                는 개발자
                </div>

                <div className="bottom_title">
                반갑습니다 배정태입니다.
                </div>
            </div>

                <div class ="title_line_text">
                    <div class="title_line">트렌드를 읽</div>
                    <div class="title_line">신뢰할 수 있</div>
                    <div class="title_line">열정이 있</div>
                    <div class="title_line">함께 소통하</div>
                </div>

                <div className="Notion">
                <br/>
                <span className="Notion_Link">개인으로 진행하고 있는 Notion 계정입니다.</span>
                <a href="https://fir-vessel-121.notion.site/8dfb285c059a4942ab4df12bb23b974f">
                    <img className="seven_friend" src={seven_locations}  alt='global insight center locations' />
                    </a>
                </div>

                <div className="Github">
                <span className="Github_Link">개인으로 진행하고 있는 Github 계정입니다.</span>
                <a href="https://github.com/dkagh012">
                    <img className="six_friend" src={six_locations}  alt='global insight center locations' />
                    </a>

                
                </div>

                <Link to="/" className="home_link">돌아가기
                </Link>
                <Link to="/Wrapper" className="Wrapper_link">
                소개
                </Link>
                
                <Link to="/Career" className="Career_link">
                경력
                </Link>

    


            </div>
        </div>
    </div>
    );
}

