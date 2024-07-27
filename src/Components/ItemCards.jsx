const ItemCards = ({key,image,title,price}) => {
  return ( 
    <li key={key} className="rounded-xl p-2 cursor-pointer ring-1 max-w-[250px] min-h-[300px]">
      <div className="w-full group overflow-hidden max-h-[200px]">
        <img className="h-full w-full group-hover:scale-125 object-cover transition duration-700" src={image} alt="#" />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl">{title}</h2>
        <div className="flex justify-between items-center">
          <p>${price}</p>
          <button  className="p-2 bg-green-400 active:bg-green-700 rounded-xl text-white font-bold">Add to cart</button>
        </div>
      </div>
    </li>
   );
}
 
export default ItemCards;