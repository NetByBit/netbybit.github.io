import React from 'react'

import amr from '../static/img/Amr.jpg'
import mostafa from '../static/img/Mostafa.jpg'
import yousef from '../static/img/Yousef.jpg'

const members = [
    {
        name: 'Amr',
        job: 'Web Developer',
        image: amr,
        facebook: '#',
        github: '#',
        twitter: '#',
    },
    {
        name: 'Mostafa',
        job: 'Digital Marketer',
        image: mostafa,
        facebook: '#',
        github: '#',
        twitter: '#',
    },
    {
        name: 'Yousef',
        job: 'UI/UX designer',
        image: yousef,
        facebook: '#',
        github: '#',
        twitter: '#',
    },
]

const Team = () => (
    <div className="team">
        <div className="container">
            <div className="row">
                <div className="col-md-4 team-left">
                    <div className="vertical-text">
                        <h5 className="vertical-text text-uppercase">Who We Are</h5>
                        <h2>
                            Meet Our
                            <br /><strong>Talented</strong> Team
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="col-md-8 no-gutters team-right row">
                    {members.map(member => (
                        <div className='col-md member'>
                            <img src={member.image} />
                            <div className='overlay'>
                                <h6 className='member-name'>{member.name}</h6>
                                <p>{member.job}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    </div>
)

export default Team
