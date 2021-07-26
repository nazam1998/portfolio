<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Models\contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->except('store');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contacts = contact::all();
        return view('contact/index', compact('contacts'));
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(contact $contact)
    {
        $contact->read = true;
        $contact->save();
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
        $contact->read = 1;
        $contact->save();
        Mail::to($contact->email,$contact->first_name)->send(new ContactMail($contact->first_name,$contact->msg));
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
        $ids = json_decode($request->ids);

        foreach ($ids as $id) {
            $contact = Contact::find($id);
            $contact->read = 0;

            $contact->save();
        }
        return response()->json("Successfully marked as read");
        // return redirect()->back()->with('msg', 'Messages successfully marked as read');
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
