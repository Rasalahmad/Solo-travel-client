import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        //   console.log(data);
        // data.email = user?.email;
        fetch("http://localhost:5000/addEvent", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result)
            if(result.insertedId){
              alert('Inserted Successfully');
              reset();
          }
          });
        
      };
    return (
        <div>
        <h1 className="mt-5 text-center text-info">Please Add Events</h1>
        <div className="login-box w-25 m-auto mt-5">
          <div className="event-box border border d-flex justify-content-center align-items-center">
            <div className="login-form">
              <form onSubmit={handleSubmit(onSubmit)}>
              <br />
                <input
                  {...register("name")}
                  placeholder="Name"
                  type="name"
                  className="p-2 m-2 w-100"
                />
                <input
                  {...register("offer")}
                  placeholder="title"
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("description")}
                  placeholder="Description"
                  className="p-2 m-2"
                  className="p-2 m-2 w-100"
                />
                <br />
                <input
                  {...register("price")}
                  placeholder="Price"
                  className="p-2 m-2"
                  className="p-2 m-2 w-100"
                />
                <br />
  
                <input
                  {...register("img", { required: true })}
                  placeholder="Image Link"
                  className="p-2 m-2"
                  className="p-2 m-2 w-100"
                />
              
  
                {errors.exampleRequired && <span>This field is required</span>}
  
                <input type="submit" value="Add Service" className="btn btn-info w-50" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddService;