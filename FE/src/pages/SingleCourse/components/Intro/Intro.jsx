import { Check } from '@material-ui/icons'
import './Intro.scss'


const Intro = (props) => {
    return (
        <div className="intro">
            <h3 className="intro-title">What you'll learn</h3>
            <section className="intro-col">
                <ul className="list-intro">
                    {props.intro?.map((item, i) => (
                        <li className="list-intro-item"><Check className="purple" />{item}</li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Intro
