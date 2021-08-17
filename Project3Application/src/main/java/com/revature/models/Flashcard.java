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
@Table(name="flashcards")
public class Flashcard {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="question")
	private String question;
	
	@Column(name="answer")
	private String answer;
	
	@Column(name="set_id")
	private int setId;

	public Flashcard(String question, String answer, int setId) {
		super();
		this.question = question;
		this.answer = answer;
		this.setId = setId;
	}

	public Flashcard(int id, String question, String answer, int setId) {
		super();
		this.id = id;
		this.question = question;
		this.answer = answer;
		this.setId = setId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public int getSetId() {
		return setId;
	}

	public void setSetId(int setId) {
		this.setId = setId;
	}

	@Override
	public String toString() {
		return "Flashcard [id=" + id + ", question=" + question + ", answer=" + answer + ", setId=" + setId + "]";
	}
	
}
