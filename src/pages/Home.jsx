import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Category from '../components/Category';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    // Setando os states iniciais
    this.state = {
      // Guarda a categoria
      category: '',
      // State que vai ter o array de categorias para ser escolhido
      listCategories: [],
      // State com o array de produtos
      products: [],
    };

    // Prepara as funções para serem utilizadas em todo o componente
    // this.updateCategories = this.updateCategories.bind(this);
    // this.onChangeCategory = this.onChangeCategory.bind(this);
  }

  // Depois do componente renderizar, é executado essa função
  componentDidMount() {
    // Chama a função updateCategories quando o componente termina de ser renderizado
    this.updateCategories();
  }

  // onChangeCategory({ target: { value } }) {
  //   this.setState({ category: value }, () => {
  //     this.handleSubmit();
  //   });
  // }

  // que está sendo chamada no componentDidMount que pega as categorias e joga no array listCategories que está no State.
  async updateCategories() {
    const categories = await getCategories();
    this.setState({ listCategories: categories }, () => {
      console.log(categories);
    });
  }

  render() {
    const { listCategories } = this.state;
    return (
      <section className="main-content">
        <div className="list-category" onChange={ this.onChangeCategory }>
          <SearchBar handleSubmit={ this.handleSubmit } />
          { /* Lista as categorias, e chama o componente Category... */}
          {/* ...a cada categoria encontrada */}
          {listCategories.map((categoria) => (
            <Category key={ categoria.name } category={ categoria } />
          ))}
        </div>
      </section>
    );
  }
}

export default Home;
