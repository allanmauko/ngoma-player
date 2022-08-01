import React from "react";

function Feedback() {
    return(
        <section class="contact-us" id="contactus">
        <div class="conta">
            <div class="contact-box">
                <div class="left"></div>
                <div class="right">
                    <form id="formYetu"> 
                        <h2>Contact Us</h2>
                        <input type="text" class="field" placeholder="Your Name" />
                        <input type="text" class="field" placeholder="Your Email" />
                        <input type="text" class="field" placeholder="Phone" />
                        <textarea placeholder="Message" class="field"></textarea>
                        <button class="btn">Send</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </section>

    )
}

export default Feedback;