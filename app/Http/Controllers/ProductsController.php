<?php

namespace App\Http\Controllers;
use App\Models\Products;
use App\Models\Categories;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class ProductsController extends Controller
{
    public function view_products()
    {

        $categories =Categories::all();
        return Inertia::render('Admin/Product', [
            'categories' => $categories,
        ]);    }
    public function add_product(Request $request) :RedirectResponse
    {

        $pro = new Products;
        $pro->category_id=$request->category_id;
        $pro->title=$request->title;
        $pro->description=$request->description;
        $pro->price=$request->price;
        $pro->quantity=$request->quantity;
        $pro->save();
        return redirect(route('products.view'));
    }

    public function show_product()
    {
        $pro = Product::all();
        return view('admin.show_product',compact('pro'));
    }
    public function show__product($id)
    {
        $pro = Product::whereHas('category', function($query) use ($id) {
            $query->where('id', $id);
        })->get();

        return view('admin.show__product',compact('pro'));
    }

    public function delete_product($id)
    {
        $pro =Product::find($id);
        $pro->delete();
        return redirect()->back()->with("message0","Product Deleted Successfully ");
    }
    public function edit_product($id)
    {
      $pro =Product::find($id);
      $data =Category::all();
      return view('admin.edit_product',compact('pro','data'));
    }

    public function edit_product_confirm(Request $request,$id)
    {
        $data =Category::all();
        $data->name=$request->category_name;

        $pro =Product::find($id);
        $pro->title=$request->title;
        $pro->description=$request->description;
        $pro->price=$request->price;
        $pro->quantity=$request->quantity;
        $imagename=$request->hidden;
        $image=$request->image;
        $fileName = time() . '.' . $request->image->extension();
        $request->image->storeAs('public/product', $fileName);
        $pro->image = $fileName;
      $pro->save();
      return redirect()->back()->with("message","Product Updated Successsfully");
    }
}
