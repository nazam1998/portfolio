@extends('layouts.app')
@section('content')
<div class="card mx-auto" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{$contact->first_name . ' ' . $contact->last_name}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{$contact->email}}</h6>
      <p class="card-text">{{$contact->msg}}</p>
      <a href="{{route('contact.index')}}" class="card-link">Return Back</a>
      <a href="mailto: {{$contact->email}}" class="card-link">Reply</a>
    </div>
  </div>

@endsection
