<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        //
    ];
    protected function tokenMatch($request)
{
    // Disable CSRF protection for the following routes
    if ($request->routeIs('/Admincategories/add')) {
        return true;
    }

    return parent::tokenMatch($request);
}

}