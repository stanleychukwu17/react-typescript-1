/**
Position prop can be one of
left-center | left-top | left-bottom | center | center-top |
center-bottom | right-center | right-top | right-bottom
*/

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center',
    // angler: Omit<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center', // 'Omit' cannot achieve the same result as 'Exclude'
}

export default function Toast({position}: ToastProps) {
    return (
        <div>Toast notification Position - {position}</div>
    )
}