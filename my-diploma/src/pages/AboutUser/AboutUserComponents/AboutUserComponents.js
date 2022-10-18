import styles from "./index.module.scss";

import { v4 as uuid } from "uuid";

const AboutUserComponents = ({
  userInfo,
  whatOrderWereMade,
  handleReturnToProductsPage,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.subWrapper}>
        <button onClick={handleReturnToProductsPage} className={styles.button}>
          Back to shopping!
        </button>
        <p
          className={styles.text}
        >{`${userInfo.firstName} ${userInfo.lastName}`}</p>
        <p className={styles.text}>{userInfo.phone}</p>
        <p className={styles.text}>{userInfo.email}</p>
        {whatOrderWereMade?.length === 0 ? (
          <p className={styles.text}>You have not made any order</p>
        ) : (
          <div className={styles.ordersBlock}>
            <p className={styles.text}>Your orders: </p>
            <ol className={styles.ordersWrapper}>
              {whatOrderWereMade?.map((item) => {
                return (
                  <div key={uuid()} className={styles.dropdown}>
                    <li className={`${styles.order} ${styles.dropbtn}`}>
                      Order № {item._id}
                      <br />
                      Data: {item.createdAt}
                    </li>
                    <div className={styles.dropdownContent}>
                      <div className={styles.content}>
                        {item.itemsList?.map((element) => {
                          return (
                            <div
                              key={uuid()}
                              className={styles.textOrderWrapper}
                            >
                              <p className={styles.textOrder}>
                                {element.name} x {element.quantity} (
                                {element.price}$ apiece)
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      <p className={styles.totalPriceSection}>
                        Total price is: {item.totalPrice}$
                      </p>
                    </div>
                  </div>
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUserComponents;
