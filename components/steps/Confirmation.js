function Confirmation({ formData}) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 shadow-sm">
      <p className="text-center text-sm my-2"> <span className="font-semibold">Artist : </span>{formData.artist} </p>
      <p className="text-center text-sm my-2"> <span className="font-semibold">Name : </span>{formData.name} </p>
      <p className="text-center text-sm my-2"> <span className="font-semibold">Title : </span>{formData.title} </p>
      <p className="text-center text-sm my-2"> <span className="font-semibold">Description : </span>{formData.description} </p>
      <p className="text-center text-sm my-2"> <span className="font-semibold">Price : </span>{formData.price} $ </p>
      <p className="text-center text-sm my-2"> <span className="font-semibold">Symbol : </span>{formData.symbol} </p>
      <p className="text-center text-sm my-2"> <span className="font-semibold">Total Supply : </span>{formData.totalSupply} </p>
      <p className="text-center text-sm my-2"> <span className="font-semibold">Commision : </span>{formData.commision} % </p>
    </div>
  );
}

export default Confirmation;