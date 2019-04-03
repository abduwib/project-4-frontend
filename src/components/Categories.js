import React, {Component} from "react";

class Categories extends React.Component {
    state = {
        latestrecipes:[]
    };
   
    componentDidMount() {
        // AJAX call to the back end to fetch the recipes and then set the state with them
        // for now using an array
        this.setState({
            recipes: [ 
                {name: 'Buddha Bowl',
                category: "recent",
                 image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' 
                },
                {name: 'Roasted Zuchinni Burger', 
                category: "recent",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {name: 'Rice Paper Rolls', 
                category: "recent",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' 
                },
                {name: 'Stuffed Mushrooms', 
                category: "recent",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' 
                },
                {name: 'Muffins',
                category: "recent", 
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' 
                },
                {name: 'Noodles', 
                category: "recent",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' 
                },

                {name: 'Pancakes', 
                category: "quick",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: 'Waffles', 
                category: "quick",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: 'Muffins', 
                category: "quick",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: 'Wedges', 
                category: "quick",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: '', 
                category: "quick",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: '', 
                category: "quick",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },

                {name: 'Stir Fry', 
                category: "asian",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: 'Dumplings', 
                category: "asian",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: 'Sushi', 
                category: "asian",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: 'Tofu', 
                category: "asian",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: '', 
                category: "asian",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: '', 
                category: "asian",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''},

                {name: '', 
                category: "dessert",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: '', 
                category: "dessert",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: '', 
                category: "dessert",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: '', 
                category: "dessert",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: '', 
                category: "dessert",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: '', 
                category: "dessert",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },

                {name: 'Acai Bowl', 
                category: "breakfast",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: 'Tofu Scramble', 
                category: "breakfast",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''},
                {name: '', 
                category: "breakfast",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: '', 
                category: "breakfast",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: '', 
                category: "breakfast",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: '', 
                category: "breakfast",
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },

                {name: 'special',
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: 'special', 
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: 'special', 
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: 'special', 
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: 'special', 
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
                {name: 'special', 
                image: 'https://i.pinimg.com/originals/bd/9f/93/bd9f93754d574068d7521cf88bf66083.jpg', 
                description: ''
                },
            ]
        })
    }
    render() {
        
        <div className='col-3 fixedSidebar'>
            <h1>Recipes</h1>
            <h3>Home</h3>
            <h3>Search</h3>
            <h3>Your Recipe List</h3>
            <h3>Latest Articles</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>

        const recipes = this.state.recipes.map(recipe => {
            const thumbnails = {

                background: "url(" + recipe.image + ") ",
                backgroundSize: "cover"
            }
            return (
                <div className= 'col-9 row-6' style={thumbnails}>
                <h2>{recipe.category}</h2>
                    <div className='thumbnail'> 
                        <div>
                            <div className='recipetitle'>{recipe.name}</div>
                        </div>
                    </div>
                </div> 
                <hr/>
            )
          }),
        

        return (
        


    
      
 
        )
    }
      


}
export default Categories;
