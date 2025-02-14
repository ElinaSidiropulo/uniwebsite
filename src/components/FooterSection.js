import React from 'react';

function FooterSection() {
    return (
        <footer id="footer">
            <div className="container">
                <ul className="soc-media-ul">
                    <li>
                        <a href="https://x.com" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
                    </li>
                    <li>
                        <a href="https://workspaceupdates.googleblog.com/2023/04/new-community-features-for-google-chat-and-an-update-currents%20.html" className="fa fa-google-plus" target="_blank" rel="noopener noreferrer"></a>
                    </li>
                    <li>
                        <a href="https://ru.linkedin.com" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
                    </li>
                    <li>
                        <a href="https://www.behance.net" className="fa fa-behance" target="_blank" rel="noopener noreferrer"></a>
                    </li>
                    <li>
                        <a href="mailto:example@mail.com" className="fa fa-envelope"></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default FooterSection;
