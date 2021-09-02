@extends('layouts.app')
@section('content')

    <a id="btn-read" class="btn btn-success my-2 d-none">Mark as read</a>
    <ul>
        <div class="row text-left">
            <span class="col-lg-1"></span>
            <span class="col-lg-1">#</span>
            <span class="col-lg-1">First</span>
            <span class="col-lg-1">Last</span>
            <span class="col-lg-2">email</span>
            <span class="col-lg-4">message</span>
            <span class="col-lg-1">Action</span>
        </div>
        @foreach ($contacts as $contact)
            <li class="@if ($contact->read == 1) font-weight-bold @else table-secondary unread @endif
                border-bottom row align-items-center justify-content-start py-1 text-left" >
                <span class="col-lg-1"><input type="checkbox" class="btn-check" id="btncheck{{ $contact->id }}"
                        autocomplete="off" name="read[]" value={{ $contact->id }}></span>
                <span class="col-lg-1" scope="row">{{ $contact->id }}</span>
                <span class="col-lg-1">{{ $contact->first_name }}</span>
                <span class="col-lg-1">{{ $contact->last_name }}</span>
                <span class="col-lg-2">{{ $contact->email }}</span>
                <span class="col-lg-4">{{ Str::limit($contact->msg, 50) }}</span>
                <a class="btn btn-warning col-lg-1 mr-0" href="{{ route('contact.show', $contact) }}">Show</a>
            </li>

        @endforeach
        </div>
    </ul>
@endsection

@push('scripts')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript">
        let button = document.getElementById('btn-read');
        let checkboxs = document.querySelectorAll('.btn-check');
        checked = [];

        button.addEventListener('click', () => {

            checkdata = document.querySelectorAll('.btn-check:checked');
            checked = [];
            checkdata.forEach(elem => {
                checked.push(elem.value);
            });
            console.log(checked);
            $.ajax({
                url: '{{ route('contact.update') }}',
                headers: {
                    'X-CSRF-TOKEN': "{{ csrf_token() }}"
                },
                type: 'POST',
                data: {
                    "ids": JSON.stringify(checked),
                },
                success: function(data) {
                    console.log(JSON.stringify(data));
                },
                error: function(err) {
                    console.log(err);
                }
            });

            checkboxs.forEach(elem => {
                elem.parentElement.parentElement.classList.remove('unread');
                elem.parentElement.parentElement.classList.remove('table-primary');
                elem.parentElement.parentElement.classList.add("table-secondary");
                elem.parentElement.parentElement.classList.remove("font-weight-bold");
                elem.checked = false;

            })
            checked = []
        });
        checkboxs.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                let i = 0
                if (this.checked) {
                    if (checkbox.parentElement.parentElement.classList.contains('unread')) {

                        checkbox.parentElement.parentElement.classList.remove("table-secondary");
                    }
                    checkbox.parentElement.parentElement.classList.add("table-primary");
                    checkbox.parentElement.parentElement.classList.add("rounded");
                    checked.push('checked')
                } else {
                    if (checkbox.parentElement.parentElement.classList.contains('unread')) {
                        checkbox.parentElement.parentElement.classList.add('table-secondary');

                    }
                    checkbox.parentElement.parentElement.classList.remove('table-primary');
                    checkbox.parentElement.parentElement.classList.remove('rounded');
                    checked.pop()
                }
                if (checked.includes('checked')) {
                    button.classList.remove('d-none')
                } else {
                    button.classList.add('d-none')
                }
                console.log(checked);
            });
        });
    </script>
@endpush
