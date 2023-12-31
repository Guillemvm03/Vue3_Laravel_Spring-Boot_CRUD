<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Table extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    public $timestamps = false;
    
    protected $table = 'tables';
    // protected $table = 'tables';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'table_number',
        'capacity',
        'category',
        'available',
        'status',        
        'img_table',

    ];
    public function menus(): BelongsToMany
    {
        return $this->belongsToMany(Menu::class, 'tables_menu', 'tables_id', 'menus_id');
    }
}

