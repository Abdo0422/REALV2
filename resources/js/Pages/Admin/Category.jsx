import React from 'react';
import { usePage,useForm, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/Auth';
import { InertiaLink } from '@inertiajs/inertia-react';
import axios from 'axios';





export default function Category({auth}) {

    const { categories  } = usePage().props;
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });
    const submit = (e) => {
        e.preventDefault();
        post(route('categories.add'), { onSuccess: () => reset() });
    };






    return (
<>
<AuthenticatedLayout user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Categories</h2>}>
<div style={{ textAlign:"center" }}>
                    <h1 className='h2_style'>Add Category</h1>

                    <form action={route('categories.add')} method="post" style={{marginLeft:"50px",paddingTop:"40px" }}>

                        <input id="input_color"  class="input input-bordered input-primary w-full max-w-xs" value={data.message} onChange={e => setData('message', e.target.value)} name="category" type="text" placeholder="Write category name..."/>
                        <select name="image" class="select select-primary w-full max-w-xs" id="image_selection" style={{ display:"block",marginLeft:"277px",marginTop:"10px",textAlign:"center" }}>
                            <option value="null" selected>Choose the icon</option>
                            <option value="icon1.png">Electronics</option>
                            <option value="icon2.png">Entertainement</option>
                            <option value="icon3.png">Games</option>
                            <option value="icon4.png">Music</option>
                            <option value="icon5.png">Health and Medications</option>
                            <option value="icon6.png">Medications</option>
                            <option value="icon7.png">Food</option>
                            <option value="icon8.png">Sport</option>
                        </select>
                        
                        <input type="submit" className="btn btn-primary" value="Add Category" style={{ marginTop:"5px" }}/>
                        
                    </form>


                <table>
                    <thead>
                        <tr>
                        <th>Category Icon</th>
                            <th>Category Name</th>
                            <th>Action</th>
                            <th>Related</th>

                        </tr>
                    </thead>
                    {
                        categories.map((category) => (
                            <tbody>
                            <tr>
                            <td><img src={category.category_image} alt="" width="40px" height="40px"/></td>
                                <td>{ category.name }</td>
                                <td><InertiaLink
                               class="btn btn-error"
                                                href={route('categories.delete' , category.id )}
                                                method="delete"
                                                as="button"
                                                type="button"
                                                onClick={() => {
                                                    if (confirm('Are you sure you want to delete this category?')) {
                                                    // Send DELETE request
                                                    axios.delete(route('categories.delete', category.id )).then(() => {
                                                        // Refresh page
                                                        window.location.reload();
                                                    });
                                                    }
                                                }}
                                                >
                                                Delete
                                                </InertiaLink></td>





                            </tr>
                        </tbody>
                        ))
                    }


                </table>
        </div>
                </AuthenticatedLayout>
                <style>{`
        table {
            margin: auto;
            width: 40%;
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
            text-align: left
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

