<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'user_id',
        'table_id',
        'menu_id',
        'reservation_time',
        'approved',
        'reservation_day',
        'capacity',
        'msg',
    ];
}
