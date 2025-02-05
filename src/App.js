import Card from "./components/Card";

function App() {
  return (
    <div className="App">
    <section className="section">
      <div className="wp-block-columns has-3-columns">
        <div className="column">
          <Card
            variant="icon" 
            image="https://www.apiture.com/wp-content/uploads/2022/01/Apiture_Purchased-Icon-Set_Processing-BW-v4-MergedShapes_Original-Icons-Growth.svg"
            title="Transform Your Business"
            bodyText="Offer in-demand features based on the unique needs of your community. Through integrations with hundreds of fintech partners and more than 40 cores, we help you attract and retain users by giving you choice and flexibility balanced with the speed to market you need in today’s competitive environment."
            linkUrl="#"
            linkText="Learn More"
          />
        </div>
        <div className="column">
          <Card
            variant="icon" 
            image="https://www.apiture.com/wp-content/uploads/2022/01/Apiture_Purchased-Icon-Set_Processing-BW-v4-MergedShapes_Original-Icons-Building-Blocks.svg"
            title="Tailor the Experience"
            bodyText="Offer in-demand features based on the unique needs of your community. Through integrations with hundreds of fintech partners and more than 40 cores, we help you attract and retain users by giving you choice and flexibility balanced with the speed to market you need in today’s competitive environment."
            linkUrl="#"
            linkText="Learn More"
          />
        </div>
        <div className="column">
          <Card
            variant="icon" 
            image="https://www.svgrepo.com/show/476043/cat.svg"
            title="See our API docs"
            bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada ante et sem dictum interdum vitae sed felis. Curabitur a est libero. Praesent finibus in tortor vel volutpat. Nullam euismod luctus laoreet. Phasellus vehicula facilisis tempus. Donec id ligula eu lacus vulputate mollis ut eu nunc. Phasellus suscipit eget ante pellentesque condimentum. Sed ligula leo, placerat commodo mi eu, imperdiet eleifend lorem. "
            linkUrl="https://dx.apiture.com/docs/api/getting-started/"
            linkText="Learn More"
          />
        </div>
      </div>
    </section>
    <section className="section">
      <div class="wp-block-columns has-3-columns">
        <div className="column">
          <Card
              variant="text" // this is for cards that do not have a visual component, so great for links to blogs or whitepapers 
              title="Gain the Upper Hand Against Fraud with a Proactive Approach"
              tag="FRAUD PREVENTION"
              bodyText="Chris Babcock, CEO of Apiture, a leading digital banking solutions provider, has been named an Innovator in the Wilmington Business Journal’s 2023 WilmingtonBiz Top 100...."
              linkUrl="https://www.apiture.com/resources/blog/gain-the-upper-hand-against-fraud-with-a-proactive-approach/"
              linkText="Learn More"  // will have arrow icon, but text for screen readers
            />
          </div>
          <div className="column">
            <Card
              variant="text" 
              title="Gain the Upper Hand Against Fraud with a Proactive Approach"
              tag="FRAUD PREVENTION"
              bodyText="Chris Babcock, CEO of Apiture, a leading digital banking solutions provider, has been named an Innovator in the Wilmington Business Journal’s 2023 WilmingtonBiz Top 100...." 
              linkUrl="https://www.apiture.com/resources/blog/gain-the-upper-hand-against-fraud-with-a-proactive-approach/"
              linkText="Learn More"
            />
          </div>
          <div className="column">
          <Card
            variant="text" 
            title="Lorem Ipsum Dolor Sit Amet Consectetur"
            tag="Sample Tag"
            bodyText="Nullam malesuada ante et sem dictum interdum vitae sed felis. Curabitur a est libero. Praesent finibus in tortor vel volutpat. Nullam euismod luctus laoreet. Phasellus vehicula facilisis tempus. Donec id ligula eu lacus vulputate mollis ut eu nunc. Phasellus suscipit eget ante pellentesque condimentum. Sed ligula leo, placerat commodo mi eu, imperdiet eleifend lorem. Fusce dignissim neque vitae malesuada iaculis." //ok, do the elipses programatically to make it look like WP
            linkUrl="https://www.apiture.com/resources/blog/gain-the-upper-hand-against-fraud-with-a-proactive-approach/"
            linkText="Learn More"
          />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
