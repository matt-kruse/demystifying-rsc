import Link from 'next/link'

function MyLink(props) {
  // defaults prefetch to false if `prefetch` is not true
  return <Link {...props} prefetch={props.prefetch ?? false}/>
}

export default MyLink;