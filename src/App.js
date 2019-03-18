import React,{Component} from 'react';
import colors from './colors.js';
import Footer from './footer.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      QuoteList: '',
      AuthorList: '',
      quotes: [],
      authors: [],

    }
  }
  componentDidMount(){
    let rand= (Math.round(Math.random()*102));
     fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          
          quotes: data.quotes.map(val=>val.quote),
          authors: data.quotes.map(val=>val.author),
          QuoteList: data.quotes[rand].quote,
          AuthorList: data.quotes[rand].author
        })
       
      })
      
 
  }
  toggleButton=()=>{

      let rand=(Math.round(Math.random()*102));
      let randc=(Math.round(Math.random()*3))
      document.querySelector("body").style.background = colors[randc];
      document.querySelector("body").style.transition = "background 2s";


      this.setState({ 
        QuoteList:this.state.quotes[rand],
        AuthorList:this.state.authors[rand]
      })
     
  }
  render(){
 
    return(

       <div className="wrapper">
        <div id="quote-box">
        <div id="text">{this.state.QuoteList}
        </div>
        <div id="author">-- 
   {this.state.AuthorList} 
          </div>
       <div className="buttons">
 <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.state.QuoteList}--${this.state.AuthorList}`} target="_blank" rel="noopener noreferrer" ><i class="fab fa-twitter"></i></a>
 <button id="new-quote" onClick={this.toggleButton}>New quote</button>
      </div>
   
        </div>
        <Footer/>
        
      
       </div>
    )
  }
}


export default App;
