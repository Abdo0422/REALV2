import React from 'react';
import { usePage, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/Auth';
import { InertiaLink } from '@inertiajs/inertia-react';


export default function Show_Product({auth}) {
    const { products  } = usePage().props;


    return (
        <>
        <AuthenticatedLayout user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>}>
            <Head title="AdminCategories" />
            <h2 class="h2_style">Show all Product</h2>
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
                                <td>{ product.price }DH</td>
                                <td>{ product.quantity }</td>
                                <td>
                                <a class="btn btn-outline" style={{ marginBottom:"15px" }} href={route('product.form_edit',product.id)}>Edit</a>

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










            </AuthenticatedLayout>
            <style>{`
   table {
    margin: auto;
    width: 80%;
    text-align: center;
    border-collapse: collapse;
    overflow: hidden;
    margin-top: 50px;
    box-shadow: 0 0 20px;
    rgba(0, 0, 0, 0.1);
}
.h2_style {
    font-size: 40px;
    padding-bottom: 40px;
}
th,
td {
    padding: 15px;
    background-color: white;
    color: black;
    text-align: left;
}

th {
    text-align: left;
}

thead {
    th {
        background-color: #55608f;
    }
}

tbody {
    tr {
        &:hover {
            background-color: rgba(255, 255, 255, 0.3);
        }
    }

    td {
        position: relative;

        &:hover {
            &:before {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: -9999px;
                bottom: -9999px;
                background-color: rgba(255, 255, 255, 0.2);
                z-index: -1;
            }
        }
    }
}
            `}</style>
</>





        )









    }
