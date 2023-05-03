<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categories;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use App\Models\Products;
use Inertia\Response;

class CategoriesController extends Controller
{

    public function view_categories()
{
    $categories = Categories::all();


    return Inertia::render('Admin/Category', [
        'categories' => $categories,
    ]);
}
public function add_category(Request $request): RedirectResponse
{
    $categories = new Categories;

    $categories->name = $request->input("category","z");
    $categories->category_image=$request->input('image');
    $categories->save();

    return redirect(route('categories.view'));
}
public function delete_category($id)
{
    $categories = Categories::find($id);
    if (!$categories) {
        return redirect()->back()->with('error', 'categories not found');
    }
    $categories->delete();
    return redirect()->back()->with('success', 'Category deleted successfully');
}
public function relative_product($id)
    {
        $products = Products::whereHas('category', function($query) use ($id) {
            $query->where('id', $id);
        })->get();

        return Inertia::render('Admin/Relative', [
            'products' => $products,
        ]);
    }
}
?>
