import React from 'react';
import * as Icons from '../SvgIcons/SvgIcons.js'
import RatingStars from '../customComponents/RatingStars'
import styles from  './search-result.scss'

export default ({ clinic, index }) => {
  return (
    <article className={styles.clinic}>
      <div className={styles.clinic__info}>
        <img src={clinic.picture} className="user-image" />
        <p className={styles.clinic__address}><Icons.IconPlace/>{clinic.address}</p>
        <p className={styles.clinic__hours}><Icons.IconTime/>9.00-18.00</p>
        <button  className={styles.clinic__btn}>Записаться на прием</button>
      </div>
      <div className={styles.clinic__main}>
        <div className={styles.h_container}>
          <h2 className={styles.clinic__title}>Клиника:"{clinic.nameClinic}"</h2>
          <RatingStars
            starSelectingHoverColor="rgb(249, 215, 73)"
            starRatedColor="rgb(249, 215, 73)"
            starWidthAndHeight="20px"
            starSpacing='0px'
            isSelectable={false}
            rating={clinic.index}
          />
        </div>
        <p className={styles.clinic_description}>{clinic.about}</p>
        <a href="/">Подробнее</a>
      </div>
    </article>

  );
};