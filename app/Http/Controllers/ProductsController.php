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
    public function form_add_product()
    {
        $categories =Categories::all();
        return Inertia::render('Admin/Form_Product', [
            'categories' => $categories,
        ]);
    }
    public function add_product(Request $request) :RedirectResponse
    {
        $pro = new Products;
        $pro->category_id=$request->category_id;
        $pro->title=$request->title;
        $pro->description=$request->description;
        $pro->price=$request->price;
        $pro->quantity=$request->quantity;
        $filename = $request->file('image')->getClientOriginalName();
        $path = $request->file('image')->storeAs('products', $filename, 'public');
        $pro->image = $filename;
        $categories=Categories::find($request->category_id);
        $pro->save();
        return redirect(route('products.show'));
    }

    public function show_products()
    {
        $products = Products::all();
        return Inertia::render('Admin/Show_Products', [
            'products' => $products->map(function ($product) {
                return [
                    'id' => $product->id,
                    'image' => $product->image,
                    'title' => $product->title,
                    'description' => $product->description,
                    'price' => $product->price,
                    'quantity' => $product->quantity,
                    'category' => $product->category ? $product->category->name : null,
                ];
            })]);
    }
    public function delete_product($id) : RedirectResponse
    {
        $pro =Products::find($id);
        $pro->delete();
        return redirect()->back()->with("message0","Product Deleted Successfully ");
    }
    public function form_edit_product($id)
    {
      $product =Products::find($id);
      $categories =Categories::all();
        return Inertia::render('Admin/FormEdit_Product', [
        'categories' => $categories,
        'product' => $product

    ]);
    }
    public function edit_product(Request $request,$id)
    {
        $categories =Categories::all();
        $categories->name=$request->category_name;
        $products =Products::find($id);
        $products->title=$request->title;
        $products->description=$request->description;
        $products->price=$request->price;
        $products->quantity=$request->quantity;
        $filename = $request->image->getClientOriginalName();
        $path = $request->image->storeAs('products', $filename, 'public');
        $products->image = $filename;
        $products->save();
      return redirect(route('products.show'));
    }
}
