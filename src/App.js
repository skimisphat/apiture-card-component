import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
    <section className="section">
    <div class="wp-block-columns has-3-columns">
      <Card
        variant="icon" 
        image="http://placekitten.com/100/100"
        title="Tailor the Experience"
        tag=""
        bodyText="Offer in-demand features based on the unique needs of your community. Through integrations with hundreds of fintech partners and more than 40 cores, we help you attract and retain users by giving you choice and flexibility balanced with the speed to market you need in today’s competitive environment."
        linkUrl="#"
        linkText="Learn More"
      />
      <Card
        variant="icon" 
        image="https://www.apiture.com/wp-content/uploads/2022/01/Apiture_Purchased-Icon-Set_Processing-BW-v4-MergedShapes_Original-Icons-Building-Blocks.svg"
        title="Tailor the Experience"
        tag=""
        bodyText="Offer in-demand features based on the unique needs of your community. Through integrations with hundreds of fintech partners and more than 40 cores, we help you attract and retain users by giving you choice and flexibility balanced with the speed to market you need in today’s competitive environment."
        linkUrl="#"
        linkText="Learn More"
      />
      <Card
        variant="icon" 
        image="../images/icon1.svg"
        title="Tailor the Experience"
        tag=""
        bodyText="Offer in-demand features based on the unique needs of your community. Through integrations with hundreds of fintech partners and more than 40 cores, we help you attract and retain users by giving you choice and flexibility balanced with the speed to market you need in today’s competitive environment."
        linkUrl="#"
        linkText="Learn More"
      />
    </div>
    </section>
    <section className="section">
    <div class="wp-block-columns has-3-columns">
    <Card
        variant="text" // this is for cards that do not have a visual component, so great for links to blogs of whitepapers 
        title="Gain the Upper Hand Against Fraud with a Proactive Approach"
        tag="FRAUD PREVENTION"
        bodyText="Chris Babcock, CEO of Apiture, a leading digital banking solutions provider, has been named an Innovator in the Wilmington Business Journal’s 2023 WilmingtonBiz Top 100...." //ok, truncate programatically to make it look like WP
        linkUrl="https://www.apiture.com/resources/blog/gain-the-upper-hand-against-fraud-with-a-proactive-approach/"
        linkText="Learn More" // has arrow icon, but text for screen readers
      />
      <Card
        variant="text" // this is for cards that do not have a visual component, so great for links to blogs of whitepapers 
        title="Gain the Upper Hand Against Fraud with a Proactive Approach"
        tag="FRAUD PREVENTION"
        bodyText="Chris Babcock, CEO of Apiture, a leading digital banking solutions provider, has been named an Innovator in the Wilmington Business Journal’s 2023 WilmingtonBiz Top 100...." //ok, do the elipses programatically to make it look like WP
        linkUrl="https://www.apiture.com/resources/blog/gain-the-upper-hand-against-fraud-with-a-proactive-approach/"
        linkText="Learn More" // has arrow icon, but text for screen readers
      />
      <Card
        variant="text" // this is for cards that do not have a visual component, so great for links to blogs of whitepapers 
        title="Gain the Upper Hand Against Fraud with a Proactive Approach"
        tag="FRAUD PREVENTION"
        bodyText="Chris Babcock, CEO of Apiture, a leading digital banking solutions provider, has been named an Innovator in the Wilmington Business Journal’s 2023 WilmingtonBiz Top 100...." //ok, do the elipses programatically to make it look like WP
        linkUrl="https://www.apiture.com/resources/blog/gain-the-upper-hand-against-fraud-with-a-proactive-approach/"
        linkText="Learn More" // has arrow icon, but text for screen readers
      />
    </div>
    </section>
    </div>
  );
}

export default App;
