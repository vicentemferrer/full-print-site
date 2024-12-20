import './CarouselButton.css'

export enum btnTypes {
    Prev = 'prev',
    Next = 'next'
}

const iconStyles = {
    prev: 'left',
    next: 'right',
}

type Props = {
    btnType: btnTypes,
    handleClick: (isPrev: boolean) => void
}

function CarouselButton({ btnType, handleClick }: Props) {
    return (
        <button className={`carousel-arrow carousel-${btnType}`} data-button={`button-${btnType}`} onClick={() => handleClick(btnType === btnTypes.Prev)}>
            <i className={`fi fi-br-angle-small-${iconStyles[btnType]}`}></i>
        </button>
    )
}

export default CarouselButton