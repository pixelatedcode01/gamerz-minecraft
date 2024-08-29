import { useEffect, useState } from 'react';
import '../Styles/TrailerView.css';

export default function TrailerView() {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [trailerOpen, setTrailerOpen] = useState(false);

    useEffect(() => {
        console.log(trailerOpen)
    }, [trailerOpen])
    return (
        <div className={`trailer-view-trigger ${trailerOpen ? 'open' : ''}`}>
            <div className='trailer-button-container flex row al-ctr jc-ctr'
                onMouseEnter={() => setTooltipOpen(true)}
                onMouseLeave={() => setTooltipOpen(false)}
                onClick={() => setTrailerOpen(true)}
            >
                {
                    trailerOpen ?
                        <>
                            <div className="close-video-header flex row al-ctr jc-sb"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setTrailerOpen(false)
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 500
                                    }}
                                >GamerZ Minecraft Server Trailer : The End Dimension</p>
                                <span className='material-symbols-rounded close-video'
                                    style={{ fontSize: '2rem' }}
                                >close</span>
                            </div>
                            <video width="100%" height="100%" controls>
                                <source src="trailer.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </>

                        :
                        null
                }
                <div>

                </div>
                <div className='trailer-tooltip'
                    style={{ display: tooltipOpen ? 'block' : 'none' }}>
                    Watch our server trailer
                </div>
                <span className='material-symbols-rounded'>play_arrow</span>
            </div>
        </div>
    )
}
