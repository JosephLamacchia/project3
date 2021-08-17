package com.revature.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.models.Set;

@Repository
public interface SetRepo extends CrudRepository<Set, Integer>{

	List<Set> findByCreatorId(int creatorId);
	
}