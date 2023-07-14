import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {

  articles=[
    {
      "source": {
      "id": null,
      "name": "Android Central"
      },
      "author": "tips@androidcentral.com (Vishnu Sarangapurkar)",
      "title": "Google is reportedly looking into building Pixel phones in India",
      "description": "Google currently relies on China and Vietnam to produce its Pixel devices. Due to the ongoing trade war, the company is looking for alternatives starting with India.",
      "url": "https://www.androidcentral.com/phones/google-reportedly-seeks-alternative-pixel-production-india",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/9zzBNRuBw3bxP48ug2pvoL-1200-80.jpg",
      "publishedAt": "2023-06-21T00:20:32Z",
      "content": "<ul><li>Google is reportedly looking to follow Apple and produce some of its phones in India.</li><li>The company is allegedly in talks with manufacturing plants like Lava, Dixon, and Foxconn.</li><l… [+1947 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Slashdot.org"
      },
      "author": "BeauHD",
      "title": "iOS 17 Will Decode Your Car's Dashboard Symbols and Warning Lights",
      "description": "According to a Reddit user, Apple's Visual Look Up feature has been expanded in iOS 17 to include all of the various symbols on a vehicle's dashboard -- \"everything from the labels used for HVAC controls, to the warning lights that only turn on when there's a…",
      "url": "https://apple.slashdot.org/story/23/06/20/2119239/ios-17-will-decode-your-cars-dashboard-symbols-and-warning-lights",
      "urlToImage": "https://a.fsdn.com/sd/topics/ios_64.png",
      "publishedAt": "2023-06-21T00:45:00Z",
      "content": "Apple introduced a feature with iOS 15 called Visual Look Up that uses AI to analyze photos taken with the iPhone's camera and attempt to decipher them, providing more information about what's in the… [+800 chars]"
      },
      {
      "source": {
      "id": "business-insider",
      "name": "Business Insider"
      },
      "author": "George Glover",
      "title": "Apple isn't worth its near-$3 trillion valuation - and its stock has only surged this year because it's a safety play, CIO says",
      "description": "The tech giant's shares have jumped 42% in 2023, putting a $3 trillion market capitalization within reach.",
      "url": "https://markets.businessinsider.com/news/stocks/apple-3-trillion-valuation-safety-play-tech-stocks-investing-analysis-2023-6",
      "urlToImage": "https://i.insider.com/6492c14365b9ce0018a44247?width=1200&format=jpeg",
      "publishedAt": "2023-06-21T09:56:06Z",
      "content": "Tim Cook standing next to the new Apple Vision Pro headset.Justin Sullivan/Getty Images\r\n<ul>\n<li>Apple isn't worth its current valuation, according to Short Hills managing partner Steve Weiss.</li>\n… [+2399 chars]"
      },
  ]

  constructor()
  {
    super();
    this.state={
      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=426f926c08104d9cae3d21638cf2ad9a";
    let data=await fetch(url);
    let parsedata=await data.json()
    console.log(parsedata); 
    this.setState({articles:parsedata.articles})
  }
  
  render() {
    return (
      <div className="cont py-3 px-3 bg-light vh-100 mx-3">
        <h2>Recent Headlines</h2>
        <div className='row'>
        {this.state.articles?.map((element)=>{
          return <div className="col-md-4 my-3" key={element.url}>
        <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsurl={element.url}/> 
        </div>
        })}
        </div>
      </div>
    )
  }
}
