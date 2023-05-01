<?php
use App\Http\Controllers\ChirpController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProductsController;
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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/Admincategories', [CategoriesController::class, 'view_categories'])->name('categories.view');
Route::post('/Admincategories/add', [CategoriesController::class, 'add_category'])->name('categories.add');
Route::delete('/Admincategories/delete/{id}', [CategoriesController::class, 'delete_category'])->name('categories.delete');
Route::inertia('/categories', 'Categories/Index')->name('categories');

Route::get('/form_add_product',[ProductsController::class,'form_add_product'])->name('product.form_add');
Route::get("/show_products",[ProductsController::class,"show_products"])->name('products.show');
Route::post("/add_product",[ProductsController::class,"add_product"])->name('product.add');
Route::delete('/delete_product/{id}',[ProductsController::class,'delete_product'])->name('product.delete');
Route::get('/form_edit_product/{id}',[ProductsController::class,'form_edit_product'])->name('product.form_edit');
Route::post('/edit_product/{id}',[ProductsController::class,'edit_product'])->name('product.edit');



require __DIR__.'/auth.php';
