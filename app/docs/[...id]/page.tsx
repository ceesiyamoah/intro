const DocPage = ({ params, ...rest }: { params: { id: string[] } }) => {
  console.log(rest)
  return <div>DocPage</div>
}

export default DocPage
