/**
    * the issue with the code below is that isPositive and isNegative can be passed in at the same time
    * so we want to restrict the props so that when isPositive is passed in isNegative and isZero cannot be passed in and also vice-versa with other options
    * so in example 2, the issue is solved there
    * <RandomNumber value={10} isPositive isNegative isZero />
*/
type randProps = {
    value: number,
    isPositive?: boolean,
    isNegative?: boolean,
    isZero?: boolean
}

export default function RandomNumber({value, isPositive, isNegative, isZero}: randProps) {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'} {' '}
            {isZero && 'zero'}
        </div>
    )
}


// TODO: example 2
type randNumberType = {value: number}
type positiveNumber= randNumberType & { sPositive: boolean, isNegative?: never, isZero?: never }
type negativeNumber= randNumberType & { sPositive?: never, isNegative: boolean, isZero?: never}
type zeroNumber= randNumberType & { sPositive?: never, isNegative?: never, isZero: boolean }

// there -->
type randProps2 = positiveNumber | negativeNumber | zeroNumber

/**
    * so with this now: this (<RandomNumber value={10} isPositive isNegative isZero />) will always throw an error,
    * you can only do <RandomNumber value={10} isPositive /> or 
    * <RandomNumber value={-10} isNegative /> or 
    * <RandomNumber value={0} isZero /> 
*/