<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class NoteController extends Controller
{
    //index, store, show, update, destroy

    public function index()
    {
        return Note::all();
    }

    public function store(Request $request)
    {
        //Validar dados de entrega
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
            'image' => 'nullable|image|max:2048'
        ]);

        //Verificar se há imagem
        if ($request->hasFile('image')) {
            $data['image_path'] = $request->file('image')->store('notes', 'public');
        }

        $note = Note::create($data);
        return response()->json($note, '201');
    }

    public function show(Note $note)
    {
        return $note;
    }

    public function update($id)
    {
    }

    public function destroy(Note $note)
    {
        //Apagar imagem
        if ($note->image_path) {
            Storage::disk('public')->delete($note->image_path);
        }

        $note->delete();
        return response()->noContent();
    }
}
