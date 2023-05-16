export default function Page() {
  return (
      <div className={"box"}>
        <h1>/all-server/page.js</h1>
        <p>This page is rendered entirely server-side."</p>
        <script>
          addEventListener(`DOMNodeInserted`,function(e){
            // console.log(null)
        } );
        </script>
      </div>
  )
}
