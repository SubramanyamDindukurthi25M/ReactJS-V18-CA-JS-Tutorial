export function Person({
  name,nickName,images
}) {
  const img = images && images[0].small.url
  return <>
            <h3>
                Name : {name}
            </h3>
            {
              nickName && <h3>Nick-Name - {nickName}</h3>
            }
            <img src={img} alt={name} style={{width:'20%'}} />
          </>
}
  