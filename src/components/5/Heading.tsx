type headingProps = {
    children: string | JSX.Element // your can replace JSX.Element for React.ReactNode or React.ReactElement
    // a link to understand all their differences - https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement
}

export default function Heading(props: headingProps) {
  return (
    <div>{props.children}</div>
  )
}
