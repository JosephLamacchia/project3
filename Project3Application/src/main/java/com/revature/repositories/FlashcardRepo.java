package com.revature.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Flashcard;

@Repository
public interface FlashcardRepo extends CrudRepository<Flashcard, Integer>{

	List<Flashcard> findBySetId(int setId);
	
}
