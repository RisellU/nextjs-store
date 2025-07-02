'use client';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Description.module.sass';
import Image from 'next/image';
// al usar Image de Next.js, las imágenes deben tener un tamaño definido como width y height
// para evitar problemas de renderizado y mejorar el rendimiento de la página.

export const Description = () =>{
    const [hasBorder, setHasBorder] = useState(false);

    const handleClick = () => setHasBorder(!hasBorder)
    console.log('Border state:', hasBorder);

    const cx = classNames.bind(styles);

    const buttonStyles = cx('Description__button',{
        'Description__button--border': hasBorder,
    })
    return(
        <section className={styles.Description}>
            <button onClick={handleClick} className={buttonStyles}>
                <div className={styles.Description__imageContainer}>
                    <Image
                    priority={true}
                    quality={100}
                    src="/images/description.jpeg" alt="products marketplace" 
                    width={500} 
                    height={300} 
                    /> 
                </div>
            </button>
            <div className={styles.Description__text}>
                <h2>Descripción de la tienda</h2>
                <p>
                    Bienvenido a nuestra tienda, donde encontrarás una amplia variedad de productos de alta calidad. 
                    Desde tecnología hasta moda, tenemos algo para todos. Explora nuestras categorías y descubre 
                    ofertas exclusivas que no querrás perderte.
                </p>
            </div>
        </section>
    )
}