import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageWrapper, Row, Header, TotalItems, Divider } from "./Home.styled";
import Button from "../../components/Button";
import { nutrientLimitsMap } from "../../constants/nutrientLimits";
import LogoIcon from "../../components/Icons/Logo";
import Typography from "../../components/Typography";
import ShoppingBasket from "./Components/ShoppingBasket";
import ShoppingItem from "../../components/ShoppingItem";
import server from "../../apis/server";
import { getTotalNutrients } from "../../helpers/formulas";
import { fetchProducts, addToBasket } from "../../store/Main";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const basketItems = useSelector((state) => state.basketItems);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [basketModalOpen, setBasketModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loadProducts = async () => {
      try {
        const { data } = await server.get("/fe-test.json");

        dispatch(fetchProducts(data));
      } catch (err) {
        setError(err?.response?.data?.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [dispatch]);

  const isNutrientLimitExceeded = (nutrients) => {
    const basketNutrients = basketItems.map((item) => item.nutrients);

    if (basketNutrients.length >= 1) {
      return nutrients
        .map((nutrient) => {
          const nutrientInBasket = getTotalNutrients(basketNutrients, nutrient);
          const nutrientLimit = nutrientLimitsMap.get(nutrient.id);
          const totalNutrientVal = nutrientInBasket + nutrient.amount;

          if (totalNutrientVal > nutrientLimit)
            return { name: nutrient.id, total: totalNutrientVal };
        })
        .filter((x) => x !== undefined).length > 0
        ? true
        : false;
    }
    return false;
  };
  const handleAddToBasketClick = (product) => {
    const isLimitExceeded = isNutrientLimitExceeded(product.nutrients);

    if (!isLimitExceeded) {
      dispatch(addToBasket(product));
    } else {
      // TODO: proper notification component for this error
      alert("Limits reached");
    }
  };

  return (
    <PageWrapper>
      <Header>
        <LogoIcon />
        <Button
          width="310px"
          height="57px"
          disabled={loading}
          onClick={() => setBasketModalOpen(!basketModalOpen)}
        >
          <TotalItems>{basketItems.length}</TotalItems>
          Shopping basket
        </Button>
      </Header>
      <Row justify="center" align="center">
          <Typography
            variant="h1"
            color="lightDark"
            gutterBottom="l"
            gutterTop="xxxxl"
            fontWeight="700"
          >
            Products
          </Typography>
        <Divider />
      </Row>
      <Row direction="row" justify="center">
        {products &&
          products.products.map((product, index) => (
            <ShoppingItem
              key={index}
              name={product.name}
              addToBasket={() => handleAddToBasketClick(product)}
              loading={loading}
              error={error}
            />
          ))}
      </Row>
      {basketItems && (
        <ShoppingBasket
          onSubmit={() => {}}
          closeModal={() => setBasketModalOpen(!basketModalOpen)}
          isModalOpen={basketModalOpen}
          products={basketItems}
        />
      )}
      {error && <p>There has been an error</p>}
    </PageWrapper>
  );
};

export default Home;
