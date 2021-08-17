package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.models.Flashcard;
import com.revature.repositories.FlashcardRepo;

@Service
public class FlashcardServiceImpl implements FlashcardService {

	@Autowired
	FlashcardRepo fr;
	
	@Override
	public Flashcard addFlashcard(Flashcard f) {
		return fr.save(f);
	}

	@Override
	public Flashcard getFlashcard(int id) {
		try {
			return fr.findById(id).get();
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public Flashcard updateFlashcard(Flashcard newFlashcard) {
		return fr.save(newFlashcard);
	}

	@Override
	public boolean deleteFlashcard(int id) {
		try { 
			fr.deleteById(id);
			return true;
		} catch(IllegalArgumentException e) {
			e.printStackTrace();
			return false;	
		}
	}

	@Override
	public List<Flashcard> getFlashcardBySetId(int setId) {
		return fr.findBySetId(setId);
	}

}
