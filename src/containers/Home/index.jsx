import React, { useEffect, useState } from 'react';
import { getProducts, getCategories } from '../../api/products';
import ProductList from '../../components/ProductList';
import CategoryFilter from '../../components/CategoryFilter';
import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';

const Home = () => {
  const [productsList, setProductsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState([
    {
      value: 'all',
      label: 'All',
    },
  ]);
  const [loading, setLoading] = useState(false);

  const capitalizeFirstLetter = (value) => {
    if (typeof value === 'string' && value.length > 0) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  };

  const initHome = async () => {
    setLoading(true);
    const products = await getProducts();
    setLoading(false);

    console.log(products);

    setProductsList(products.data);
  };

  const CategoriesList = async () => {
    try {
      setLoading(true);
      const categ = await getCategories();
      setLoading(false);
      setCategories([
        {
          value: 'all',
          label: 'All',
        },
        ...categ.data.map((value) => ({
          value,
          label: capitalizeFirstLetter(value),
        })),
      ]);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    initHome();
    CategoriesList();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="home__categ">
        <CategoryFilter
          setProducts={setProductsList}
          setLoading={setLoading}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="home">
        <ProductList products={productsList} />
      </div>
    </div>
  );
};

export default Home;
