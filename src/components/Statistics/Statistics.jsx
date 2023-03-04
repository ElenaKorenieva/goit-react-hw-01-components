import PropTypes from 'prop-types';
import { Section, Title, StatListEl, ListItem, ItemLabel, ItemPercentage } from './Statistics.styled'

function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

export default function Statistics({title, stats}) {
    return (
        <Section>
            {title && <Title>{title}</Title>}
            {stats && (<StatListEl>
                {stats.map((elem) => (
                    <ListItem key={elem.id} style={{ backgroundColor: randomHexColor() }}>
                        <ItemLabel>{elem.label}</ItemLabel>
                        <ItemPercentage>{elem.percentage}</ItemPercentage>
                    </ListItem>
                ))}
            </StatListEl>)}
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
                percentage: PropTypes.number.isRequired,
            }
        )
    )
}
