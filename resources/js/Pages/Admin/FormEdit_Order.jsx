import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/Auth';




export default function Form_Product({auth}) {
    const { order } = usePage().props;




    return (
      <>
        <AuthenticatedLayout user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Order</h2>}>

            <h2 class="h2_style">Edit Order</h2>







            <form encType="multipart/form-data" action={route('order.edit',order.id)} method="post" >

            <div>
            <label>Statue:</label>
                <select id="input_color" name="status"  value={order.id} required="">
                    <option value="Pending">Pending</option>
                    <option value="Process">Process</option>
                    <option value="Closed">Closed</option>
                </select>
         </div>

              <div>
                <input type="submit" class="btn btn-primary" value="Update" />
                </div>
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
