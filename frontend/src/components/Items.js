// import React, { Component } from 'react';

// class Items extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       categories: [],
//     };
//   }

//   componentDidMount() {
//     fetch('/items/itemapi')
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           items: data,
//           categories: data.map(item => item.category),
//         });
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }

//   render() {
//     const { items, categories } = this.state;

//     return (
//       <div>
//         <div className="mt-6 px-6 py-12 bg-gray-100 rounded-xl">
//           <h2 className="mb-12 text-2xl text-center">Newest items</h2>

//           <div className="grid grid-cols-3 gap-3">
//             {items.map(item => (
//               <div key={item.id}>
//                 <a href={`/items/${item.id}`}>
//                   <div>
//                     <img src={item.image} alt={item.name} className="rounded-t-xl" />
//                   </div>

//                   <div className="p-6 bg-white rounded-b-xl">
//                     <h2 className="text-2xl">{item.name}</h2>
//                     <p className="text-gray-500">Price :₹ {item.price}</p>
//                   </div>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>       
//       </div>
//     );
//   }
// }

// export default Items;


import React, { Component } from 'react';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      categories: [],
      loadedItems: new Set(), // Track loaded items
    };
    this.observer = null;
    this.loadMoreRef = React.createRef();
  }
 
  componentDidMount() {
    this.loadData();
    this.setupIntersectionObserver();
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          this.loadData();
        }
      },
      { threshold: 0.1 }
    );

    if (this.loadMoreRef.current) {
      this.observer.observe(this.loadMoreRef.current);
    }
  }

  loadData() {
    fetch('/items/itemapi')
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => {
          const newItems = data.filter(item => !prevState.loadedItems.has(item.id));
          const updatedItems = [...prevState.items, ...newItems];
          const updatedCategories = [...prevState.categories, ...newItems.map(item => item.category)];
          const updatedLoadedItems = new Set([...prevState.loadedItems, ...newItems.map(item => item.id)]);
          return {
            items: updatedItems,
            categories: updatedCategories,
            loadedItems: updatedLoadedItems,
          };
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    const { items, categories } = this.state;

    return (
      <div>
        <div className="mt-6 px-6 py-12 bg-gray-100 rounded-xl">
          <h2 className="mb-12 text-2xl text-center">Newest items</h2>

          <div className="grid grid-cols-3 gap-3">
            {items.map(item => (
              <div key={item.id}>
                <a href={`/items/${item.id}`}>
                  <div>
                    <img src={item.image} alt={item.name} className="rounded-t-xl" />
                  </div>

                  <div className="p-6 bg-white rounded-b-xl">
                    <h2 className="text-2xl">{item.name}</h2>
                    <p className="text-gray-500">Price :₹ {item.price}</p>
                  </div>
                </a>
              </div> 
            ))}
          </div>
          <div ref={this.loadMoreRef}></div>
        </div>
      </div>
    );
  }
}

export default Items;
