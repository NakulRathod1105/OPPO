import React from "react";
import { useNavigate } from "react-router-dom";
import BackToTopButton from "./HtAf/BackToTopButton";

export default function Coloros() {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate("/");
  };

  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12 text-center">
          <h1 className="display-5 font-weight-bold text-primary mb-3">
            Oppo ColorOS Features
          </h1>
          <p className="lead mb-4">
            Discover the stunning features of Oppo ColorOS. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Totam, error voluptatum?
            Explicabo cum incidunt dolorum quae, quasi quidem totam, esse
            excepturi sit tempora laborum qui necessitatibus cupiditate voluptas
            magni numquam.
          </p>
          <button
            className="btn btn-primary btn-lg rounded-pill"
            onClick={handleExploreMore}
          >
            Explore More
          </button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-12 col-md-12 mb-4">
          <div className="card h-100">
            <img
              src="https://image.oppo.com/content/dam/oppo/en/mkt/newsroom/story/10-underrated-coloros-features-you-should-be-using/img-01-v2.png"
              className="card-img-top"
              alt="ColorOS Feature 1"
            />
            <div className="card-body">
              <h5 className="card-title">Feature 1</h5>
              <p className="card-text">
                Want to skip meandering through the home screen while trying to
                find what you’re looking for? With Fingerprint Quick Launch
                activated, you can assign your most-used apps to the mini menu,
                then quickly access them with just a press of your finger.
                Perfect if you’ve got a messy home screen but only regularly use
                a select few apps.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 mb-4">
          <div className="card h-100">
            <img
              src="https://image.oppo.com/content/dam/oppo/en/mkt/newsroom/story/10-underrated-coloros-features-you-should-be-using/img-02-v2.png"
              className="card-img-top"
              alt="ColorOS Feature 2"
            />
            <div className="card-body">
              <h5 className="card-title">Feature 2</h5>
              <p className="card-text">
                With Smart Sidebar, you can also swipe left to quickly access
                some tools. You could screen translate a webpage, snap a
                screenshot, or open a Notes window. Of course, it’s totally
                customizable as well, so you can select your most useful app
                sidekicks ready to help you at a moment’s notice.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 mb-4">
          <div className="card h-100">
            <img
              src="https://image.oppo.com/content/dam/oppo/en/mkt/newsroom/story/10-underrated-coloros-features-you-should-be-using/img-03-v2.png"
              className="card-img-top"
              alt="ColorOS Feature 3"
            />
            <div className="card-body">
              <h5 className="card-title">Feature 3</h5>
              <p className="card-text">
                Need to browse your phone, but you’re holding a hot americano?
                You’re busy - we get it. Fortunately, Icon Pull-down lets you
                swipe down and bunch the app icons together, so you can easily
                tap what you need with one hand. Multitasking has never been
                easier.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 mb-4">
          <div className="card h-100">
            <img
              src="https://image.oppo.com/content/dam/oppo/en/mkt/newsroom/story/10-underrated-coloros-features-you-should-be-using/img-04-v2.png"
              className="card-img-top"
              alt="ColorOS Feature 4"
            />
            <div className="card-body">
              <h5 className="card-title">Feature 4</h5>
              <p className="card-text">
                In a similar vein, Flexible Windows lets you display a small
                pop-up window on top of your current display. Perfect for
                watching a YouTube video while replying to a text. What about
                productivity you say? How about joining a video call while
                you're writing a report? It’s a great window of opportunity.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 mb-4">
          <div className="card h-100">
            <img
              src="https://image.oppo.com/content/dam/oppo/en/mkt/newsroom/story/10-underrated-coloros-features-you-should-be-using/img-05-v2.png"
              className="card-img-top"
              alt="ColorOS Feature 5"
            />
            <div className="card-body">
              <h5 className="card-title">Feature 5</h5>
              <p className="card-text">
                If you’ve been blasting all these unsung functions, you might be
                worried about battery usage. Don’t fret – ColorOS will prompt
                you to switch to Power Saving Mode once your battery reaches 15%
                (this is customizable, though). Once activated, the power-saving
                optimizations include: dimming the screen brightness, disabling
                background syncs, lowering the screen refresh rate, and changing
                the auto screen-off time to 15 seconds. Make that battery last.
                <br />
                <br />
                Bonus! Super Power Saving Mode If it’s really an emergency,
                level up and use SUPER Power Saving Mode. Maybe you’re on a long
                bus ride with no power bank, hiking a mountain trail, or lost in
                the desert. Super Power Saving Mode makes additional changes,
                including killing all apps except for a select few of your
                choosing. It also notifies you how long your battery will last
                with the mode active.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 mb-4">
          <div className="card h-100">
            <img
              src="https://image.oppo.com/content/dam/oppo/en/mkt/newsroom/story/10-underrated-coloros-features-you-should-be-using/img-06-v2.png"
              className="card-img-top"
              alt="ColorOS Feature 6"
            />
            <div className="card-body">
              <h5 className="card-title">Feature 6</h5>
              <p className="card-text">
                There are more modes to tinker with in ColorOS, so why not
                switch it up? Simple Mode enlarges the text size and app icons
                while also increasing the sound volume. This makes navigation
                easier and more accessible – particularly effective for users
                with visual or hearing impairments. The bigger and bolder
                aesthetic could be a stylistic choice, as well.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 mb-4">
          <div className="card h-100">
            <img
              src="https://image.oppo.com/content/dam/oppo/en/mkt/newsroom/story/10-underrated-coloros-features-you-should-be-using/img-07-v2.png"
              className="card-img-top"
              alt="ColorOS Feature 7"
            />
            <div className="card-body">
              <h5 className="card-title">Feature 7</h5>
              <p className="card-text">
                An OS should be adaptive and flexible depending on the user, and
                users are getting younger and younger. Good habits start early,
                so if your child uses your phone, turn on Kid Space. This
                feature reminds young users to sit further away from the screen,
                correct their posture, and move to a brighter space if the
                ambient light is dim. It also turns on Eye Comfort Mode to
                protect their peepers.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 mb-4">
          <div className="card h-100">
            <img
              src="https://image.oppo.com/content/dam/oppo/en/mkt/newsroom/story/10-underrated-coloros-features-you-should-be-using/img-08-v2.png"
              className="card-img-top"
              alt="ColorOS Feature 8"
            />
            <div className="card-body">
              <h5 className="card-title">Feature 8</h5>
              <p className="card-text">
                Now let’s talk about protecting privacy. Auto Pixelate will blur
                out names and profile pictures in chat screenshots with just one
                tap. Convenient for when you want to share a convo but don’t
                want to name and shame. You can easily undo the pixelation with
                another tap if you decide you DO actually want to name and
                shame.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-md-12 mb-4">
          <div className="card h-100">
            <img
              src="https://image.oppo.com/content/dam/oppo/en/mkt/newsroom/story/10-underrated-coloros-features-you-should-be-using/img-09-v2.png?"
              className="card-img-top"
              alt="ColorOS Feature 8"
            />
            <div className="card-body">
              <h5 className="card-title">Feature 9</h5>
              <p className="card-text">
                So, you’ve played around and had fun with all these special
                features. Maybe you’ve adjusted your settings and gotten your
                home screen just the way you like it. If you activate Lock Home
                Screen Layout, your personalized setup becomes fixed and
                immovable, so you won’t accidentally mess up your careful
                planning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BackToTopButton/>
    </div>
  );
}
