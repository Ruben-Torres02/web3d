
import "./Stars.css"
import React from 'react'

import useStarStore from '../../stores/use-star-store';

export default function Stars() {
    const { stars } = useStarStore();

    return (
        <>
            <div className="rating">
                <input checked={stars === 3} className="radio" type="radio" id="star-3" name="star-radio" value="star-1" />
                <label className="radio-label" htmlFor="star-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input checked={stars === 2}  className="radio" type="radio" id="star-4" name="star-radio" value="star-1" />
                <label className="radio-label" htmlFor="star-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
                <input checked={stars === 1}  className="radio" type="radio" id="star-5" name="star-radio" value="star-1" />
                <label className="radio-label" htmlFor="star-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                </label>
            </div>
            {/* {stars === 3 && <p>Thank you for rating us!</p>} */}
        </>
    );
}

