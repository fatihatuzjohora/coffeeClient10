import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handeladdcoffee=event=>{
        event.preventDefault();
const form=event.target;
const name=form.name.value;
const quantity=form.quantity.value;
const supplier=form.supplier.value;
const taste=form.taste.value;
const category=form.category.value;
const details=form.details.value;
const photo=form.photo.value;
const newCoffee={name,quantity,supplier,taste,category,details,photo}
console.log(newCoffee);

fetch('http://localhost:5000/coffee',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(newCoffee)
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if(data.insertedId){
        Swal.fire({
            title: 'success!',
            text: 'user added succefully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
})

    }


  return (
    <div className="p-8">
      <h1 className="text-4xl text-center m-10 font-extrabold">coffee add</h1>
      <form onSubmit={handeladdcoffee}>
        {/* 1 name quantity */}
        <div className="flex  mb-5">
          <div className="form-control w-full mr-5">
            <label className="label">
              <span className="label-text">coffee name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="coffee name"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="coffee name"
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>
        {/* 2  suppleir*/}
        <div className="flex mb-5 ">
          <div className="form-control w-full mr-5">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="supplier name"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Teast</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="taste"
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>
        {/* 3 */}
        <div className="flex mb-5">
          <div className="form-control w-full mr-5">
            <label className="label">
              <span className="label-text">category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="category"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <div className="form-control w-full ">
            <label className="label w-full">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* 4 */}

        <div className="mb-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">photo url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="photo"
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>

        <input type="submit" value="add coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
