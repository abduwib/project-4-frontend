import React from "react";

class Home extends React.Component {
    state = {
        recipes:[]
    };
   
    componentDidMount() {
        // AJAX call to the back end to fetch the recipes and then set the state with them
        // for now using an array
        this.setState({
            recipes: [ 
                {name: 'buddha bowl', image: 'https://tse2.mm.bing.net/th?id=OIP.frwuctRxqaHZiAMXi6h9oQHaKT'},
                {name: 'zuchinni burger', image: 'https://www.halfbakedharvest.com/wp-content/uploads/2016/06/Roasted-Zucchini-Burgers-with-Garlic-Whipped-Feta-6.jpg'},
                {name: 'rice paper rolls', image: 'https://veganheaven.org/wp-content/uploads/2016/07/Rice-Paper-Rolls-with-Mango-and-Mint-13.jpg'},
                {name: 'stuffed mushrooms', image: 'https://veganhuggs.com/wp-content/uploads/2017/12/crabless-vegan-stuffed-mushrooms-3-1024x683.jpg'},
                {name: 'muffins', image: 'https://www.halfbakedharvest.com/wp-content/uploads/2015/07/Double-Chocolate-Coconut-oil-Zucchini-Muffins-with-Caramelized-Buckwheat-6.jpg'},
                {name: 'noodles', image: 'https://veganheaven.org/wp-content/uploads/2016/07/Rice-Paper-Rolls-with-Mango-and-Mint-13.jpg'},
            ]
        })
    }
    render() {
      const recipes = this.state.recipes.map(recipe => {
        const customStyle = {
            background: "url(" + recipe.image + ")",
        }
        return (
            <div className= 'col-sm-12 col-md-3 recipe-box m-4' style={customStyle}>
                <div className='foodpic'> 
                    <div>
                        <div className='description'>{recipe.name}</div>
                    </div>
                </div>
            </div> 
        )
      })
      return (
        <div className="container-fluid main-page"> 
            <div className="row">
                <div className="col-3"><button className='b1'> Browse more </button></div>
                <div className="col-9" > <div className="boxes row flex-row-reverse"> {recipes} </div></div>
            </div> 
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 footer"> 
                    {/* logo */}
                </div>
            </div>
            <hr className="footer-line"></hr>
            <div className="row footer">
                <div className="col-3"></div>
                <div className="col-2 ">
                    <div className="footer-widget ">
                        <div className="footer-title">Company</div>
                        <ul className="list-unstyled">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Legal & Privacy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-2 ">
                    <div className="footer-widget ">
                        <div className="footer-title">Quick Links</div>
                        <ul className="list-unstyled">
                            <li><a href="#">News</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-2 ">
                    <div className="footer-widget ">
                        <div className="footer-title">Social</div>
                        <ul className="list-unstyled">
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Google +</a></li>
                            <li><a href="#">Linked In</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-3"></div>
        </div>
    
        </div>
      );
    }
    
  }
  export default Home;
  
  


