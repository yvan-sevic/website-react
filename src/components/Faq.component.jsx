import styled from 'styled-components'
import {About} from '../styles'

const Faq = () => {
    return (

            <FAQ>
                <h2>Any Question <span>FAQ</span></h2>
                <div className="question">
                    <h4>How do I start?</h4>
                    <div className='answer'>
                        <p>Ipsum enim eaque cupiditate recusandae voluptas non. At iure corporis accusantium voluptatem nam repellat dicta veritatis doloremque aspernatur.</p>
                        <p>                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quasi nobis a. </p>
                    </div>
                    <div className="faq-line"></div>
                </div>
                <div className="question">
                    <h4>Daily Schedule</h4>
                    <div className='answer'>
                        <p>Ipsum enim eaque cupiditate recusandae voluptas non. At iure corporis accusantium voluptatem nam repellat dicta veritatis doloremque aspernatur.</p>
                        <p>                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quasi nobis a. </p>
                    </div>
                    <div className="faq-line"></div>
                </div>
                
                <div className="question">
                    <h4>Payment Methods</h4>
                    <div className='answer'>
                        <p>Ipsum enim eaque cupiditate recusandae voluptas non. At iure corporis accusantium voluptatem nam repellat dicta veritatis doloremque aspernatur.</p>
                        <p>                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quasi nobis a. </p>
                    </div>
                    <div className="faq-line"></div>
                </div>
                <div className="question">
                    <h4>What products do you offer?</h4>
                    <div className='answer'>
                        <p>Ipsum enim eaque cupiditate recusandae voluptas non. At iure corporis accusantium voluptatem nam repellat dicta veritatis doloremque aspernatur.</p>
                        <p>                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quasi nobis a. </p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </FAQ>

    )
}

const FAQ = styled(About)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight:lighter;
    }
    .faq-line{
        background-color:#ccc;
        height:0.2rem;
        margin:2rem 0rem;
        width:100%;
    }
    .question {
        padding:3rem 0rem;
        cursor:pointer;
    }
    .answer {
        padding:2rem 0rem;
        p {
            padding:1rem 0 rem;
        }
    }
`

export default Faq;