import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import NumbersCard from '../components/numbers-card'
import EventCard from '../components/event-card'
import Slide from '../components/slide'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Layer1Loopy</title>
        <meta property="og:title" content="Layer1Loopy" />
      </Helmet>
      <Navigation></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text heading1">
                <span>Layer1</span>
                <br></br>
                <span></span>
                <span className="home-text04">LOOpy</span>
                <br></br>
                <span>CluB</span>
                <span></span>
              </h1>
              <span className="home-text07">
                <span>GET YOUR TICKETS AT A HALF PRICE UNTIL 10.10.2022.</span>
                <br></br>
                <span>HURRY UP, LIMITED NUMBERS AVAILABLE.</span>
              </span>
              <div className="home-btns-container">
                <button className="home-primary button-primary button-lg button">
                  PRESALE (coming soon)
                </button>
                <button className="button button-outline button-lg-border">
                  DISCORD
                </button>
              </div>
            </div>
            <div className="home-video-container">
              <video
                src
                muted="true"
                poster="/playground_assets/webp.net-gifmaker%20%5B8%5D-1200w.gif"
                autoPlay="true"
                controls="true"
                className="home-video"
              ></video>
            </div>
          </div>
          <div className="home-blue-background"></div>
        </div>
        <div className="home-sponsors section-container">
          <div className="home-max-width1 max-content-container">
            <span className="home-text10">
              <span>LINKS</span>
            </span>
            <div className="home-container01">
              <img
                alt="image"
                src="/playground_assets/raritytools-1200w.png"
                className="home-image"
              />
              <img
                alt="image"
                src="/playground_assets/download%20%5B59%5D-1200w.png"
                className="home-image01"
              />
              <img
                alt="image"
                src="/playground_assets/discord-logo%20%5B1%5D-1200w.png"
                className="home-image02"
              />
              <img
                alt="image"
                src="/playground_assets/logo1-1200w.png"
                className="home-image03"
              />
              <img
                alt="image"
                src="/playground_assets/nftcalendar-logo-1200w.webp"
                className="home-image04"
              />
              <img
                alt="image"
                src="/playground_assets/1_pgz8icshpzk8kf4d2jiteg-1200w.png"
                className="home-image05"
              />
            </div>
          </div>
        </div>
        <div className="home-speakers section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-heading-container">
              <span className="home-text12">
                16 speakers from 7 countries and 3 continents
              </span>
              <h1 className="home-text13 heading2">
                <span>meet our speakers</span>
                <span className="home-text15"></span>
              </h1>
            </div>
            <div className="home-speakers-container">
              <SpeakerCard image_src="fda4d76a-0cb4-4cd6-ba7d-0b9888392c1c"></SpeakerCard>
              <SpeakerCard
                role="digital marketing associate @ WPP"
                lastName="Simpson"
                firstName="Mellisa"
                image_src="/playground_assets/x897ogiekj191-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="VP OF Marketing @ BUZZFEED"
                lastName="tevlenko"
                firstName="alina"
                image_src="/playground_assets/smoking%20loopy-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="HEAD OF DIGITAL @ HUBSPOT"
                lastName="iprovich"
                firstName="gregor"
                image_src="/playground_assets/assistant%20to%20the%20regional%20manager%20loopy-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="marketing officer @ salesforce"
                lastName="daris"
                firstName="damian"
                image_src="/playground_assets/800ogycevq191-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="social media manager @ vodafone"
                lastName="warren"
                firstName="matt"
                image_src="/playground_assets/1cp8ann9h9091-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="creative director @ BBDO"
                lastName="moore"
                firstName="kathie"
                image_src="/playground_assets/whatsapp%20image%202022-05-27%20at%209.49.53%20pm-300h.jpeg"
              ></SpeakerCard>
              <SpeakerCard
                role="CMO @ youtube Europe"
                lastName="chan"
                firstName="erick"
                image_src="/playground_assets/e1d8goimcm191-300h.jpg"
              ></SpeakerCard>
            </div>
          </div>
        </div>
        <div className="home-numbers-banner section-container">
          <div className="home-container02 max-content-container">
            <div className="home-heading-container1">
              <span className="home-text16">
                Our 12-year conference history in sharing digital marketing
                insights
              </span>
              <h1 className="home-text17 heading2">
                <span>market1 SUMMIT IN NUMBERS</span>
              </h1>
            </div>
            <div className="home-numbers-container">
              <NumbersCard></NumbersCard>
              <NumbersCard
                text="years"
                number="12"
                image_src="/playground_assets/interface%20time%20reset-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="total events"
                number="64"
                image_src="/playground_assets/interface%20calendar%20favorite-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="companies"
                number="15,070"
                image_src="/playground_assets/shopping%20bag%20suit%20case-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="cities"
                number="14"
                image_src="/playground_assets/travel%20map%20location%20pin-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="speakers"
                number="1,071"
                image_src="/playground_assets/computer%20voice%20mail-200h.png"
              ></NumbersCard>
            </div>
          </div>
        </div>
        <div className="home-location">
          <div className="home-container03">
            <img
              alt="image"
              src="/playground_assets/whatsapp%20image%202022-05-29%20at%203.21.57%20pm-400h.jpeg"
              className="home-image06"
            />
            <img
              alt="image"
              src="/playground_assets/whatsapp%20image%202022-05-27%20at%2010.34.16%20pm-700w.jpeg"
              className="home-image07"
            />
            <img
              alt="image"
              src="/playground_assets/whatsapp%20image%202022-05-28%20at%206.22.27%20pm%20%5B2%5D-700w.jpeg"
              className="home-image08"
            />
            <img
              alt="image"
              src="/playground_assets/whatsapp%20image%202022-05-28%20at%206.22.27%20pm%20%5B1%5D-700w.jpeg"
              className="home-image09"
            />
            <img
              alt="image"
              src="/playground_assets/whatsapp%20image%202022-05-28%20at%206.22.27%20pm-700w.jpeg"
              className="home-image10"
            />
          </div>
          <div className="home-content-container1 section-container">
            <div className="home-container04">
              <span className="home-text19">MoonMAP</span>
              <span className="home-text20">10% sold</span>
              <div className="home-container05">
                <span className="home-text21">
                  <span>— MOON LOunge</span>
                </span>
              </div>
              <div className="home-container06">
                <span className="home-text23">beautiful, vibrant berlin</span>
                <span className="home-text24">
                  <span>
                    A clubhouse of LRC enthusiasts discussing trades &amp; plans
                    for the moon trip
                  </span>
                </span>
              </div>
            </div>
            <span className="home-text26">25% sold</span>
            <span className="home-text27">
              <span>— MOON LOunge</span>
            </span>
            <div className="home-container07">
              <span className="home-text29">beautiful, vibrant berlin</span>
              <span className="home-text30">
                <span>
                  A clubhouse of LRC enthusiasts discussing trades &amp; plans
                  for the moon trip
                </span>
              </span>
            </div>
            <span className="home-text32">50% sold</span>
            <span className="home-text33">
              <span>— MOON LOunge</span>
            </span>
            <div className="home-container08">
              <span className="home-text35">beautiful, vibrant berlin</span>
              <span className="home-text36">
                <span>
                  A clubhouse of LRC enthusiasts discussing trades &amp; plans
                  for the moon trip
                </span>
              </span>
            </div>
            <span className="home-text38">69% sold</span>
            <span className="home-text39">
              <span>— MOON LOunge</span>
            </span>
            <div className="home-container09">
              <span className="home-text41">beautiful, vibrant berlin</span>
              <span className="home-text42">
                <span>
                  A clubhouse of LRC enthusiasts discussing trades &amp; plans
                  for the moon trip
                </span>
              </span>
            </div>
            <span className="home-text44">75% sold</span>
            <span className="home-text45">
              <span>— MOON LOunge</span>
            </span>
            <div className="home-container10">
              <span className="home-text47">beautiful, vibrant berlin</span>
              <span className="home-text48">
                <span>
                  A clubhouse of LRC enthusiasts discussing trades &amp; plans
                  for the moon trip
                </span>
              </span>
            </div>
            <span className="home-text50">100% sold</span>
            <span className="home-text51">
              <span>— MOON LOunge</span>
            </span>
            <div className="home-container11">
              <span className="home-text53">beautiful, vibrant berlin</span>
              <span className="home-text54">
                <span>
                  A clubhouse of LRC enthusiasts discussing trades &amp; plans
                  for the moon trip
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="home-agenda section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-heading-container2">
              <h1 className="home-text56 heading2">
                <span>ROADMAP</span>
              </h1>
              <span className="home-text58">
                more announcements are coming soon
              </span>
            </div>
            <div className="home-events-container">
              <div className="home-column">
                <div className="home-column-header">
                  <span className="home-text59">
                    <span>tuesday - 7.03</span>
                  </span>
                  <div className="home-line"></div>
                </div>
                <EventCard></EventCard>
                <EventCard
                  title="tik tok or what?"
                  image_src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="sales + marketing duo"
                  image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="best practices for more\ndata-driven results"
                  image_src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
              </div>
              <div className="home-column1">
                <div className="home-column-header1">
                  <span className="home-text61">
                    <span>wednesday - 8.03</span>
                  </span>
                  <div className="home-line1"></div>
                </div>
                <EventCard
                  title="digital marketing strategies"
                  image_src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="a new era of social media"
                  image_src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="growing a remote team"
                  image_src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="beyond the metaverse"
                  image_src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwNHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY4MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-workshops">
          <div className="home-content-container2">
            <div className="home-container12">
              <h1 className="home-text63 heading2">
                <span>
                  register for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text66">super insightful</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  workshops for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>your team</span>
              </h1>
              <span className="home-text72">
                get early discounts and group discounts
              </span>
              <span className="home-text73">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
              <button className="button button-md button-outline">
                learn more
              </button>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxidXNpbmVzc3xlbnwwfHx8fDE2NDM3MzQ3MjI&amp;ixlib=rb-1.2.1&amp;w=1500"
            className="home-image11"
          />
        </div>
        <div className="home-previous-events section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-heading-container3">
              <h1 className="home-text74 heading2">
                <span>previous events</span>
              </h1>
              <span className="home-text76">
                Take a tour of our previous conferences
              </span>
            </div>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide rootClassName="slide-root-class-name4"></Slide>
            <Slide
              heading="Slide #2"
              rootClassName="slide-root-class-name1"
            ></Slide>
            <Slide
              heading="Slide #3"
              rootClassName="slide-root-class-name"
            ></Slide>
            <Slide
              heading="Slide #4"
              rootClassName="slide-root-class-name3"
            ></Slide>
            <Slide
              heading="Slide #5"
              rootClassName="slide-root-class-name2"
            ></Slide>
          </div>
          <div className="home-slider-controls">
            <div data-action="previousSlide" className="home-go-left">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <div data-action="nextSlide" className="home-go-right">
              <svg viewBox="0 0 1024 1024" className="home-icon2">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Home
