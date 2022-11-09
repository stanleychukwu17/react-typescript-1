// Extracting a component props type
// in this lecture we extract the types of one component to use as the props type for another component
import Container from '../7/Container'

export default function customComponent(props: React.ComponentProps<typeof Container>) {
    const james = props.style.display

    return <div>{james}</div>
}
