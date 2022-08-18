type headingProps = {
    children: string | JSX.Element
}

export default function Heading(props: headingProps) {
  return (
    <div>{props.children}</div>
  )
}
