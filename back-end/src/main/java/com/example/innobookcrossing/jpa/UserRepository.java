package com.example.innobookcrossing.jpa;

import com.example.innobookcrossing.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findUserByAlias(String alias);
}
