import './requirement.scss'
import { Check } from '@material-ui/icons'

const Requirement = (props) => {

    return (
        <div className="wrapper">
            <h3 className="title">Requirements</h3>
            <section>
                <ul>
                    {props.requirement?.map((item) => (
                        <li className="item"><Check className="purple" />{item}</li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Requirement
