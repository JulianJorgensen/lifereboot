---
title: Landing
layout: default
class: home
header: How big are your dreams? What will it cost you <strong>not</strong> to <span
  class="nobr">pursue them?</span>
header_paragraph: Be inspired to look within to find answers to life’s questions.
signup_text: SIGN UP FOR UPDATES AND FREE GIFTS
---

<section class="section-landing">
  <div class="row">
    <div class="small-12 medium-6 columns">
      <h1>{{ page.header }}</h1>
      <p class="lead">{{ page.header_paragraph}}</p>
    </div>
    <div class="small-12 medium-6 columns" id="landing-book-column">
      <img class="landing-book" src="/images/book.png" alt="LifeReboot book" />
    </div>
  </div>
  <div class="landing-cta">
    <a class="button primary large" href="#order-now">ORDER NOW</a>
  </div>
</section>


<section id="newsletter-signup" class="section">
  <div class="newsletter-signup-container">
    <h3>{{ page.signup_text }}</h3>
    <form data-abide method="POST" action="https://liferebootbook.activehosted.com/proc.php" id="newsletter-signup-form" novalidate>
      <input type="hidden" name="u" value="1" />
      <input type="hidden" name="f" value="1" />
      <input type="hidden" name="s" />
      <input type="hidden" name="c" value="0" />
      <input type="hidden" name="m" value="0" />
      <input type="hidden" name="act" value="sub" />
      <input type="hidden" name="v" value="2" />
      <input type="text" name="fullname" id="fullname" placeholder="Your name" required />
      <input type="text" name="email" id="email" placeholder="Your email" pattern="email" required />
      <input type="submit" class="button secondary" value="SIGN UP" />
    </form>
    <small>By signing up you give permission for me to email you.</small>
  </div>
  <div id="thank-you"><h2>Thanks for signing up.</h2></div>
</section>


<section id="about" class="section">
  <h2>ABOUT LIFE REBOOT</h2>
  <div class="row">
    <div class="small-12 medium-6 columns">
      <h3 class="callout-header">Are you feeling stuck in a rut?</h3>
      <div class="separator small"></div>
      <h3 class="callout-header">Are you craving more out of life, from your job, your personal life, and relationships?</h3>
    </div>
    <div class="small-12 medium-6 columns">
      <h4 id="learn-to">LEARN HOW TO...</h4>
      <ul>
        <li>Kick fear to the curb.</li>
        <li>Transform limiting beliefs.</li>
        <li>Unlock the answers to some of life’s most challenging questions.</li>
        <li>Connect with others in a supportive community who share your struggles.</li>
        <li>Feel balanced, calm and at peace, no matter what your circumstances.</li>
        <li>Build the life you've been imagining and dreaming about.</li>
      </ul>
    </div>
  </div>
</section>

<section id="order-now" class="section section-blue">
  <div class="vendors">
    <a href="https://www.amazon.com/Life-Reboot-Finding-Passion-Purpose/dp/0995257302/" target="new"><img src="/images/Amazon_logo.png" alt="LifeReboot available now through Amazon" /></a>
    <a href="https://www.amazon.com/Life-Reboot-Finding-Passion-Purpose-ebook/dp/B06XGKV7LL" target="new"><img src="/images/Amazon_Kindle_logo.png" alt="LifeReboot available now through Amazon Kindle" /></a>
  </div>
</section>

<section id="testimonials" class="section">

  <img class="quote-icon" src="/images/quote-icon.png" alt="Testimonial icon" />

  <div id="testimonials-slider" class="royalSlider rsDefault">
    <div class="testimonial">
      <q>One of the best ways to heal and move on with your life is to first - tell the truth about where you are now. Sarah, with her honesty and heartfelt vulnerability, will lovingly guide you to listen to your inner voice so you can choose your own next step. That step will bring you closer to your destiny.</q>
      <author>Barry Spilchuk, Coauthor A Cup of Chicken Soup for the Soul</author>
    </div>
    <div class="testimonial">
      <q>A masterful debut into a powerful story that invites you through a journey of self-discovery of inner wealth. It's impossible to read this book and not come away thinking differently about the choices we make and the pressing need for all of us to live a more awakened life with blissful purpose.</q>
      <author>Colleen Walski, author Growing Into Greatness</author>
    </div>
    <div class="testimonial">
      <q>Life Reboot is simply a must read! It is a great resource for anyone looking to make changes in their lives and don’t know where to start. If you want to change your outer life, you must first learn to go within. If you want to improve your body, mind and health, let Sarah guide you on an inner journey that will empower you to take your own journey of self-discovery deep within, finding some incredible jewels along the way.</q>
      <author>Kathy Tuccaro, author Dream Big!</author>
    </div>
  </div>
</section>


<section id="about-sarah" class="section">
  <div class="row">
    <div class="small-12 hide-for-large columns">
      {% include sarah-bio.html %}
    </div>

    <div class="show-for-large large-5 columns" id="desktop-sarah">
      <img src="/images/Sarah.png" alt="Author Sarah Wall" />
    </div>
    <div class="show-for-large large-7 columns">
      {% include sarah-bio.html %}
    </div>
  </div>
</section>

<section id="share" class="section section-blue">
  <h2>SHARE</h2>
  <div class="socialmedia-icons">

    <a href="https://www.facebook.com/sharer/sharer.php?u=liferebootbook.com" target="_blank">{% include facebook-inverted.svg %}</a>
    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//liferebootbook.com&title=Life%20Reboot%20by%20Sarah%20Wall&summary=Life%20Reboot%3A%20An%20Inner%20Wisdom%20Guide%20To%20Finding%20Your%20Passion%20and%20Purpose%20-%20this%20book%20provides%20you%20with%20tools%20to%20create%20a%20life%20you%20love.%20Learn%20more.&source=https%3A//liferebootbook.com" target="new">{% include linkedin-inverted.svg %}</a>
    <a href="https://twitter.com/home?status=New%20book%20just%20launched%3A%20Life%20Reboot.%20An%20Inner%20Wisdom%20Guide%20To%20Finding%20Your%20Passion%20and%20Purpose.%20%23LifeRebootBook" target="new">{% include twitter-inverted.svg %}</a>
    <a href="https://pinterest.com/pin/create/button/?url=https://liferebootbook.com&media=https%3A//liferebootbook.com/images/lifereboot-book.png&description=The%20Life%20Reboot%20Book%20by%20author%20Sarah%20Wall" target="new">{% include pinterest-inverted.svg %}</a>
  </div>
</section>
