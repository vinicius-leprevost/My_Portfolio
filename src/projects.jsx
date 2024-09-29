// eslint-disable-next-line no-unused-vars
import React from 'react';
import './default.css';

export default function Projects () {
    return (
        <div className="page-container">
            <div className="page-content">

                <div className="card">
                    <h2>Piazada RP - FiveM Roleplay Server</h2>
                    <h>October 2023 – Present</h>
                    <p className="text-content">
                        As the founder and lead developer of Piazada RP, I designed and implemented a custom FiveM
                        server aimed at
                        providing an immersive and dynamic roleplay experience. The server is built on the
                        VRPX/VRPEX architecture
                        and includes advanced systems such as a custom economy using virtual currency ("Piazada
                        Coins"), job hierarchies,
                        and unique roleplay mechanics tailored to create a robust in-game world.
                        <br/><br/>
                        The server features a sophisticated drift system and a rarity-based item drop system, both
                        of which were developed
                        to enhance user engagement and provide deeper layers of interaction. In addition to game
                        mechanics, I focused on
                        creating a community-driven environment where users could interact within an organized
                        framework, simulating
                        real-life scenarios. This project involved backend development, server optimization, and
                        community management.
                    </p>
                    <ul className="text-content">
                        <li><strong>Languages:</strong> Lua, JavaScript, JavaScript, MySQL</li>
                        <li><strong>Frameworks:</strong> VRPex Architecture
                        </li>
                        <li><strong>Technologies:</strong> Discord API
                        </li>
                    </ul>
                </div>

                <div className="card">
                    <h2>BodyWorks - TCC Project</h2>
                    <h>2017 – 2018</h>
                    <p className="text-content">
                        description..description..description..description..description..description..description..description..description..
                    </p>
                    <ul className="text-content">
                        <li><strong>Languages:</strong> Angular, Typescript, Next.js</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}