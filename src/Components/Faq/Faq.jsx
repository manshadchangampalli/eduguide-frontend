import React, { lazy, Suspense } from 'react'
import Data from '../../Data/FaqData.json'
import './Faq.scss'
// import FaqCard from './FaqCard'
const FaqCard = lazy(()=> import ('./FaqCard'))

function Faq() {
    return (
        <section id="faq" className="faq">
        <div className="heading">
            <h1>Have Some Questions?</h1>
        </div>
        <div className="faq-main-section">
            {
                Data.map((data,index)=>{
                    return(
                        <Suspense fallback={<h1>loading..</h1>}>
                            <FaqCard
                            key={index}
                            question={data.question}
                            answer={data.answer}
                            />
                        </Suspense>
                    )
                })
            }
        </div>
    </section>
    )
}

export default Faq
