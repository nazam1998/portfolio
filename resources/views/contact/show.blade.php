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
@push('scripts')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    
@endpush
