import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ListProducts from '../components/ListProducts';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="main-content">
        <aside className="list-category">
          <SearchBar />
        </aside>
        <article className="products-container">
          <ListProducts />
        </article>
      </section>
    );
  }
}

export default Home;
