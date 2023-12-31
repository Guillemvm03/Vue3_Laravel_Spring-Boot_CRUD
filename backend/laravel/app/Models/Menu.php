<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Menu extends Model
{
    use HasApiTokens, HasFactory, Notifiable;
    public $timestamps = false;

    protected $table = 'menu';

     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'type',
        'img_Menu'
    ];
    public function tables(): BelongsToMany
    {
        return $this->belongsToMany(Table::class, 'tables_menu', 'menus_id', 'tables_id');
    }
    public function meals(): HasMany
    {
        return $this->hasMany(Meals::class, 'id_menu');
    }   
}