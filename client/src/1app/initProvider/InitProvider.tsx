import React, { useEffect } from 'react';
import { useAppDispatch } from '../../6shared/lib/hooks';
import { getProductsThunk } from '../../5entities/products/model/productsSlice';

export default function InitProvider({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return children;
}
