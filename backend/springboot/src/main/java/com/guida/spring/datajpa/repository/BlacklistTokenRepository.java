package com.guida.spring.datajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.guida.spring.datajpa.model.BlacklistToken;

public interface BlacklistTokenRepository extends JpaRepository<BlacklistToken, Long> {

    @Query(value = "SELECT COUNT(*) FROM blacklist_token WHERE token = :token", nativeQuery = true)
    Integer TokenExist(@Param("token") String token);
}