import React, { useState } from 'react';
import '../App.css';

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Rating:', rating);
        console.log('Comment:', comment);
    };

    return (
        <div className="feedback-form">
            <h1>Feedback Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="rating">
                    <label>
                        <input type="radio" name="rating" value="1" onClick={() => setRating(1)} />
                        ★
                    </label>
                    <label>
                        <input type="radio" name="rating" value="2" onClick={() => setRating(2)} />
                        ★★
                    </label>
                    <label>
                        <input type="radio" name="rating" value="3" onClick={() => setRating(3)} />
                        ★★★
                    </label>
                    <label>
                        <input type="radio" name="rating" value="4" onClick={() => setRating(4)} />
                        ★★★★
                    </label>
                    <label>
                        <input type="radio" name="rating" value="5" onClick={() => setRating(5)} />
                        ★★★★★
                    </label>
                </div>
                <div className="comment">
                    <textarea
                        placeholder="Leave your comments here..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
