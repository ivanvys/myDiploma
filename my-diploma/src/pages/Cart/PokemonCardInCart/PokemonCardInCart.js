import styles from "./index.module.scss";
import { memo } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Trash from "../../../static/trash.png";

const PokemonCardInCart = ({
  name,
  image,
  price,
  id,
  handlePokemonsDetail,
  handleDeletePokemonFromCart,
  handleQuantityDecrease,
  handleQuantityIncrease,
  quantity,
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
      <img
        src={Trash}
        onClick={() => handleDeletePokemonFromCart(id)}
        className={styles.trashImage}
        alt="icon"
      />
      <CardMedia
        component="img"
        height="130"
        image={image}
        alt="Pokemon"
        onClick={() => handlePokemonsDetail(id)}
        className={styles.cardMedia}
      />
      <CardContent sx={{ backgroundColor: "pink" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="p"
          sx={{ color: "brown", fontSize: "1.4rem" }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          My price is {price}$
          <span className={styles.quantity}>{quantity}</span>
          <span className={styles.buttonArea}>
            <button
              onClick={() => handleQuantityIncrease(id, quantity)}
              className={styles.button}
            >
              +
            </button>
            <button
              onClick={() => handleQuantityDecrease(id, quantity)}
              className={styles.button}
            >
              -
            </button>
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(PokemonCardInCart);
