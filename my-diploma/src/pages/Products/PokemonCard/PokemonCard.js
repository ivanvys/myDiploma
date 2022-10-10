import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./index.module.scss";

const PokemonCard = ({
  name,
  image,
  price,
  id,
  handlePokemonsDetail,
  handleAddPokeToCart,
}) => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 300 }}>
      <button
        onClick={() =>
          handleAddPokeToCart({
            id: id,
            name: name,
            image: image,
            quantity: 1,
            price: price,
          })
        }
      >
        Add to cart
      </button>
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
          sx={{ color: "brown" }}
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          My price is {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
