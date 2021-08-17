package com.revature.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="sets")
public class Set {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="creator_id")
	private int creatorId;
	
	@Column(name="title")
	private String title;
	
	@OneToMany
	@JoinColumn(name="set_id")
	private List<Flashcard> flashcards;

	public Set(int creatorId, String title) {
		super();
		this.creatorId = creatorId;
		this.title = title;
	}

	public Set(int id, int creatorId, String title) {
		super();
		this.id = id;
		this.creatorId = creatorId;
		this.title = title;
	}

	public Set(int creatorId, String title, List<Flashcard> flashcards) {
		super();
		this.creatorId = creatorId;
		this.title = title;
		this.flashcards = flashcards;
	}

	public Set(int id, int creatorId, String title, List<Flashcard> flashcards) {
		super();
		this.id = id;
		this.creatorId = creatorId;
		this.title = title;
		this.flashcards = flashcards;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCreatorId() {
		return creatorId;
	}

	public void setCreatorId(int creatorId) {
		this.creatorId = creatorId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<Flashcard> getFlashcards() {
		return flashcards;
	}

	public void setFlashcards(List<Flashcard> flashcards) {
		this.flashcards = flashcards;
	}

	@Override
	public String toString() {
		return "Set [id=" + id + ", creatorId=" + creatorId + ", title=" + title + ", flashcards=" + flashcards + "]";
	}
	
}
