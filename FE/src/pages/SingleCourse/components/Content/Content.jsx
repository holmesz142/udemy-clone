import { useState } from 'react'
import './content.scss'
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'

const Content = (props) => {

    const [clicked, setClicked] = useState(null)

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }

        setClicked(index)
    }
    return (
        <div className="content">
            <h3 className="title">Course content</h3>
            <div className="content-wrapper">
                <div className="course-content accordion">
                    {props.content?.map((item, i) => (
                        <div className="item">
                            <div className="title-item" onClick={() => toggle(i)}>
                                <span>{clicked === i ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</span>
                                <span className="header"><strong>{item.part}</strong></span>
                            </div>
                            <div className={clicked === i ? 'content show' : 'content'}>
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Content
