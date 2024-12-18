import { ICartProduct } from 'models';
import CartProduct from './CartProduct';

import * as S from './style';

interface IProps {
  products: ICartProduct[];
}

const CartProducts = ({ products }: IProps) => {
  return (
    <S.Container>
      {products?.length ? (
        products.map((p) => <CartProduct product={p} key={p.sku} />)
      ) : (
        <S.CartProductsEmpty>
          Добавьте товаров в корзину <br />
          :)
        </S.CartProductsEmpty>
      )}
    </S.Container>
  );
};

export default CartProducts;
