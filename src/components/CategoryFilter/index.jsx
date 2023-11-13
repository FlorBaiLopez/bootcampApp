import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import {
  getProductsByCategory,
  getProducts,
} from '../../api/products';

import './styles.scss';

const CategoriesFilter = ({
  setProducts,
  setLoading,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [error, setError] = useState(false);

  const filterProducts = async (category) => {
    try {
      let products;
      setLoading(true);
      if (category === 'all') {
        products = await getProducts();
      } else {
        products = await getProductsByCategory(category);
      }
      setLoading(false);
      setProducts(products.data);
    } catch (error) {
      setError(true);
    }
  };

  const onChange = (item) => {
    setSelectedCategory(categories.indexOf(item));
    filterProducts(item.value);
  };

  return (
    <div className="Categories">
      <Select
        options={categories}
        defaultValue={categories[selectedCategory]}
        onChange={onChange}
      />
    </div>
  );
};

export default CategoriesFilter;
