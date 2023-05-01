import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';




export default function Form_Product({auth}) {
    const { categories,product  } = usePage().props;




    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Form_Product" />
            <h2 class="h2_style">Edit Product</h2>







            <form encType="multipart/form-data" action={route('product.edit',product.id)} method="post" >

          <div>
            <label>Product Title:</label>
                <input id="input_color"name="title" type="text" placeholder="Write a Title" defaultValue={ product.title } required="" />
         </div>
<div>
            <label>Product Description:</label>
                <input id="input_color" name="description" type="text" placeholder="Write a Description" defaultValue={ product.description } required=""/>
</div>
<div>
            <label>Product Price:</label>
                <input id="input_color" name="price" type="number" placeholder="Write a Price" defaultValue={ product.price } required=""/>
</div>
<div>
            <label>Product Quantity:</label>
                <input id="input_color" name="quantity"type="number" min="0" placeholder="Write a Quantity" defaultValue={ product.quantity } required=""/>
</div>
<div>
            <label>Product Category:</label>
                <select id="input_color" name="category" value="Choose" required="">

                  {
                      categories.map((category) => (
                        <option value={category.name }>{category.name }</option>

                      ))
                  }

                  </select>
              </div>
            <div>
            <label>Current Product Image:</label>


            <img src={'products/product.png'}  height="100" width="100" alt="heelo"/><br></br>

              </div>
              <div>
            <label>Change Product Image:</label>
                    <input type="file" name="image" id="image"/>
              </div>


                <input type="submit" class="btn btn-primary" value="Update"/>

      </form>




        </AuthenticatedLayout>



    )


}
