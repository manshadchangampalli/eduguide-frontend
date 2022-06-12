import { useRef } from 'react'
import { useSelector } from 'react-redux'
import './scrollTop.scss'


function ScrollTop({service}) {
    const button=useRef()
    const serviceHero = useSelector(state => state.ServiceHero)
    const mainHero = useSelector(state => state.MainHero)
    const scroll = useSelector(state => state.scrollValue)
    const scrollTopButtonClicked = () =>{
            if(service){
                serviceHero.scrollIntoView({
                    behavior:"smooth"
                })
            }
            else{
                mainHero.scrollIntoView({
                    behavior: "smooth"
                })
            }
    }
    return (
        <div ref={button}  onClick={scrollTopButtonClicked} style={scroll>200?{bottom:"30px"}:{bottom:"-100px"}} className="scroll-top-btn">
            <a >
                <svg width="38" height="30" viewBox="0 0 38 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.7678 1.23223C19.7915 0.255922 18.2085 0.255922 17.2322 1.23223L1.32233 17.1421C0.34602 18.1184 0.34602 19.7014 1.32233 20.6777C2.29864 21.654 3.88155 21.654 4.85786 20.6777L19 6.53553L33.1421 20.6777C34.1184 21.654 35.7014 21.654 36.6777 20.6777C37.654 19.7014 37.654 18.1184 36.6777 17.1421L20.7678 1.23223ZM16.5 43C16.5 44.3807 17.6193 45.5 19 45.5C20.3807 45.5 21.5 44.3807 21.5 43H16.5ZM16.5 3V43H21.5V3H16.5Z" fill="white"/>
                </svg>
            </a>
        </div>
    )
}

export default ScrollTop
