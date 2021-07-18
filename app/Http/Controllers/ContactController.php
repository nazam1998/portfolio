<?php

namespace App\Http\Controllers;

use App\Models\contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contact = contact::all();
        return view('contact/index', compact('contact'));
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(contact $contact)
    {
        return view('contact/show', compact('contact'));
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|string',
            'msg' => 'required|max:500',
        ]);

        $contact = new Contact();

        $contact->first_name = $request->firstname;
        $contact->last_name = $request->lastname;
        $contact->email = $request->email;
        $contact->msg = $request->msg;
        $contact->read = false;
        $contact->save();
        return json_encode($validatedData);
    }

    /**
     * Update the message to be marked as read
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $contacts =  contact::whereId($request->id);
        foreach ($contacts as $contact) {
            $contact->read = true;
            $contact->save();
        }
        return redirect()->back()->with('msg', 'Messages successfully marked as read');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(contact $contact)
    {
        //
    }
}
