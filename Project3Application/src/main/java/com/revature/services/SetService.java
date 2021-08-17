package com.revature.services;

import com.revature.models.Set;

public interface SetService {

	public Set addSet(Set s);
	
	public Set getSet(int id);
	
	public Set updateSet(Set newSet);
	
	public boolean deleteSet(int id);
	
}
