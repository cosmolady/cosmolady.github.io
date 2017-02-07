var Categories = [
        {
            id: 0,
            name: 'ALL',
            count: 129
        },
        {
            id: 1,
            name: 'Laptops',
            count: 25
        }, 
        {
            id: 2,
            name: 'Tablets',
            count: 31
        }, 
        {
            id: 3,
            name: 'Smartphones',
            count: 34
        }, 
        {
            id: 4,
            name: 'PCs',
            count: 39
        }
];

var Category = React.createClass({
    getInitialState: function () {
        return {
            checkedValue: 0
        };
    },
    
    handleChange: function (event) {
        console.log(event.target.value);
        this.setState({
            checkedValue: event.target.value
        });
    },
    
    render: function () {
                return (<li className = "category">
                            <div className = "category-info">
                                <input type="radio" name="choice" value={this.props.id} onChange={this.handleChange}/>{this.props.name} ({this.props.count})  
                            </div> 
                        </li>
                );
    }
 });

var CategoryList = React.createClass({
     getInitialState: function () {
         return {
             categories: Categories
         };
     },

     render: function () {
         return ( <div className = "categories"> 
                    <ul className = "category-list"> 
                        {this.state.categories.map(function (el) {
                            return <Category
                                key = {el.id}
                                id = {el.id}
                                name = {el.name}
                                count = {el.count}/>;
                            })
                        } 
                    </ul> 
                </div>
            );
    }
 });

ReactDOM.render(<CategoryList /> ,
                document.getElementById("left-menu")
);