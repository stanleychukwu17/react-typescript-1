// Extracting a component props type
// in this lecture we extract the types of one component to use as the props type for another component
import Container from '../7/Container'

export default function CustomComp(props: React.ComponentProps<typeof Container> & {children: string}) {
    const james = props.style.color
    return (
        <div>{james}</div>
    )
}
