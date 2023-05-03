import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/Auth';
import { InertiaLink } from '@inertiajs/inertia-react';


export default function Show_Product({auth}) {
    const { products  } = usePage().props;
    return (
        <AuthenticatedLayout user={auth.user}>
            <base href="/public"></base>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                        <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                           <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                            {
                                products.map((product) => (
                                    <tbody>
                            <tr>
                                <td><img width="130px" height="200px" src={'products/'+product.image} alt="oso"/></td>
                                <td>{ product.title }</td>
                                <td>{ product.description }</td>
                                <td>{ product.category }</td>
                                <td>{ product.price }DH</td>
                                <td>{ product.quantity }</td>
                                <td>
                                <a class="btn btn-outline" style={{ marginRight:"15px" }} href={route('product.form_edit',product.id)}>Edit</a>

                                <InertiaLink
                                 class="btn btn-outline btn-error"
                                                href={route('product.delete' , product.id )}
                                                method="delete"
                                                as="button"
                                                type="button"
                                                onClick={() => {
                                                    confirm('Are you sure you want to delete this category?')}}
                                                >
                                                Delete
                                </InertiaLink>
                                </td>
                            </tr>
                        </tbody>
                                ))
                            }




                </table>
                </div>






        </AuthenticatedLayout>


    )



}