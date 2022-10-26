import styles from "./index.module.scss";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Cart from "../../../static/PokemonCardCart2.png";
import Ok from "../../../static/checked.png";

const PokemonCard = ({
  name,
  image,
  price,
  id,
  isItInTheCart,
  handlePokemonsDetail,
  handleAddPokeToCart,
}) => {
  return (
    <Card
      sx={{
        width: 144,
        maxHeight: 300,
        backgroundColor: "yellowgreen",
        marginBottom: "3vh",
      }}
    >
      {isItInTheCart ? (
        <img src={Ok} className={styles.cartImage} alt="Ok" />
      ) : (
        <img
          src={Cart}
          className={styles.cartImage}
          alt="Cart"
          onClick={() =>
            handleAddPokeToCart({
              id: id,
              name: name,
              image: image,
              quantity: 1,
              price: price,
            })
          }
        />
      )}
      <CardMedia
        component="img"
        height="130"
        image={image}
        alt="green iguana"
        onClick={() => handlePokemonsDetail(id)}
        className={styles.cardMedia}
      />
      <CardContent sx={{ backgroundColor: "pink" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "brown", fontSize: "1.4rem" }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          My price is {price}$
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
