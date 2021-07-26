<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('contacts')->insert([
            'first_name' => 'Dummy',
            'last_name' => 'Message',
            'email' => 'nazamfr1998@gmail.com',
            'msg' => 'Hello Nazam, Welcome in your backoffice !',
            'read' => 1,
        ]);
        DB::table('users')->insert([
            'name'=>'Nazam',
            'email'=>'nazamfr1998@gmail.com',
            'password' =>Hash::make('Muhammad@05031998')
        ]);
    }
}
