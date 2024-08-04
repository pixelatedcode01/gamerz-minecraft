import { Link } from 'react-router-dom';
import '../Styles/HeaderRead.css';

export default function HeaderRead() {
    return (
        <div className="header-container row al-ctr jc-sb">
            <Link to='/'>
                <p className='website-name'
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'white',
                        letterSpacing: '0.1rem'
                    }}
                >GAMER</p>
            </Link>
            <Link to='/'>
                <div className="home-menu row al-ctr gp-4">
                    <span className="material-symbols-rounded">home</span>
                    <p style={{ fontWeight: 500 }}>Home</p>
                </div>
            </Link>
        </div>
    )
}
