import React, { Component } from 'react';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    // Replace the API URL with your actual API endpoint
    fetch('/items/catapi')
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    const { categories } = this.state;

    return (
      <div>         

        <div className="mt-6 px-6 py-12 bg-gray-100 rounded-xl">
          <h2 className="mb-12 text-2xl text-center">Categories</h2>

          <div className="grid grid-cols-3 gap-3">
            {categories.map(category => (
              <div key={category.id}>
                <a href={`items/?query=&category=${category.id}`}>
                  <div className="p-6 bg-white rounded-b-xl">
                    <h2 className="text-2xl">{category.name}</h2>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
