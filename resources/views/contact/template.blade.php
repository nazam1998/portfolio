<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Nazam IT</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

</head>
<STYLE>
    A {
        text-decoration: none;
    }

</STYLE>

<body>
    <div>
        <div style="background-color: #6c40dd;" class="w-100">
            <a href="{{ URL::to('/') }}" class="row align-items-center justify-content-around">
                <img src="{{ asset('images/logo.png') }}" class="img-fluid w-25 col-1" style="" alt="Nazam IT Logo">
                <span class="text-white col-8" style="font-size: 28px; text-decoration: none;">Nazam IT</span>
            </a>
        </div>
        <div class="container mt-5 bg-light">

            <p>Hello {{ $first_name }} !</p>

            <p>Thank you for contacting me,</p>
            <p>Here is the message you sent me :</p>

            <p class="text-secondary">{{ $msg }}</p>

            <p>I will reply you as soon as possible.</p>

            <p>Kind Regards,</p>

            <p>Nazam Muhammad</p>
        </div>
    </div>
</body>

</html>
