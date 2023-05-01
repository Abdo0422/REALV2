import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { InertiaLink } from '@inertiajs/inertia-react';


export default function Show_Product({auth}) {
    const { products  } = usePage().props;


    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="AdminCategories" />
            <table>
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
                                <td><img width="200px" height="200px" src={'products/'+product.image} alt="oso"/></td>
                                <td>{ product.title }</td>
                                <td>{ product.description }</td>
                                <td>{ product.category }</td>
                                <td>{ product.price }</td>
                                <td>{ product.quantity }</td>
                                <td>
                                <a className="btn btn-danger" href={route('product.form_edit',product.id)}>Edit</a>

                                <InertiaLink
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










            </AuthenticatedLayout>






        )









    }
