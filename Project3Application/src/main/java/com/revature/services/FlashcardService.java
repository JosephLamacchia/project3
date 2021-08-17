package com.revature.services;

import java.util.List;

import com.revature.models.Flashcard;

public interface FlashcardService {

	public Flashcard addFlashcard(Flashcard f);
	
	public Flashcard getFlashcard(int id);
	
	public Flashcard updateFlashcard(Flashcard newFlashcard);
	
	public boolean deleteFlashcard(int id);
	
	public List<Flashcard> getFlashcardBySetId(int setId);
	
}
