import { Link } from 'react-router-dom'
import '../Styles/Header.css'

export default function Header() {
    return (
        <Link to='/how-to'>
            <div className="header-container row al-ctr jc-end gp-12">
                <p style={{
                    color: 'white',
                }} className='title-large'>How to Install</p>
                <span className="material-symbols-rounded help-icon">help</span>
            </div>
        </Link>
    )
}
