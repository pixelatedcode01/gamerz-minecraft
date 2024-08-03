import '../Styles/BannerIcons.css'

export default function BannerIcons() {
    return (
        <div className="banner-main-container col">
            <div className='banner-container row al-ctr jc-ctr'>
                <div className="icons-container row gp-16">
                    <div className="icon-container server row al-ctr jc-ctr">
                        <img src="server-logo.gif" alt="" />
                    </div>
                    <div className="icon-container server row al-ctr jc-ctr">
                        <p className='x-sign'>x</p>
                    </div>
                    <div className="icon-container minecraft row al-ctr jc-ctr">
                        <img src="mc-logo.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="banner-presents row al-ctr jc-ctr">
                <p>presents</p>
            </div>
        </div>

    )
}
