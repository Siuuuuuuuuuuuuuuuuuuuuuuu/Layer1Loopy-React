import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import NumbersCard from '../components/numbers-card'
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
                <span>
                  A community of loopring enthusiasts who wanna
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  share the cost, security &amp; SPEED benefits of Layer2 with
                  the bigger ethereum community at large &amp; wanna bring to
                  notice to a larger subset of nft enthusiasts the upcoming
                  zkrollup evm upgrades &amp; more
                </span>
                <span></span>
                <span></span>
                <span></span>
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
                autoPlay
                className="home-video"
              ></video>
            </div>
          </div>
          <div className="home-blue-background"></div>
        </div>
        <div className="home-sponsors section-container">
          <div className="home-max-width1 max-content-container">
            <span className="home-text13">
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
              <span className="home-text15">ERC1155 Minted on lrc</span>
              <h1 className="home-text16 heading2">
                <span>GENESIS LOOPIES</span>
              </h1>
            </div>
            <div className="home-speakers-container">
              <SpeakerCard
                image_src="/playground_assets/u0jhmvi44uy811-1500w.jpg"
                firstName="Hellboi"
                lastName="loopy"
                role="too hot for global warming"
              ></SpeakerCard>
              <SpeakerCard
                role="avid consumer of apples"
                lastName="loopy"
                firstName="Dr"
                image_src="/playground_assets/x897ogiekj191-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="cliche detective movie binger"
                lastName="loopy"
                firstName="european"
                image_src="/playground_assets/smoking%20loopy-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="climbing the ladder 1 rollup at a time"
                lastName="loopy"
                firstName="corporate"
                image_src="/playground_assets/assistant%20to%20the%20regional%20manager%20loopy-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="loves pastry &amp; copypasta"
                lastName="loopy"
                firstName="chef"
                image_src="/playground_assets/800ogycevq191-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="timetraveller, rickroller"
                lastName="loopy"
                firstName="scientist"
                image_src="/playground_assets/1cp8ann9h9091-300h.jpg"
              ></SpeakerCard>
              <SpeakerCard
                role="4 time alpine skier world champ"
                lastName="loopy"
                firstName="lindsey"
                image_src="/playground_assets/whatsapp%20image%202022-05-27%20at%209.49.53%20pm-300h.jpeg"
              ></SpeakerCard>
              <SpeakerCard
                role="part-time parkour playa"
                lastName="loopy"
                firstName="ninja"
                image_src="/playground_assets/e1d8goimcm191-300h.jpg"
              ></SpeakerCard>
            </div>
          </div>
        </div>
        <div className="home-numbers-banner section-container">
          <div className="home-container02 max-content-container">
            <div className="home-heading-container1">
              <span className="home-text18">
                Our 12-year conference history in sharing digital marketing
                insights
              </span>
              <h1 className="home-text19 heading2">
                <span>market1 SUMMIT IN NUMBERS</span>
              </h1>
            </div>
            <div className="home-numbers-container">
              <NumbersCard number="2222" text="loopys"></NumbersCard>
              <NumbersCard
                text="2022"
                number="6/9"
                image_src="/playground_assets/interface%20time%20reset-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="PreSale"
                number="0.01 ETH"
                image_src="/playground_assets/interface%20calendar%20favorite-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="PUBLIC SALE"
                number="0.02 ETH"
                image_src="/playground_assets/shopping%20bag%20suit%20case-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="Ethereum"
                number="2.0"
                image_src="/playground_assets/travel%20map%20location%20pin-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="whitelist"
                number="690"
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
              src="/playground_assets/whatsapp%20image%202022-05-29%20at%203.17.41%20pm-400h.jpeg"
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
              <span className="home-text21">MoonMAP</span>
              <span className="home-text22">10% sold</span>
              <div className="home-container05">
                <span className="home-text23">
                  <span>— MOON LOunge</span>
                </span>
              </div>
              <div className="home-container06">
                <span className="home-text25">beautiful, vibrant berlin</span>
                <span className="home-text26">
                  <span>
                    A clubhouse of LRC enthusiasts discussing trades &amp; plans
                    for the moon trip
                  </span>
                </span>
              </div>
            </div>
            <span className="home-text28">25% sold</span>
            <span className="home-text29">
              <span>— MERCH</span>
            </span>
            <div className="home-container07">
              <span className="home-text31">beautiful, vibrant berlin</span>
              <span className="home-text32">
                <span>
                  A clubhouse of LRC enthusiasts discussing trades &amp; plans
                  for the moon trip
                </span>
              </span>
            </div>
            <span className="home-text34">50% sold</span>
            <span className="home-text35">
              <span>— Metal prints</span>
            </span>
            <div className="home-container08">
              <span className="home-text37">beautiful, vibrant berlin</span>
              <span className="home-text38">
                <span>
                  A clubhouse of LRC enthusiasts discussing trades &amp; plans
                  for the moon trip
                </span>
              </span>
            </div>
            <span className="home-text40">69% sold</span>
            <span className="home-text41">
              <span>— 3D loopys</span>
            </span>
            <div className="home-container09">
              <span className="home-text43">beautiful, vibrant berlin</span>
              <span className="home-text44">
                <span>
                  A clubhouse of LRC enthusiasts discussing trades &amp; plans
                  for the moon trip
                </span>
              </span>
            </div>
            <span className="home-text46">75% sold</span>
            <span className="home-text47">
              <span>— crypto corner</span>
            </span>
            <div className="home-container10">
              <span className="home-text49">beautiful, vibrant berlin</span>
              <span className="home-text50">
                <span>
                  A clubhouse of LRC enthusiasts discussing trades &amp; plans
                  for the moon trip
                </span>
              </span>
            </div>
            <span className="home-text52">100% sold</span>
            <span className="home-text53">
              <span>— RED CROSS Charity</span>
            </span>
            <div className="home-container11">
              <span className="home-text55">
                10% of the funds go to RC Charity
              </span>
              <span className="home-text56">
                <span>About 2-4 eth of the 22-44ETH project</span>
                <br></br>
                <span>dep</span>
              </span>
            </div>
          </div>
        </div>
        <div className="home-workshops">
          <div className="home-content-container2">
            <div className="home-container12">
              <h1 className="home-text60 heading2">
                <span>
                  register for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text63">
                  8 layer
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
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
              <span className="home-text67">
                get early discounts and group discounts
              </span>
              <span className="home-text68">
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
            src="/playground_assets/u0jhmvi44uy811-1500w.jpg"
            className="home-image11"
          />
        </div>
        <div className="home-previous-events section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-heading-container2">
              <h1 className="home-text69 heading2">
                <span>previous events</span>
              </h1>
              <span className="home-text71">
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
