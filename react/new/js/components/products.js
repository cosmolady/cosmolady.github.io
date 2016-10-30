 var LineItems = [
     {
         id: 1,
         name: 'Darth Vader',
         phoneNumber: '+250966666666',
         image: 'http://cs7.pikabu.ru/images/big_size_comm_an/2014-03_7/13962622876915.gif',
         adress: 'Earth',
         email: 'dart@dart.dart'
            }, {
         id: 2,
         name: 'Princess Leia',
         phoneNumber: '+250966344466',
         image: 'http://images6.fanpop.com/image/photos/33100000/CARRIE-FISHER-anakin-vader-and-princess-leia-33186069-190-149.gif',
         adress: 'Earth',
         email: 'princess@princess.princess'
            }, {
         id: 3,
         name: 'Luke Skywalker',
         phoneNumber: '+250976654433',
         image: 'https://images.hellogiggles.com/uploads/2016/08/30215917/aRSgebS.gif',
         adress: 'Earth',
         email: 'luke@luke.luke'
            }, {
         id: 4,
         name: 'Chewbacca',
         phoneNumber: '+250456784935',
         image: 'https://media.giphy.com/media/RUUdVZqwpfTRS/giphy.gif',
         adress: 'Earth',
         email: 'chewbacca@chewbacca.chewbacca'
            }
        ];

 var Product = React.createClass({
     getInitialState: function () {
         return {
             isOpened: false
         };
     },
     handleClick: function () {
         this.setState({
             isOpened: !this.state.isOpened
         });
     },
     render: function () {
         if (this.state.isOpened) {
             var productModal = <div className = "product"
                                        onClick = {this.handleClick}>
                                    <img className = "product-image"
                                        src = {this.props.image}
                                    />
                                    <div className = "product-info" >
                                        <div className = "product-name"> 
                                            {this.props.name} 
                                        </div> 
                                        <div className = "product-number"> 
                                            {this.props.phoneNumber} 
                                        </div> 
                                        <div className = "product-adress"> 
                                            {this.props.adress} 
                                        </div> 
                                        <div className = "product-email"> 
                                            {this.props.email} 
                                        </div> 
                                    </div > 
                                </div>
            return ( <ProductModal product = {productModal}
                                productsClick = {this.handleClick}/>
            );
        } else {
            return (<li className = "product"
                        onClick = {this.handleClick}>
                        <img className = "product-image"
                                src = {this.props.image}
                        />
                        <div className = "product-info">
                            <div className = "product-name"> 
                                {this.props.name}
                            </div> 
                            <div className = "product-number" > 
                                {this.props.phoneNumber} 
                            </div> 
                        </div> 
                    </li>
            );
        }
    }
 });

 var ProductModal = React.createClass({
     getInitialState: function () {
         return {
             showModal: true
         };
     },
     close: function () {
         this.setState({
             showModal: false
         });
         this.props.productsClick();
     },
     render: function () {
         var Modal = ReactBootstrap.Modal;
         var Button = ReactBootstrap.Button;
         return ( <Modal show = {this.state.showModal}
                    onHide = {this.close} >
                    <Modal.Header closeButton>
                        <Modal.Title> Modal heading < /Modal.Title> 
                    </Modal.Header> 
                    <Modal.Body> 
                        {this.props.product} 
                    </Modal.Body> 
                    <Modal.Footer> 
                        <Button onClick = {this.close}> Close </Button> 
                    </Modal.Footer> 
                 </Modal>
            );
        }
 });

 var ProductsList = React.createClass({
     getInitialState: function () {
         return {
             displayedProducts: LineItems
         };
     },

     handleSearch: function (event) {
         var searchQuery = event.target.value.toLowerCase();
         var displayedProducts = LineItems.filter(function (el) {
             var searchValue = el.name.toLowerCase();
             return searchValue.indexOf(searchQuery) !== -1;
         });

         this.setState({
             displayedProducts: displayedProducts
         });
     },

     render: function () {
         return ( <div className = "products">
                    <input type = "text"
                        placeholder="Поиск"
                        name="search"
                        className = "search-field"
                        onChange = {this.handleSearch}/> 
                    <label for="search"
                        className = "search-label">
                    </label>
                    <ul className = "products-list"> 
                        {this.state.displayedProducts.map(function (el) {
                            return <Product
                                key = {el.id}
                                name = {el.name}
                                phoneNumber = {el.phoneNumber}
                                image = {el.image}
                                adress = {el.adress}
                                email = {el.email}/>;
                            })
                        } 
                    </ul> 
                </div>
            );
    }
 });

ReactDOM.render(<ProductsList /> ,
                document.getElementById("content")
);