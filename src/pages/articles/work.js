import React from "react";
import pic02 from '../../images/pic02.jpg'
import { WORK_PAGE } from "../../components/Constants";


const WorkArticle = ({ close, article, articleTimeout }) => {
    return (
        <article
            id="work"
            className={`${article === WORK_PAGE ? 'active' : ''} ${articleTimeout ? 'timeout' : ''
                }`}
            style={{ display: 'none' }}
        >
            <h2 className="major">Work it!</h2>
            <span className="image main">
                <img src={pic02} alt="" />
            </span>
            <p>
                Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
                at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
                urna nisi, fringila lorem et vehicula lacinia quam. Integer
                sollicitudin mauris nec lorem luctus ultrices.
            </p>
            <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
                Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
                tempus.
            </p>
            {close}
        </article>
    )
}

export default WorkArticle