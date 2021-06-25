
interface PropType {
  userName: string
}

const Greeting = (props: PropType) => {
  return <div>{`Hello ${props.userName}`}</div>
}

export default Greeting