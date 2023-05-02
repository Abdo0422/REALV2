<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
class OrdersController extends Controller
{
    public function view_orders()
    {
        $order =Orders::all();
        return Inertia::render('Admin/View_Orders', [
            'products' => $order->map(function ($order) {
                return [
                    'id' => $order->id,
                    'PaymentMethod' => $order->PaymentMethod,
                    'OrderDate' => $order->OrderDate,
                    'DeliveryDate' => $order->DeliveryDate,
                    'total' => $order->total,
                    'status' => $order->status,
                ];
            })]);
    }
    public function form_edit_order($id)
    {
        $order = Orders::find($id);
        return Inertia::render('Admin/FormEdit_Orders', [
            'order' => $order,
    
        ]);
    }
     
    public function edit_order(Request $request,$id) {
        $order = Orders::find($id);
        $order->status = $request->status;
        $order->save();
        return redirect()->back()->with("message","Order Updated Successsfully");

      }

    public function delete_order($id) : RedirectResponse
    {
        $order = Orders::find($id);
        $order->delete();
        return redirect()->back()->with("message0","Order Deleted Successfully ");

    }
    public function show_your_order(Request $request)
    {
      $search = Orders::where('name','LIKE','%$search%')->orWhere('id','LIKE','%$search%')->paginate(2);
      return Inertia::render('Admin/Show_Order', [
        'search' => $search,

    ]);
    }
}
