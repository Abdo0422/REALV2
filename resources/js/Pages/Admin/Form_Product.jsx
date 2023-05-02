import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/Auth';



export default function Form_Product({auth}) {
    const { categories  } = usePage().props;


    return (
        <>
        <AuthenticatedLayout user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>}>
            <Head title="Form_Product" />

            <h2 className="h2_style">Add Product</h2>
            <form encType="multipart/form-data" action={route('product.add')} method="POST" >
            <label>Product Category:</label>
            <select class="select select-primary w-full max-w-xs" name="category_id" required="" style={{width :"150px" ,Bottom :"100px"}}>
              <option value="null" selected>Choose</option>
              {
                  categories.map((category) => (


              <option value={category.id}>{ category.name }</option>
              ))
              }
              </select>

          <div>
            <label >Product Title:</label>
                <input id="input_color" class="input input-bordered input-primary w-full max-w-xs"name="title" type="text" placeholder="Write a Title" required=""/>
         </div>
<div>
            <label>Product Description:</label>
                <input id="input_color" class="input input-bordered input-primary w-full max-w-xs" name="description" type="text" placeholder="Write a Description" required=""/>
</div>
<div>
            <label>Product Price:</label>
                <input id="input_color" class="input input-bordered input-primary w-full max-w-xs" name="price" type="number" min="0" placeholder="Write a Price" required=""/>
</div>
<div>
            <label>Product Quantity:</label>
                <input id="input_color" class="input input-bordered input-primary w-full max-w-xs" name="quantity"type="number" min="0" placeholder="Write a Quantity" required=""/>
</div>



            <label>Product Image:</label>

            <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" name="image" id="image"/>





            <input type="submit" className="btn btn-primary" style={{position:"absolute",left:"50%",bottom:"35%" }} value="Add Product"/>

      </form>


        </AuthenticatedLayout>
        <style>{`
        .div_center {
            text-align: center;
            padding-top: 40px;
        }

        .h2_style {
            font-size: 40px;
            padding-bottom: 40px;
        }

        #input_color {
            color: black;
        }
        label{
          display:inline-block;
          width:200px;
          padding-bottom: 30px;
          text-align: left;
          left:0;

        }
        #hidden{
          display:none;
        }
        `}</style>
</>


    )


}
