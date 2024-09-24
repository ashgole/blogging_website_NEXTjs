// utils/api.js

import { rootPath } from "./constants";

export const addBlog = async (blogData) => {
  const response = await fetch(`${rootPath}/api/blog`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blogData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error adding product');
  }

  return await response.json();
};

export const readBlogs = async (title = '') => {
  const res = await fetch(`${rootPath}/api/blog?title=${title}`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return await res.json();
};

// Update product quantity
// export const updateProductQuantity = async (productId, newQuantity) => {
//   const res = await fetch('/api/product/update', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ productId, newQuantity }),
//   });
//   if (!res.ok) {
//     throw new Error('Failed to update quantity');
//   }
//   return await res.json();
// };

// export const deleteProduct = async (id) => {
//   const response = await fetch(`/api/product?id=${id}`, {
//     method: 'DELETE',
//   });
//   if (!response.ok) {
//     throw new Error('Failed to delete product');
//   }
//   return await response.json();
// };
