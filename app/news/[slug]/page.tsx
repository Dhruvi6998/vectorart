'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ReviewFormHandler from './ReviewFormHandler';

const newsContent: Record<string, any> = {
  'vectorart-premier-league-2025': {
    title: 'Vector Premier League (VPL) 2025',
    content: `
<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-bottom: 40px;">
            <div style="max-width: 65%;">
                <h2 style="font-size: 2em; font-weight: bold; margin-bottom: 20px;">VectorArt Premier League (VPL) 2025</h2>
                <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                    The Vector Premier Cricket League (VPL) 2025 is back with even more thrilling action! This prestigious tournament brings together the finest cricket talent from across the region for an unforgettable display of skill, strategy, and sportsmanship. 
                    Watch as teams compete in high-stakes matches, showcasing their passion for the game and battling for the ultimate prize - the VPL Championship Trophy. Experience the excitement, drama, and pure cricket excellence that makes VPL the premier tournament of the year.
                </p>
            </div>
            <div style="max-width: 30%; text-align: right;">
                <img alt="Vector Art VPL 2025 logo" src="/assets/img/pages/News/vpl2025.png" style="max-width: 100%; height: auto;" />
            </div>
        </div>

        <div style="margin: 40px 0; text-align: center;">
            <h2 style="font-size: 2em; font-weight: bold; margin-bottom: 30px;">Watch VPL 2025 Highlights</h2>
            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
                <iframe 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
                    src="https://www.youtube.com/embed/IV6QYmwW_NQ?autoplay=0&mute=0&controls=1&rel=0" 
                    title="Vector Premier League 2025" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>

        <div style="margin-top: 60px;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 30px;">Share your feedback</h2>
            <form id="reviewForm" style="max-width: 800px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <input class="vlt-form-control" type="text" id="name" name="name" required placeholder="Your name*" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                    <div>
                        <input class="vlt-form-control" type="email" id="email" name="email" required placeholder="Your Email*" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                </div>
                <div style="margin-bottom: 20px;">
                    <textarea class="vlt-form-control" id="message" name="message" rows="5" placeholder="Message*" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;"></textarea>
                </div>
                <div style="margin-bottom: 20px;">
                    <label style="display: flex; align-items: center; gap: 10px;">
                        <input type="checkbox" name="agree" style="width: 18px; height: 18px;">
                        <span>I Agree to Receive Promotional Discounts & Newsletters</span>
                    </label>
                </div>
                <button class="vlt-btn vlt-btn--secondary vlt-btn--lg" type="submit">Submit Feedback</button>
            </form>

            <div style="margin-top: 40px; display: flex; align-items: center; gap: 20px;">
                <p style="font-size: 16px; margin: 0;">Share with Social Media:</p>
                <div style="display: flex; gap: 15px;">
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://www.instagram.com/yourusername" target="_blank" title="Share on Instagram">
                        <i class="socicon-instagram"></i>
                    </a>
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://www.facebook.com/sharer/sharer.php?u=https://www.vectorart.co/news-detail.php?id=vpl2025" target="_blank" title="Share on Facebook">
                        <i class="socicon-facebook"></i>
                    </a>
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://twitter.com/intent/tweet?url=https://www.vectorart.co/news-detail.php?id=vpl2025&text=Check%20out%20VPL%202025!" target="_blank" title="Share on Twitter">
                        <i class="socicon-twitter"></i>
                    </a>
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.vectorart.co/news-detail.php?id=vpl2025&title=Vector%20Premier%20League%202025" target="_blank" title="Share on LinkedIn">
                        <i class="socicon-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>

        <div id="vpl2025reviews" style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;"></div>

    `
  },
  'asi-orlando-2025': {
    title: 'Vector Art Founders Shine at ASI Orlando 2025',
    content: `
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-bottom: 40px;">
            <div style="max-width: 65%;">
                <h2 style="font-size: 2em; font-weight: bold; margin-bottom: 20px;">Vector Art Founders Shine at ASI Orlando 2025: A Remarkable 3-Day Journey</h2>
                <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                    Vector Art Founders Steal the Spotlight at ASI Orlando 2025. Behind the Scenes: A Memorable Experience at the ASI Orlando Show.
                </p>
                <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                    <strong>Glimpse:</strong> The Vector Art founders truly shone at ASI Orlando 2025, marking a remarkable 3-day journey filled with creativity, passion, and excellence. Stealing the spotlight, their presence was celebrated as a testament to their innovation and leadership in the industry. Behind the scenes, they experienced memorable moments that highlighted the essence of the ASI Orlando Show—a hub of inspiration and collaboration. The event not only showcased their incredible journey but also underscored their commitment to excellence, leaving a lasting impression on everyone in attendance. From impactful presentations to unforgettable interactions, the Vector Art founders stood out as true icons of success.
                </p>
            </div>
            <div style="max-width: 30%; text-align: right;">
                <img alt="Vector Art ASI Orlando 2025" src="/assets/img/pages/ASImage/21.jpg" style="max-width: 100%; height: auto; border-radius: 5px;" />
            </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin: 30px 0;">
            <img src="/assets/img/pages/ASImage/9.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/ASImage/10.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/ASImage/11.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/ASImage/20.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/ASImage/16.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/ASImage/1.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px;">Meeting Old Friends, Making New Connections</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                One of the highlights of this year\'s ASI Orlando Show was reconnecting with so many of our existing clients. It\'s always a privilege to see the faces behind the names and hear firsthand how our services have supported their projects and businesses. The stories, feedback, and testimonials we received were not just heartwarming – they were invaluable. It\'s truly inspiring to see how Vector Art has been able to make a tangible difference in helping our clients streamline their design processes and enhance their creative output.
            </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin: 30px 0;">
            <img src="/assets/img/pages/ASImage/15.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/ASImage/14.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/ASImage/17.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/ASImage/6.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/ASImage/23.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/ASImage/24.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
        </div>

        <p style="font-size: 1em; line-height: 1.8; margin: 20px 0;">
            <span style="color: red; font-weight: bold;">📍 Venue:</span> Orange County Convention Center South Concourse, Hall A
        </p>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px;">Client Testimonials: The Heart of Our Success</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                During the event, we had the chance to record some amazing client testimonials. These stories reaffirm the core values that Vector Art stands for: precision, quality, and creativity. It\'s one thing to provide top-tier vector designs, but hearing our clients share how our work has positively impacted their branding, products, and projects is truly the most rewarding part of what we do.
            </p>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                We\'d like to express our deepest gratitude to all the clients who stopped by our booth to share their experiences. Your feedback fuels our passion and drives us to continue innovating and improving.
            </p>
        </div>

        <div style="margin: 30px 0;">
            <img src="/assets/img/pages/ASImage/ASIDAY3.jpg" alt="ASI Day 3" style="width: 100%; height: auto; border-radius: 5px;">
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin: 30px 0;">
            <video controls style="width: 100%; height: auto; border-radius: 5px;">
                <source src="/assets/img/pages/ASImage/video1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video controls style="width: 100%; height: auto; border-radius: 5px;">
                <source src="/assets/img/pages/ASImage/video2.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video controls style="width: 100%; height: auto; border-radius: 5px;">
                <source src="/assets/img/pages/ASImage/video3.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px;">A Glimpse into the Future of Design</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                ASI Orlando 2025 wasn\'t just a chance to celebrate past achievements, but also an opportunity to look ahead. The industry is evolving rapidly, and we\'re excited to explore new technologies, tools, and trends that will shape the future of vector art and design. As we continue to grow, we remain committed to offering cutting-edge solutions that empower designers and businesses to achieve their creative goals with ease.
            </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin: 30px 0;">
            <video controls style="width: 100%; height: auto; border-radius: 5px;">
                <source src="/assets/img/pages/ASImage/video4.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video controls style="width: 100%; height: auto; border-radius: 5px;">
                <source src="/assets/img/pages/ASImage/video5.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video controls style="width: 100%; height: auto; border-radius: 5px;">
                <source src="/assets/img/pages/ASImage/video6.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px;">Thank You to ASI Orlando for an Amazing Event</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                A big thank you to the organizers, exhibitors, and attendees for making the ASI Orlando 2025 Show such a memorable event. The energy, enthusiasm, and innovation in the air were truly infectious. We\'re excited to continue the conversations we started and can\'t wait for the next opportunity to meet, collaborate, and grow together.
            </p>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                We\'re back to the drawing board, inspired and energized – ready to help you create the next big thing in vector art.
            </p>
        </div>

        <div style="margin: 30px 0;">
            <img src="/assets/img/pages/ASImage/Thankyou.png" alt="Thank You" style="width: 100%; height: auto;">
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin: 30px 0;">
            <img src="/assets/img/pages/ASImage/21.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/ASImage/35.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/ASImage/34.jpg" alt="ASI Orlando 2025" style="width: 100%; height: auto; border-radius: 5px;">
        </div>

        <p style="font-size: 1em; line-height: 1.8; margin: 20px 0;">
            If you couldn\'t make it to the show, don\'t worry! You can always connect with us on <a href="https://www.linkedin.com/company/vectorart" target="_blank" rel="noopener noreferrer" style="color: #0077b5; font-weight: bold;">LinkedIn</a> or visit our website <a href="https://vectorart.co/" target="_blank" rel="noopener noreferrer" style="color: #000; font-weight: bold;">Vectorart</a> to learn more about our services and how we can help bring your creative vision to life.
        </p>

        <div style="margin-top: 60px;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 30px;">We\'d love to hear your feedback from the ASI Show in Orlando!</h2>
            <form id="asiReviewForm" style="max-width: 800px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <input class="vlt-form-control" type="text" id="asiName" name="name" required placeholder="Your name*" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                    <div>
                        <input class="vlt-form-control" type="email" id="asiEmail" name="email" required placeholder="Your Email*" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                </div>
                <div style="margin-bottom: 20px;">
                    <textarea class="vlt-form-control" id="asiMessage" name="message" rows="5" placeholder="Message*" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;"></textarea>
                </div>
                <button class="vlt-btn vlt-btn--secondary vlt-btn--lg" type="submit">Submit</button>
            </form>

            <div style="margin-top: 40px; display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
                <p style="font-size: 16px; margin: 0;">Share with Social Media:</p>
                <div style="display: flex; gap: 15px;">
                    <a href="#" class="asi-facebook" target="_blank" title="Share on Facebook" style="color: #1877f2; font-size: 24px;">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#" class="asi-twitter" target="_blank" title="Share on Twitter" style="color: #1da1f2; font-size: 24px;">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="asi-linkedin" target="_blank" title="Share on LinkedIn" style="color: #0077b5; font-size: 24px;">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#" class="asi-reddit" target="_blank" title="Share on Reddit" style="color: #ff4500; font-size: 24px;">
                        <i class="fab fa-reddit"></i>
                    </a>
                    <a href="#" class="asi-whatsapp" target="_blank" title="Share on WhatsApp" style="color: #25d366; font-size: 24px;">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="#" class="asi-telegram" target="_blank" title="Share on Telegram" style="color: #0088cc; font-size: 24px;">
                        <i class="fab fa-telegram"></i>
                    </a>
                </div>
            </div>
        </div>

        <div id="asiReviews" style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;"></div>

    `
  },
  'ppai-2025': {
    title: 'PPAI 2025',
    content: `<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-bottom: 40px;">
            <div style="max-width: 65%;">
                <h2 style="font-size: 2em; font-weight: bold; margin-bottom: 20px;">Vector Art Founders Shine at PPAI Expo 2025<br>Behind the Scenes: A Memorable Experience at the PPAI Expo</h2>
                <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                    The Vector Art founders truly shone at PPAI 2025, marking a remarkable journey filled with creativity, passion, and excellence. Stealing the spotlight, their presence was celebrated as a testament to their innovation and leadership in the industry.
                </p>
                <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                    Behind the scenes, they experienced unforgettable moments that captured the essence of the PPAI Expo—a premier hub of inspiration and collaboration. The event not only highlighted their incredible journey but also underscored their commitment to excellence, leaving a lasting impression on everyone in attendance.
                </p>
                <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                    From impactful presentations to meaningful connections, the Vector Art founders stood out as true icons of success at PPAI 2025.
                </p>
            </div>
            <div style="max-width: 30%; text-align: right;">
                <img alt="Vector Art PPAI 2025" src="/assets/img/pages/PPAIImage/19.jpg" style="max-width: 100%; height: auto; border-radius: 5px;" />
            </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin: 30px 0;">
            <img src="/assets/img/pages/PPAIImage/18.jpeg" alt="PPAI 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/PPAIImage/19.jpg" alt="PPAI 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/PPAIImage/20.jpg" alt="PPAI 2025" style="width: 100%; height: auto; border-radius: 5px;">
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px;">Reconnecting with Familiar Faces, Building New Relationships</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                The first day of PPAI 2025 was all about reconnecting with familiar faces and forging new relationships. One of the biggest highlights was meeting our existing clients in person—putting faces to names and hearing firsthand how Vector Art has supported their projects and businesses.
            </p>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                The stories, feedback, and testimonials we received weren\'t just heartwarming—they were invaluable. It\'s truly inspiring to see how our services have helped streamline design processes and elevate creative output. Kicking off the event with such meaningful interactions set the perfect tone for an exciting and impactful PPAI Expo.
            </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin: 30px 0;">
            <img src="/assets/img/pages/PPAIImage/9.jpeg" alt="PPAI 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/PPAIImage/11.jpeg" alt="PPAI 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/PPAIImage/12.jpeg" alt="PPAI 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/PPAIImage/13.jpeg" alt="PPAI 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/PPAIImage/14.jpeg" alt="PPAI 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/PPAIImage/6.jpeg" alt="PPAI 2025" style="width: 100%; height: auto; border-radius: 5px;">
        </div>

        <p style="font-size: 1em; line-height: 1.8; margin: 20px 0;">
            <span style="color: red; font-weight: bold;">📍 Venue:</span> Mandalay Bay Convention Center, Las Vegas, NV
        </p>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px;">Success Through Client Voices: Our Greatest Achievement</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                Our clients\' feedback is the key to our continued growth and success. Their stories and experiences inspire us to push boundaries and deliver exceptional service. Every testimonial is a reminder of the trust and satisfaction we\'ve built over time. We\'re grateful for our clients and proud to be part of their journey, and their voices remain at the heart of everything we do.
            </p>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                We\'d like to express our deepest gratitude to all the clients who stopped by our booth to share their experiences. Your feedback fuels our passion and drives us to continue innovating and improving.
            </p>
        </div>

        <div style="margin: 30px 0;">
            <img src="/assets/img/pages/PPAIImage/21.jpeg" alt="PPAI 2025" style="width: 100%; height: auto; border-radius: 5px;">
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin: 30px 0;">
            <video controls style="width: 100%; height: auto; border-radius: 5px;">
                <source src="/assets/img/pages/PPAIImage/01.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video controls style="width: 100%; height: auto; border-radius: 5px;">
                <source src="/assets/img/pages/PPAIImage/02.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video controls style="width: 100%; height: auto; border-radius: 5px;">
                <source src="/assets/img/pages/PPAIImage/03.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px;">A Sneak Peek into the Future of Promotional Products at PPAI</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                PPAI gave us an exciting glimpse into the future of promotional products! From innovative design concepts to cutting-edge trends, this event showcased how the industry is evolving. It was a fantastic opportunity to explore new possibilities and gain insights into what\'s next for promotional products. We\'re excited to take these fresh ideas and continue pushing the boundaries of design!
            </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin: 30px 0;">
            <video controls style="width: 100%; height: auto; border-radius: 5px;">
                <source src="/assets/img/pages/PPAIImage/04.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video controls style="width: 100%; height: auto; border-radius: 5px;">
                <source src="/assets/img/pages/PPAIImage/05.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <video controls style="width: 100%; height: auto; border-radius: 5px;">
                <source src="/assets/img/pages/PPAIImage/06.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px;">Thank You to PPAI for an Incredible Event!</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                We\'d like to extend our heartfelt gratitude to PPAI for hosting such an incredible event! It was an amazing opportunity to connect with industry leaders, discover the latest trends, and showcase our products. We look forward to building on the relationships and experiences gained from this memorable event. Thank you, PPAI, for making it all possible!
            </p>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                We\'re back to the drawing board, inspired and energized – ready to help you create the next big thing in vector art.
            </p>
        </div>

        <div style="margin: 30px 0;">
            <img src="/assets/img/pages/PPAIImage/Thank You PPAI.jpg" alt="Thank You PPAI" style="width: 100%; height: auto;">
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin: 30px 0;">
            <img src="/assets/img/pages/PPAIImage/16.jpeg" alt="PPAI 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/PPAIImage/23.jpg" alt="PPAI 2025" style="width: 100%; height: auto; border-radius: 5px;">
            <img src="/assets/img/pages/PPAIImage/10.jpeg" alt="PPAI 2025" style="width: 100%; height: auto; border-radius: 5px;">
        </div>

        <p style="font-size: 1em; line-height: 1.8; margin: 20px 0;">
            If you couldn\'t make it to the show, don\'t worry! You can always connect with us on <a href="https://www.linkedin.com/company/vectorart" target="_blank" rel="noopener noreferrer" style="color: #0077b5; font-weight: bold;">LinkedIn</a> or visit our website <a href="https://vectorart.co/" target="_blank" rel="noopener noreferrer" style="color: #000; font-weight: bold;">Vectorart</a> to learn more about our services and how we can help bring your creative vision to life.
        </p>

        <div style="margin-top: 60px;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 30px;">We\'d love to hear your feedback from the PPAI in Nevada!</h2>
            <form id="ppaiReviewForm" style="max-width: 800px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <input class="vlt-form-control" type="text" id="ppaiName" name="name" required placeholder="Your name*" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                    <div>
                        <input class="vlt-form-control" type="email" id="ppaiEmail" name="email" required placeholder="Your Email*" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                </div>
                <div style="margin-bottom: 20px;">
                    <textarea class="vlt-form-control" id="ppaiMessage" name="message" rows="5" placeholder="Message*" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;"></textarea>
                </div>
                <button class="vlt-btn vlt-btn--secondary vlt-btn--lg" type="submit">Submit</button>
            </form>

            <div style="margin-top: 40px; display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
                <p style="font-size: 16px; margin: 0;">Share with Social Media:</p>
                <div style="display: flex; gap: 15px;">
                    <a href="#" class="ppai-facebook" target="_blank" title="Share on Facebook" style="color: #1877f2; font-size: 24px;">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#" class="ppai-twitter" target="_blank" title="Share on Twitter" style="color: #1da1f2; font-size: 24px;">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="ppai-linkedin" target="_blank" title="Share on LinkedIn" style="color: #0077b5; font-size: 24px;">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#" class="ppai-reddit" target="_blank" title="Share on Reddit" style="color: #ff4500; font-size: 24px;">
                        <i class="fab fa-reddit"></i>
                    </a>
                    <a href="#" class="ppai-whatsapp" target="_blank" title="Share on WhatsApp" style="color: #25d366; font-size: 24px;">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="#" class="ppai-telegram" target="_blank" title="Share on Telegram" style="color: #0088cc; font-size: 24px;">
                        <i class="fab fa-telegram"></i>
                    </a>
                </div>
            </div>
        </div>

        <div id="ppaiReviews" style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;"></div>

   `
  },
  'ppai-expo-2025': {
    title: 'PPAI Expo 2025',
    content: `<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-bottom: 40px;">
            <div style="max-width: 65%;">
                <h2 style="font-size: 2em; font-weight: bold; margin-bottom: 20px;">Vector Art at PPAI</h2>
                <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                    Vector Art is dedicated to providing comprehensive graphic design and digital imaging services tailored specifically for the promotional products industry. With Vector Art, you can expect transparent pricing and exceptional service that meets your needs, whether you\'re a global leader or a growing company aiming to enhance your graphic design and image production operations.
                </p>
                <div style="display: flex; align-items: center; margin-top: 20px;">
                    <img alt="Artwork services icon" src="https://storage.googleapis.com/a1aa/image/q6rwmczPZOKkOFNujJXpKUFM3ZNdJiu2lplAssUaxtNUuBeJA.jpg" style="width: 24px; height: 24px; margin-right: 10px;" />
                    <span style="font-size: 1em;">Artwork services</span>
                </div>
            </div>
            <div style="max-width: 30%; text-align: right;">
                <img alt="Vector Art logo" src="/assets/img/pages/News/logo.png" style="max-width: 100%; height: auto;" />
            </div>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px; color: #000;">Ideal Customer:</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                Vector Art offers its services to both suppliers and distributors in the promo community. Along with promotional products companies, Vector Art works with apparel manufacturers and retailers, textile and fabric suppliers, ecommerce platforms and uniform suppliers.
            </p>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px; color: #000;">The Solution:</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                When it comes to experience and quality, no provider of vector artwork and image editing can compare to Vector Art. We need just one opportunity to show you the quality we can offer you. I can help you save at least 20% of your current cost which you spend on Artwork.
            </p>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>Vectorizing (Raster to Vector) & (Virtual Proof & Virtual Catalog).</li>
                <li>Order Entry and Data Management.</li>
                <li>Top Notch Custom/ Quality Digitizing Services.</li>
                <li>Custom Designed and Model – Bobblehead, concept design & creative same day.</li>
                <li>Hand Drawn Illustrations.</li>
                <li>Mock up & Virtuals/Paper Proofs or Flyers, Logo design & Catalog Etc.</li>
            </ul>
            <p style="font-size: 1em; line-height: 1.8; margin-top: 15px;">We offer no additional cost for Revision and no additional cost for Rush jobs.</p>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px; color: #000;">What You\'ll Need:</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                We have a team of over 100-120 artists. We can cater any volume of jobs for you. Our capacity currently is to complete 150-200 proofs with good quality and turn-time. Reply all to this email with your Test Job we will complete and upload it back so you can evaluate my quality & turn time.
            </p>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px; color: #000;">Costs:</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                At Vector Art, we understand the importance of flexibility and efficiency in graphic design and digital imaging services. That\'s why we offer:
            </p>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li><span style="color: #000; font-weight: bold;">No additional cost for Revision:</span> We are committed to ensuring your complete satisfaction. Revisions are included in our service at no extra charge, allowing us to perfect your designs until they meet your exact specifications.</li>
                <li><span style="color: #000; font-weight: bold;">No additional cost for Rush jobs:</span> We recognize that deadlines can sometimes be tight. Whether you need a project completed urgently or on a short notice, there are no extra charges for rush jobs. Our team is dedicated to delivering high-quality results within your timeframe, without compromising on quality.</li>
            </ul>
            <p style="font-size: 1em; line-height: 1.8; margin-top: 15px;">
                With Vector Art, you can expect transparent pricing and exceptional service that meets your needs, whether you\'re a global leader or a growing company aiming to enhance your graphic design and image production operations.
            </p>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px; color: #000;">Terms & Commitments:</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                At Vector Art, we prioritize transparency and aim to provide clear expectations for our clients:
            </p>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li><span style="color: #000; font-weight: bold;">Service Commitments:</span> We commit to delivering high-quality graphic design and digital imaging services that meet or exceed your expectations. Our team ensures timely delivery of projects according to agreed-upon deadlines and specifications.</li>
                <li><span style="color: #000; font-weight: bold;">Length of Service Commitments:</span> Our service commitments are flexible and tailored to your specific needs. We offer customizable service agreements that can vary depending on the scope and duration of your project. There are no long-term service commitments required. We work on a project-by-project basis, allowing you the flexibility to scale services as needed.</li>
                <li><span style="color: #000; font-weight: bold;">Terms of Engagement:</span> Clear and concise contracts outlining project scope, timelines, and deliverables. Transparent pricing structures with no hidden fees or unexpected charges. Regular communication and updates throughout the project lifecycle to ensure alignment with your expectations. At Vector Art, we strive to build lasting partnerships based on trust, reliability, and exceptional service. Our goal is to add significant value and efficiency to your graphic design and image production operations, whether you are a global leader or a growing company.</li>
            </ul>
        </div>

        <div style="margin: 40px 0; display: flex; gap: 20px; flex-wrap: wrap;">
            <a href="https://www.ppai.org/solution/vector-art/?category=artwork-services" target="_blank" style="text-decoration: none;">
                <button style="cursor: pointer; padding: 12px 24px; background-color: white; border: 2px solid #000; font-weight: bold; border-radius: 5px; transition: all 0.3s;">Read More...</button>
            </a>
            <a href="https://vectorart.co/aboutbooth" target="_blank" style="text-decoration: none;">
                <button style="cursor: pointer; padding: 12px 24px; background-color: red; border: 2px solid red; color: white; font-weight: bold; border-radius: 5px; transition: all 0.3s;">Visit our Booth</button>
            </a>
        </div>

        <div style="margin-top: 60px;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 30px;">Share your feedback</h2>
            <form id="ppaiExpoReviewForm" style="max-width: 800px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <input class="vlt-form-control" type="text" id="ppaiExpoName" name="name" required placeholder="Your name*" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                    <div>
                        <input class="vlt-form-control" type="email" id="ppaiExpoEmail" name="email" required placeholder="Your Email*" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                </div>
                <div style="margin-bottom: 20px;">
                    <textarea class="vlt-form-control" id="ppaiExpoMessage" name="message" rows="5" placeholder="Message*" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;"></textarea>
                </div>
                <button class="vlt-btn vlt-btn--secondary vlt-btn--lg" type="submit">Submit</button>
            </form>

            <div style="margin-top: 40px; display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
                <p style="font-size: 16px; margin: 0;">Share with Social Media:</p>
                <div style="display: flex; gap: 15px;">
                    <a href="#" class="ppai-expo-facebook" target="_blank" title="Share on Facebook" style="color: #1877f2; font-size: 24px;">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#" class="ppai-expo-twitter" target="_blank" title="Share on Twitter" style="color: #1da1f2; font-size: 24px;">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="ppai-expo-linkedin" target="_blank" title="Share on LinkedIn" style="color: #0077b5; font-size: 24px;">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="#" class="ppai-expo-reddit" target="_blank" title="Share on Reddit" style="color: #ff4500; font-size: 24px;">
                        <i class="fab fa-reddit"></i>
                    </a>
                    <a href="#" class="ppai-expo-whatsapp" target="_blank" title="Share on WhatsApp" style="color: #25d366; font-size: 24px;">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="#" class="ppai-expo-telegram" target="_blank" title="Share on Telegram" style="color: #0088cc; font-size: 24px;">
                        <i class="fab fa-telegram"></i>
                    </a>
                </div>
            </div>
        </div>

        <div id="ppaiExpoReviews" style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;"></div>
`
  },
  'ai-coming': {
    title: 'AI Coming Soon',
    content: ` <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-bottom: 40px;">
            <div style="max-width: 65%;">
                <h2 style="font-size: 2em; font-weight: bold; margin-bottom: 20px;">We\'re Coming with AI-Image Generator</h2>
                <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                    Vector Art is dedicated to providing comprehensive graphic design and digital imaging services tailored specifically for the promotional products industry. With Vector Art, you can expect transparent pricing and exceptional service that meets your needs, whether you\'re a global leader or a growing company aiming to enhance your graphic design and image production operations.
                </p>
            </div>
            <div style="max-width: 30%; text-align: right;">
                <img alt="AI Image Generator" src="/assets/img/pages/News/AI IMAGE.jpg" style="max-width: 100%; height: auto;" />
            </div>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px; color: #000;">Introducing Our AI Image Generator</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                Unleash your creativity with our cutting-edge AI-powered image generator! Transform ideas into stunning visuals in seconds. Whether you need professional artwork, concept designs, or personalized graphics, our tool delivers high-quality, customizable images with ease. Perfect for artists, marketers, content creators, and dreamers—your imagination is the only limit.
            </p>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px; color: #000;">1. Seamless Creativity for Everyone</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                Our AI Image Generator bridges the gap between imagination and reality. Whether you\'re an experienced designer or a beginner, create professional-grade visuals with just a few clicks. From vibrant landscapes to intricate details, let AI do the heavy lifting while you focus on ideas.
            </p>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>No technical skills required. Just type your idea, and the AI takes care of the rest.</li>
                <li>From beginners to professionals, anyone can create high-quality visuals effortlessly.</li>
                <li>Explore artistic styles, photorealism, minimalism, abstract art, and more in one platform.</li>
                <li>Custom Designed and Model – Bobblehead, concept design & creative same day.</li>
                <li>Generate stunning images in seconds, saving time and effort on complex design tasks.</li>
                <li>Whether it\'s a detailed prompt or a vague concept, the AI adapts to bring your vision to life.</li>
            </ul>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px; color: #000;">2. Endless Possibilities, Unlimited Inspiration</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                Need inspiration? Our AI generates diverse styles—from abstract art and photorealism to futuristic concepts. Perfect for branding, storyboarding, or adding a unique touch to your projects. No idea is too big or small to visualize.
            </p>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px; color: #000;">3. Fast and Effortless Art Creation</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                Save time without compromising quality. Our AI Image Generator creates stunning visuals faster than ever. Forget complex tools—type your idea, and watch it come to life instantly. It\'s speed and precision combined.
            </p>
<!--
<a href="https://platform.openai.com/docs/" target="_blank" style="text-decoration: none;">
    <button style="cursor: pointer; padding: 12px 24px; background-color: red; border: 2px solid red; color: white; font-weight: bold; border-radius: 5px; margin-top: 20px; transition: all 0.3s;">Read More</button>
</a>
-->

        </div>

        <div style="margin-top: 60px;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 30px;">Share your feedback</h2>
            <form id="aiReviewForm" style="max-width: 800px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <input class="vlt-form-control" type="text" id="aiName" name="name" required placeholder="Your name*" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                    <div>
                        <input class="vlt-form-control" type="email" id="aiEmail" name="email" required placeholder="Your Email*" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                </div>
                <div style="margin-bottom: 20px;">
                    <textarea class="vlt-form-control" id="aiMessage" name="message" rows="5" placeholder="Message*" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;"></textarea>
                </div>
                <div style="margin-bottom: 20px;">
                    <label style="display: flex; align-items: center; gap: 10px;">
                        <input type="checkbox" name="agree" style="width: 18px; height: 18px;">
                        <span>I Agree to Receive Promotional Discounts & Newsletters</span>
                    </label>
                </div>
                <button class="vlt-btn vlt-btn--secondary vlt-btn--lg" type="submit">Submit</button>
            </form>

            <div style="margin-top: 40px; display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
                <p style="font-size: 16px; margin: 0;">Share with Social Media:</p>
                <div style="display: flex; gap: 15px;">
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://www.instagram.com/yourusername" target="_blank" title="Share on Instagram">
                        <i class="socicon-instagram"></i>
                    </a>
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://www.facebook.com/sharer/sharer.php?u=https://www.vectorart.co/news-detail.php?id=ai-coming" target="_blank" title="Share on Facebook">
                        <i class="socicon-facebook"></i>
                    </a>
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://twitter.com/intent/tweet?url=https://www.vectorart.co/news-detail.php?id=ai-coming&text=Check%20out%20Vector%20Art!" target="_blank" title="Share on Twitter">
                        <i class="socicon-twitter"></i>
                    </a>
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.vectorart.co/news-detail.php?id=ai-coming&title=Vector%20Art" target="_blank" title="Share on LinkedIn">
                        <i class="socicon-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>

        <div id="aiReviews" style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;"></div>
`
  },
  'vpl-2024': {
    title : 'Vector Premier League (VPL)',
    content: `<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-bottom: 40px;">
            <div style="max-width: 65%;">
                <h2 style="font-size: 2em; font-weight: bold; margin-bottom: 20px;">VectorArt Premier League (VPL)</h2>
                <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                    The Vector Premier Cricket League (VPL) is an action-packed, high-stakes tournament that brings together the best cricket players from across the region to battle it out for the prestigious championship trophy. With intense competition, thrilling matches, and unforgettable moments, this tournament promises to be a true spectacle for all cricket fans.
                </p>
                <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                    The stakes are higher than ever as players showcase their skills, strategy, and passion for the sport, all while competing for the ultimate glory in cricketing supremacy.
                </p>
            </div>
            <div style="max-width: 30%; text-align: right;">
                <img alt="Vector Premier League" src="/assets/img/pages/News/vpl.png" style="max-width: 100%; height: auto;" />
            </div>
        </div>

        <div style="margin: 40px 0; text-align: center;">
            <video width="100%" autoplay loop muted style="border-radius: 10px; max-width: 900px;">
                <source src="/assets/img/pages/News/vplvideo.mp4" type="video/mp4">
                Your browser does not support the video tag. Please <a href="/assets/img/pages/News/vplvideo.mp4" download>download the video</a> to watch it.
            </video>
        </div>

        <div style="margin-top: 60px;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 30px;">Share your feedback</h2>
            <form id="vplReviewForm" style="max-width: 800px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <input class="vlt-form-control" type="text" id="vplName" name="name" required placeholder="Your name*" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                    <div>
                        <input class="vlt-form-control" type="email" id="vplEmail" name="email" required placeholder="Your Email*" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                </div>
                <div style="margin-bottom: 20px;">
                    <textarea class="vlt-form-control" id="vplMessage" name="message" rows="5" placeholder="Message*" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;"></textarea>
                </div>
                <div style="margin-bottom: 20px;">
                    <label style="display: flex; align-items: center; gap: 10px;">
                        <input type="checkbox" name="agree" style="width: 18px; height: 18px;">
                        <span>I Agree to Receive Promotional Discounts & Newsletters</span>
                    </label>
                </div>
                <button class="vlt-btn vlt-btn--secondary vlt-btn--lg" type="submit">Submit</button>
            </form>

            <div style="margin-top: 40px; display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
                <p style="font-size: 16px; margin: 0;">Share with Social Media:</p>
                <div style="display: flex; gap: 15px;">
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://www.instagram.com/yourusername" target="_blank" title="Share on Instagram">
                        <i class="socicon-instagram"></i>
                    </a>
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://www.facebook.com/sharer/sharer.php?u=https://www.vectorart.co/news-detail.php?id=vpl" target="_blank" title="Share on Facebook">
                        <i class="socicon-facebook"></i>
                    </a>
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://twitter.com/intent/tweet?url=https://www.vectorart.co/news-detail.php?id=vpl&text=Check%20out%20Vector%20Art!" target="_blank" title="Share on Twitter">
                        <i class="socicon-twitter"></i>
                    </a>
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.vectorart.co/news-detail.php?id=vpl&title=Vector%20Art" target="_blank" title="Share on LinkedIn">
                        <i class="socicon-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>

        <div id="vplReviews" style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;"></div>
`
  },
  'booth-6066':{
    title: 'Our Booth',
    content: `<div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-bottom: 40px;">
            <div style="max-width: 65%;">
                <h2 style="font-size: 2em; font-weight: bold; margin-bottom: 20px;">Visit Us at Booth #6066, Mandalay Bay, Las Vegas<br>14 Jan 2025 - 16 Jan 2025</h2>
                <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                    At the Vector Art booth during the upcoming event at Mandalay Bay, Las Vegas, we\'re excited to showcase our cutting-edge services in graphic design, vector artwork, and digitizing solutions. Whether you\'re a small business or a large corporation, we\'re here to help you take your branding and design projects to the next level with top-quality, affordable, and fast-turnaround solutions.
                </p>
                <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                    Don\'t miss this chance to see how we can enhance your design projects with precision and affordability!
                </p>
            </div>
            <div style="max-width: 30%; text-align: right;">
                <img alt="Booth 6066" src="/assets/img/pages/News/PPAI Social Media 2025.png" style="max-width: 100%; height: auto;" />
            </div>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px; color: #000;">What to Expect at Our Booth:</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                Unleash your creativity with our cutting-edge AI-powered image generator! Transform ideas into stunning visuals in seconds. Whether you need professional artwork, concept designs, or personalized graphics, our tool delivers high-quality, customizable images with ease. Perfect for artists, marketers, content creators, and dreamers—your imagination is the only limit.
            </p>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.8;">
                <li>Live Demonstrations of our services, including Raster to Vector Conversion, Custom Digitizing, and Virtual Proofs.</li>
                <li>Consultations with our team of over 100 expert designers who can help with any of your project needs, whether you\'re looking for custom illustrations, logos, or branded merchandise design.</li>
                <li>Special Offers on vector artwork and digitizing services, with the opportunity to save up to 20% on your current artwork costs.</li>
                <li>Same-Day Custom Designs and unique concept creation for products like bobbleheads, models, and more.</li>
                <li>Free Evaluations—bring your test jobs, and we\'ll complete them on-site for you to evaluate the quality and speed of our services.</li>
            </ul>
            <p style="font-size: 1em; line-height: 1.8; margin-top: 20px;">
                This is the perfect opportunity to learn how Vector Art can streamline your design process and provide you with high-quality artwork that meets your needs, fast. Whether you\'re seeking vector artwork for your branding, promotional products, or custom embroidery designs, we\'re here to offer you the best in the business.
            </p>
        </div>

        <div style="margin: 40px 0;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 20px; color: #000;">Expert Consultations on Design & Artwork Needs</h2>
            <p style="font-size: 1em; line-height: 1.8; margin-bottom: 20px;">
                Meet with our team of skilled designers who are ready to discuss your unique project needs. Whether you need advice on vectorizing a logo, creating promotional material, or custom illustrations, we offer personalized consultations to ensure your vision is brought to life.
            </p>
            <a href="https://www.ppai.org/media-hub/new-member-spotlight-dgi-apparel/" target="_blank" style="text-decoration: none;">
                <button style="cursor: pointer; padding: 12px 24px; background-color: red; border: 2px solid red; color: white; font-weight: bold; border-radius: 5px; margin-bottom: 40px; transition: all 0.3s;">Find us in PPAI Members Spotlight</button>
            </a>
        </div>

        <div style="margin-top: 60px;">
            <h2 style="font-size: 1.8em; font-weight: bold; margin-bottom: 30px;">Share your feedback</h2>
            <form id="boothReviewForm" style="max-width: 800px;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <input class="vlt-form-control" type="text" id="boothName" name="name" required placeholder="Your name*" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                    <div>
                        <input class="vlt-form-control" type="email" id="boothEmail" name="email" required placeholder="Your Email*" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;">
                    </div>
                </div>
                <div style="margin-bottom: 20px;">
                    <textarea class="vlt-form-control" id="boothMessage" name="message" rows="5" placeholder="Message*" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px;"></textarea>
                </div>
                <div style="margin-bottom: 20px;">
                    <label style="display: flex; align-items: center; gap: 10px;">
                        <input type="checkbox" name="agree" style="width: 18px; height: 18px;">
                        <span>I Agree to Receive Promotional Discounts & Newsletters</span>
                    </label>
                </div>
                <button class="vlt-btn vlt-btn--secondary vlt-btn--lg" type="submit">Submit</button>
            </form>

            <div style="margin-top: 40px; display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
                <p style="font-size: 16px; margin: 0;">Share with Social Media:</p>
                <div style="display: flex; gap: 15px;">
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://www.instagram.com/yourusername" target="_blank" title="Share on Instagram">
                        <i class="socicon-instagram"></i>
                    </a>
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://www.facebook.com/sharer/sharer.php?u=https://www.vectorart.co/news-detail.php?id=booth-6066" target="_blank" title="Share on Facebook">
                        <i class="socicon-facebook"></i>
                    </a>
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://twitter.com/intent/tweet?url=https://www.vectorart.co/news-detail.php?id=booth-6066&text=Check%20out%20Vector%20Art!" target="_blank" title="Share on Twitter">
                        <i class="socicon-twitter"></i>
                    </a>
                    <a class="vlt-social-icon vlt-social-icon--style-4" href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.vectorart.co/news-detail.php?id=booth-6066&title=Vector%20Art" target="_blank" title="Share on LinkedIn">
                        <i class="socicon-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>

        <div id="boothReviews" style="margin-top: 40px; display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;"></div>

    `
  }
};

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    if (newsContent[slug]) {
      setNews(newsContent[slug]);
    } else {
      router.push('/news');
    }
  }, [slug, router]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <main className="vlt-main">
      <ReviewFormHandler />
      <div className="vlt-page-content">
        <section
          className="has-white-color"
          style={{
            backgroundImage: "url('/assets/img/pages/aboutus/aboutusbg.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <div className="vlt-page-title vlt-page-title--style-4">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="vlt-page-title__title" style={{ color: 'white', fontSize: "4rem", fontWeight: "700" }}>
                    {news.title}
                  </h1>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="vlt-gap-80"></div>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="vlt-animated-block">
                  <article 
                    className="news-content"
                    dangerouslySetInnerHTML={{ __html: news.content }}
                  />
                </div>

                <div className="vlt-gap-80"></div>

                <div className="text-center">
                  <a className="vlt-btn vlt-btn--primary vlt-btn--md" href="/news">
                    ← Back to News
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="vlt-gap-80"></div>
      </div>
    </main>
  );
}