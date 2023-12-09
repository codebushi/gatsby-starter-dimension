import React from "react";

const ContactArticle = ({ close, article, articleTimeout }) => {
    return (
        <article
            id="contact"
            className={`${article === 'contact' ? 'active' : ''} ${articleTimeout ? 'timeout' : ''
                }`}
            style={{ display: 'none' }}
        >
            <h2 className="major">Contact me!</h2>
            <form method="post" action="#">
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="4"></textarea>
                </div>
                <ul className="actions">
                    <li>
                        <input type="submit" value="Send Message" className="special" />
                    </li>
                    <li>
                        <input type="reset" value="Reset" />
                    </li>
                </ul>
            </form>
            <ul className="icons">
                <li>
                    <a
                        href="https://www.linkedin.com/in/clementwtse/"
                        className="icon fa-linkedin"
                    >
                        <span className="label">LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="mailto:hello@clementtse.com" className="icon fa-envelope-o">
                        <span className="label">Email</span>
                    </a>
                </li>
            </ul>
            {close}
        </article>
    )
}

export default ContactArticle