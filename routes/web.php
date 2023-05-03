<?php
use App\Http\Controllers\ChirpController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\OrdersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('UserPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('userpage');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified','admin'])->name('dashboard');





Route::middleware('auth','admin')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/Admincategories', [CategoriesController::class, 'view_categories'])
->middleware('admin')
->name('categories.view');

Route::get('/Admincategories/relative/{id}', [CategoriesController::class, 'relative_product'])
->middleware('admin')
->name('categories.relative');

Route::post('/Admincategories/add', [CategoriesController::class, 'add_category'])
->middleware('admin')
->name('categories.add');

Route::delete('/Admincategories/delete/{id}', [CategoriesController::class, 'delete_category'])
->middleware('admin')
->name('categories.delete');



Route::get('/form_add_product',[ProductsController::class,'form_add_product'])
->middleware('admin')
->name('product.form_add');

Route::get("/show_products",[ProductsController::class,"show_products"])
->middleware('admin')
->name('products.show');

Route::post("/add_product",[ProductsController::class,"add_product"])
->middleware('admin')
->name('product.add');

Route::delete('/delete_product/{id}',[ProductsController::class,'delete_product'])
->middleware('admin')
->name('product.delete');

Route::get('/form_edit_product/{id}',[ProductsController::class,'form_edit_product'])
->middleware('admin')
->name('product.form_edit');

Route::post('/edit_product/{id}',[ProductsController::class,'edit_product'])
->middleware('admin')
->name('product.edit');



Route::get('/view_orders',[OrdersController::class,'view_orders'])->middleware('admin')
->name('order.view');;
Route::get('/delete_order/{id}',[OrdersController::class,'delete_order'])->middleware('admin')
->name('order.delete');;
Route::get('/form_edit_order/{id}',[OrdersController::class,'form_edit_order'])->middleware('admin')
->name('order.formedit_add');;
Route::post('/edit_order/{id}',[OrdersController::class,'edit_order'])->middleware('admin')
->name('order.edit');;
Route::get('/show_your_order',[OrdersController::class,'show_your_order'])->middleware('admin')
->name('order.show');;



require __DIR__.'/auth.php';
