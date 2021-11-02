export function demoDestruncture() {
  var o1 = {a:1, b:2}
  var o2 = {a:2, b:3, d:4}
  // var o3 = Object.assign(o1, o2)
  var o3 = {...o1, ...o2}
  return (
    <div>
      <h2>o3.a: {o3.d}</h2>
    </div>

  )
}