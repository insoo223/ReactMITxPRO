export function objDestruct() {
  var o1 = {a:1, b:2}
  var o2 = {a:2, b:3, d:4}
  // var o3 = Object.assign(o1, o2)
  var o3 = {...o1, ...o2}
  return (
    // <div>
      <h2>o3.a: {o3.d}</h2>
    // </div>
  )//return
}//demoDestruncture

// Section 1: Array Destructuring
export function arrDestruct() {
  const books = ["fic1", ["hor1", "lit1"], "sci1"];
  
  let [fiction, tmp, science] = books;
  let [horror, literary] = tmp;
  return (
    <div>
      <h2>fiction: {fiction}, horror: {horror}, literary: {literary}, science: {science} </h2>
    </div>
  )//return
  
}