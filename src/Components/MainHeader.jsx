import { useState } from 'react';
import '../Styles/MainHeader.css';
import '@material/web/ripple/ripple.js';

function ActionButton({ item, handleActionClick }) {
    return (
        <a href={item?.link} target={item.target}>
            <div className={`${item.class[0]} button ${item.active ? 'active' : ''} row al-ctr jc-ctr gp-12`}
                onMouseOver={() => handleActionClick(item.id)}
            >
                <md-ripple></md-ripple>
                {
                    item.url ?
                        <img className={item.class[1]} src={item?.url} alt="" />
                        :
                        <span className={`material-symbols-rounded ${item.class[1]}`}>{item.icon}</span>
                }
                <div className="tooltip row">
                    <p>{item.name}</p>
                </div>
            </div>
        </a>
    )

}

export default function MainHeader() {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [actions, setActions] = useState([
        {
            id: 1,
            name: 'Join Discord Server',
            class: ['join-discord', 'discord-logo'],
            url: 'discord-logo.svg',
            link: 'https://discord.gg/zCSsK7ajkk',
            active: false,
            target: '_blank'
        },
        {
            id: 2,
            name: 'Support',
            class: ['support', 'support-icon'],
            icon: 'volunteer_activism',
            link: 'https://ko-fi.com/Q5Q011P6FY',
            active: false,
            target: '_blank'
        },
        // {
        //     id: 3,
        //     name: 'Shop',
        //     class: ['shop', 'shopping-cart'],
        //     icon: 'shopping_cart',
        //     link: '/shop',
        //     active: false,
        //     target: '_self'
        // }

    ]);
    function handleActionClick(id) {
        let newActions = actions.map((item) => {
            if (item.id === id) {
                item.active = !item.active;
            }
            return item;
        })
        setActions(newActions);
    }
    return (
        <div className="main-heading-container col al-ctr jc-ctr">
            <div className="title row">
                <p className='heading'>GAMER</p>
            </div>
            <div className="sub-title row"
                style={{
                    marginTop: '-1rem',
                }}
            >
                <p className='sub-heading'
                    style={{ fontFamily: 'Pixelify Sans' }}
                >Minecraft Server</p>
            </div>
            <div className='col about_container'

            >
                <div className={`about_us row`}>
                    <div className={`about_data row al-ctr jc-ctr `}>
                        <div className={`visible_about flex col ${isAboutOpen ? 'open' : ''} `}
                            onClick={() => setIsAboutOpen(!isAboutOpen)}
                        >
                            <h4
                                style={{
                                    padding: '1rem',
                                }}
                            >🌍 Welcome to GamerZ Minecraft Server - The Ultimate Minecraft Adventure! 🏰</h4>
                            <div className='about_body flex col gp-12'>
                                <p>Dive into a world where adventure never ends! Our server is packed with thrilling features to keep you on your toes:</p>
                                <p>🗺️ Explore Custom Worlds: Discover brand new biomes in all 3 world, massive End cities, and a reimagined Nether with 15+ unique structures!</p>
                                <p>🐉 Face the End Dragon: Take on Modded End Dragon for the ultimate showdown.</p>
                                <p>💀 Keep Your Loot Safe: Our Gravestone mod ensures your items are secured if you meet an untimely end.</p>
                                <p>👾 Meet 100+ New Mobs: Encounter a variety of new creatures, from armored Illagers to otherworldly beasts.</p>
                                <p>🏠 Secure Your Home: Use Grief Prevention to protect your builds, and set up to 5 homes for easy teleportation.</p>
                                <p>🔗 Connect with Discord: Stay in touch with your friends through integrated Discord-Minecraft chat.</p>
                                <p>🔍 Endless Exploration: Enjoy random teleportation and pre-generated chunks for smooth and exciting journeys.</p>
                                <p>🎤 In-Game Voice Chat: Coordinate with your team in real-time using in-game voice chat.</p>
                            </div>

                        </div>
                        {/* <span className="material-symbols-rounded expand_about"
                            onClick={() => setIsAboutOpen(!isAboutOpen)}
                        >keyboard_arrow_down</span> */}
                    </div>
                </div>
            </div>
            <div className="navigation row gp-16">
                {
                    actions.map((item) => (
                        <ActionButton key={item.id} item={item} handleActionClick={handleActionClick} />
                    ))
                }
                {/* <a href="https://discord.gg/AyUcdMCg" target='_blank'>
                    <div className="join-discord button active row al-ctr jc-ctr gp-12">
                        <md-ripple></md-ripple>
                        <img className="discord-logo" src="discord-logo.svg" alt="" />
                        <div className="tooltip row" tabIndex={1}>
                            <p>Join Discord Server</p>
                        </div>
                    </div>
                </a> */}
                {/* <div className="support button row al-ctr jc-ctr gp-12">
                    <md-ripple></md-ripple>
                    <span className="material-symbols-rounded support-icon">volunteer_activism</span>
                    <div className="tooltip row" tabIndex={1}>
                        <p>Support</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
