<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data_db = Answer::all();

        return Inertia::render('Buatsoal', [
            'data_db' => $data_db,
        ]);
    }

    public function halutama()
    {
        $data_db = Answer::all();
        return inertia::render('Homepage', [
            'data_db' => $data_db,
        ]);

        // return inertia::render('Homepage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $answer = new Answer();
        $answer->jawaban = $request->jawaban;
        $answer->save();
        return redirect(route("buatsoal"));
    }

    /**
     * Display the specified resource.
     */
    public function show(Answer $answer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Answer $answer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Answer $answer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
        $answer = Answer::find($request->id);
        $answer->delete();
        return redirect(route("buatsoal"));
    }
}
