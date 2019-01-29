import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'

export function Title({ title, message }) {
	return (
		<StyledTitle>
			<h3 className="message">{message}</h3>
			<h1 className="title">{title}</h1>
			<div className="underline" />
		</StyledTitle>
	)
}

Title.defaultProps = {
	message: 'our message',
	title: 'our title'
}

const StyledTitle = styled.div`
	text-align: center;
	.message {
		${styles.textSlanted};
		letter-spacing: 0.2rem;
        font-size: 2rem;
        color: ${styles.colors.mainYellow}
    }
    
    .title {
        letter-spacing: 0.2rem;
        font-size: 2rem;
        text-transform: uppercase;
    }

    .underline {
        width: 5rem;
        height: 0.2rem;
        background: ${styles.colors.mainYellow};
        margin: 0.5rem auto;
    }
`
