import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';



export default function Form_Product({auth}) {
    const { categories  } = usePage().props;


    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Form_Product" />
            <h2 className="h2_style">Add Product</h2>
            <form encType="multipart/form-data" action={route('product.add')} method="POST" >
            <label>Product Category:</label>
            <select id="input_color" name="category_id" required="">
              <option value="null" selected>Choose</option>
              {
                  categories.map((category) => (


              <option value={category.id}>{ category.name }</option>
              ))
              }
              </select>

          <div>
            <label>Product Title:</label>
                <input id="input_color"name="title" type="text" placeholder="Write a Title" required=""/>
         </div>
<div>
            <label>Product Description:</label>
                <input id="input_color" name="description" type="text" placeholder="Write a Description" required=""/>
</div>
<div>
            <label>Product Price:</label>
                <input id="input_color" name="price" type="number" min="0" placeholder="Write a Price" required=""/>
</div>
<div>
            <label>Product Quantity:</label>
                <input id="input_color" name="quantity"type="number" min="0" placeholder="Write a Quantity" required=""/>
</div>



            <label>Product Image:</label>

            <input type="file" name="image" id="image"/>





                <input type="submit" className="btn btn-primary" value="Add Product"/>

      </form>



        </AuthenticatedLayout>



    )


}
