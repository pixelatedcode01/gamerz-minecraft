import '../Styles/Document.css';


export default function Document() {
    return (
        <div className="document-container col al-ctr">
            <div className="document-page col gp-12">
                <div className="document-heading col gp-4">
                    <p>How to use the minecraft server?</p>
                    <p className="title-large">Posted : 24 July 2024</p>
                </div>
                <div className="document-banner col">
                </div>
                <div className="document-content col gp-12">
                    <p>Welcome, Minecraft players! Our server is now up and running, and you can join us after joining the <a className='title-large' style={{ textDecoration: 'underline' }} href="https://discord.gg/zCSsK7ajkk">GamerZ Discord Server</a>.</p>
                    <p>To get started, please follow the steps below to download and install all necessary mods and resource files.</p>
                    <div className="step step-one col gp-8">
                        <h2>Step 1: Download Required Files</h2>
                        <p style={{ fontSize: '1.125rem' }}><strong>Minecraft Version: Forge 1.20.1</strong></p>
                        <p><strong>Mods and Resource Files:</strong></p>
                        <ul className='col gp-4'>
                            <li><a style={{ textDecoration: 'underline' }} href="https://drive.google.com/drive/folders/1odieE3Sj1n6Lc66sZm_GOZNOlqctQNur?usp=sharing" target="_blank">Download Mods</a></li>
                            <li><a style={{ textDecoration: 'underline' }} href="https://drive.google.com/drive/folders/17DLjnXZYew6mO0h1tsZ2qKMwxcFF_foq?usp=sharing" target="_blank">Download Resource Files</a></li>
                        </ul>
                    </div>
                    <div className="step step-two col gp-8">
                        <h2>Step 2: Follow the Installation Tutorial</h2>
                        <p>Watch the tutorial video embedded below or follow the written instructions to correctly install the downloaded files.</p>
                    </div>
                    <div className="video-container">
                    <iframe src="https://drive.google.com/file/d/1tdcy9xBJH7LSlNLZYWo09x9dhPoVZY-S/preview" height="480" allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
