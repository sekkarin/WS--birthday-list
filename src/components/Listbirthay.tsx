
export interface PropsListBirthday{
    image:string;
    name:string;
    age:number;
    id:number
}

function Listbirthay(item:PropsListBirthday) {
  return (
    <div className="flex flex-row p-3 hover:bg-neutral-50" key={item.id}>
    {/* {item.name} */}
    <img src={item.image} className="w-12 h-12 rounded-full" />
    <div className="flex flex-col pl-3">
      <p>{item.name}</p>
      <p>{item.age} years</p>
    </div>
  </div>
  )
}

export default Listbirthay