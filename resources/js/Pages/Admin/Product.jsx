import React from 'react';
import { usePage,useForm, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { InertiaLink } from '@inertiajs/inertia-react';
import axios from 'axios';


export default function Product({auth}) {
    const { categories  } = usePage().props;
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('products.add'), { onSuccess: () => reset() });
    };
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="AdminCategories" />
            <h2 class="h2_style">Add Product</h2>
            <form enctype="multipart/form-data" onSubmit={route('products.add')} method="POST" >
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



                <input type="submit" class="btn btn-primary" value="Add Product"/>

      </form>



        </AuthenticatedLayout>



    )


}
