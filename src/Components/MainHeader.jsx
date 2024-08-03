import '../Styles/MainHeader.css';

export default function MainHeader() {
    return (
        <div className="main-heading-container col al-ctr jc-ctr gp-4">
            <div className="title row">
                <p className='heading'>GAMER</p>
            </div>
            <div className="sub-title row">
                <p className='sub-heading'>Minecraft Server</p>
            </div>
            <div className="navigation row gp-16">
                <div className="join-discord button row al-ctr jc-ctr gp-12">
                    <img className="discord-logo" src="discord-logo.svg" alt="" />
                    <p>Join Server</p>
                </div>
                <div className="support button row al-ctr jc-ctr gp-12">
                    <span className="material-symbols-rounded support-icon">volunteer_activism</span>
                    <p>Support</p>
                </div>
            </div>
        </div>
    )
}
