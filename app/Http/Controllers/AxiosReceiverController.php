<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AxiosReceiverController extends Controller
{
    public function ReceiveIt(Request $request){
        $validatedData = $request->validate([
            'firstname' => 'nullable',
            'lastname' => 'nullable',
            'email' => 'nullable',
            'message' => 'nullable',
        ]);

        return json_encode($validatedData);
    }
}
