import '../Styles/MainHeader.css';
import '@material/web/ripple/ripple.js';

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
                <a href="https://discord.gg/AyUcdMCg" target='_blank'>
                    <div className="join-discord button row al-ctr jc-ctr gp-12">
                        <md-ripple></md-ripple>
                        <img className="discord-logo" src="discord-logo.svg" alt="" />
                        {/* <p>Join Server</p> */}
                    </div>
                </a>
                <div className="support button row al-ctr jc-ctr gp-12">
                    <md-ripple></md-ripple>
                    <span className="material-symbols-rounded support-icon">volunteer_activism</span>
                    {/* <p>Support</p> */}
                </div>
            </div>
        </div>
    )
}
