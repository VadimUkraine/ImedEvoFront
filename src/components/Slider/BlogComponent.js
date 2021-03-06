import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as constants from '../../constants/constants'
import styles from './blog.scss'

class BlogComponent extends Component {
  render () {

    return (
        <section className={`container ${styles.blog}`}>
          {constants.TestArticleBlogPost.map((doctor, index) =>
          <article key={index} className={styles.article}>
            <h2 className={styles.article__headline}>
              {doctor.headline}
            </h2>
            <img className={styles.article__img} src={doctor.src} alt=""/>
            <p className={styles.article__description}>{doctor.description}</p>
            <Link to="/blog" className={styles.article__btn}>Читать дальше</Link>
          </article>
          )}
        </section>
    )
  }
}

export default BlogComponent