import React from 'react';
import { usePage,useForm, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
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

        <AuthenticatedLayout user={auth.user}>
        <Head title="AdminCategories" />

                    <h2 className="h2_style">Add Category</h2>
                    <form action={route('categories.add')} method="post">

                        <input id="input_color" value={data.message} onChange={e => setData('message', e.target.value)} name="category" type="text" placeholder="Write category name..."/>
                        <input type="submit" className="btn btn-primary" value="Add Category"/>
                    </form>


                <table>
                    <thead>
                        <tr>
                            <th>Category Name</th>
                            <th>Action</th>
                            <th>Related</th>

                        </tr>
                    </thead>
                    {
                        categories.map((category) => (
                            <tbody>
                            <tr>
                                <td>{ category.name }</td>
                                <td><InertiaLink
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
                </AuthenticatedLayout>


    )
}

