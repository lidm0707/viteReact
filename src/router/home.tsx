import React from 'react';
import homeCss from '../css/Home.module.css'

const Home: React.FC = () => {
    return (


        <body>
            <div>
                <div className={homeCss.toptmenuinner}>
                    <h2>Home</h2>
                    <ul>
                        <li>Home 1</li>
                        <li>Home 2</li>
                    </ul>
                </div>
            </div>

            <div className={homeCss.midmenuinner}>
                <h2>ตาราง 1</h2>
                {/* ตารางข้อมูลที่ต้องการแสดง */}
            </div>
            <div className={homeCss.lastmenuinner}>
                <h2>ตาราง 2</h2>
                {/* ตารางข้อมูลที่ต้องการแสดง */}
            </div>
        </body>
    );
}

export default Home;
