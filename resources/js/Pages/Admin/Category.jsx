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
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight rounded-md bg-primary p-5">Categories</h2>}>

                    <h1 className='h2_style'>Add Category</h1>
                <div style={{display:"flex"}}>
                    <form action={route('categories.add')} method="post" style={{marginLeft:"300px",marginRight:"100px"}}>

                        <input id="input_color"  class="input input-bordered input-primary w-full max-w-xs" value={data.message} onChange={e => setData('message', e.target.value)} name="category" type="text" placeholder="Write category name..."/>
                        <select name="image" class="select select-primary w-full max-w-xs" id="image_selection" style={{ display:"block",margin:" 30px auto",}}>
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


                    <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
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
                                                </InertiaLink>
                                                </td>
                                                <td>
                                                <InertiaLink
                                                    href={route('categories.relative' , category.id )}
                                                    as="button"
                                                    type="button"
                                                    
                                                    
                                                
                                                    class="btn btn-warning">
                                                        Related
                                                    </InertiaLink>
                                                </td>





                            </tr>
                        </tbody>
                        ))
                    }


                </table>
                </div>
                </div>
        
                </AuthenticatedLayout>
                <style>{`
        
                .h2_style {
                            font-size: 40px;
                            padding-bottom: 40px;
                        }
        
        `}</style>
</>
    )
}

