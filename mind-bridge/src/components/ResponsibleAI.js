import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ResponsibleAI = () => {
    return (
        <div className="RAI-font">
            <h1>How We're Utilizing AI Responsibly</h1>
            <br />
            <br />
            <section>
                <h2>Understanding</h2>
                <p>
                    Perhaps most important among the tenets of responsible AI is informing you of the capabilities and limitations of CTC. The model of CTC used for this feature was trained on handpicked data from a variety of sources, featuring great diversity in the selection of artists and genres. The result is a model which quickly and thoroughly analyzes the lyrics of songs retrieved from a client's Spotify account and classifies them between four emotions (Joy, Anger, Fear, and Sadness).
                </p>
            </section>
            <section>
                <h2>Keeping You in The Loop</h2>
                <p>
                    At the end of the day, all decision making and interpretation of the analysis provided remains within the purview of a patient and their mental health professional. <u>THIS SERVICE DOES NOT PROVIDE DIAGNOSIS.</u> It is strongly encouraged that the findings of our service be discussed between a patient and professional in order to best use this product.
                </p>
            </section>
            <section>
                <h2>Acknowledging Bias</h2>
                <p>
                    While efforts to reduce bias in training the model of CTC used was an important priority in the development of this service and will remain so in future iterations, it is impossible to completely eliminate bias from the final product. That being said it is important to note that CTC ONLY examines the lyrics of a song and does not work in concert with other metrics provided by our service. Additionally, it is currently either very difficult or impossible for CTC to correctly interpret the more abstract aspects of language like sarcasm. We once again strongly encourage our users to discuss findings between patient and professional, as well as cross reference findings of CTC with the other metrics provided.
                </p>
            </section>
            <section>
                <h2>What You Think</h2>
                <p>
                    While we will always be improving our service where we see that we can, we know that our users are the best source of feedback we can get. Please use this <a href="http://localhost:3000/Feedback" target="_blank" rel="noopener noreferrer">Feedback Form</a> page to provide us with your insight and experience using Psionic Synchronicity!
                </p>
            </section>
        </div>
    );
};

export default ResponsibleAI;
