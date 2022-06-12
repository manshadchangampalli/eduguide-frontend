import React from 'react'
import ChooseCard from './ChooseCard'
import "./Choose.scss"

// images
import Design from '../../Assets/Images/Homepage/choose-us/design.png'
import Experience from '../../Assets/Images/Homepage/choose-us/experience.png'
import Fast from '../../Assets/Images/Homepage/choose-us/fast.png'
import StrongTeam from '../../Assets/Images/Homepage/choose-us/strongTeam.png'
import Support from '../../Assets/Images/Homepage/choose-us/support.png'


function Choose() {
    return (
        <section className="choose-us">
        <div className="choose-us-wraper">
            <h1>Why Choose Us ?</h1>
            <div className="card-container">
               <ChooseCard
               classNames="chos-us-card chos-us-card-1"
               img={Design}
               text1="Stunning"
               text2="Design"
               />
               <ChooseCard
               classNames="chos-us-card chos-us-card-2"
               img={Experience}
               text1="10+ "
               text2="Experiece"
               />
               <ChooseCard
               classNames="chos-us-card chos-us-card-3"
               img={Fast}
               text1="Fast and"
               text2="Responsive"
               />
               <ChooseCard
               classNames="chos-us-card chos-us-card-4"
               img={StrongTeam}
               text1="50+ Strong"
               text2="Team"
               />
               <ChooseCard
               classNames="chos-us-card chos-us-card-5"
               img={Support}
               text1="11/10 Customer"
               text2="Support"
               />
            </div>
        </div>
    </section>
    )
}

export default Choose
