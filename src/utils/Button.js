import styled from 'styled-components'
import { styles } from '../utils'


const BannerButton = styled.button`
    display: block;
    color: ${styles.colors.mainWhite};
    background: transparent;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    font-weight: 700;
    border: 0.15rem solid ${styles.colors.mainWhite};
    margin-bottom: 1rem;
    ${styles.transition({})};
    &:hover {
        background: ${styles.colors.mainWhite};
        color: ${styles.colors.mainBlack};
        cursor: pointer;
    }
    
    &:focus {
        outline: none;
        /* transform: skewX(50deg); */
        /* transform: skewY(50deg) */
    }

    &:active {
        outline: none;
        transform: scale(0.95);
        transition: 0.1s linear;
    }
`

const SectionButton = styled(BannerButton)`
    color: ${styles.colors.mainBlack};
    ${styles.border({color: `${styles.colors.mainBlack}`})};
    margin: 2rem auto;
    &:hover {
        background: ${styles.colors.mainBlack};
        color: ${styles.colors.mainYellow};
    }

`

export { BannerButton, SectionButton }