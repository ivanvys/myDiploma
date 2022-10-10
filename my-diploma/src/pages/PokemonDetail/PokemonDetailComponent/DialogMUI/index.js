import styles from "./index.module.scss";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import capitalize from "lodash/capitalize";
import startCase from "lodash/startCase";

const DialogWindow = ({
  detailPokemonInfo,
  pokemonStatsWithIcons,
  priceIcon,
  open,
  handleClose,
}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontFamily: "Pokemon Solid", color: "rgb(53, 100, 174)" }}
        >{`My name is ${capitalize(
          detailPokemonInfo.name
        )}. My stats are below.`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" component={"span"}>
            <span className={styles.pokemonWrapper}>
              {pokemonStatsWithIcons?.map((item) => {
                return (
                  <span key={item.title} className={styles.pokeStats}>
                    <span className={styles.headers}>{`My ${startCase(
                      item.title
                    )} is ${item.value}`}</span>
                    <img src={item.icon} />
                  </span>
                );
              })}
              <span className={styles.pokeStats}>
                <span
                  className={styles.headers}
                >{`My Price is ${detailPokemonInfo.price}`}</span>
                <img src={priceIcon} />
              </span>
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleClose}
            autoFocus
            className={styles.thanksButton}
          >
            {`Thank you ${capitalize(detailPokemonInfo.name)}`}
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogWindow;
