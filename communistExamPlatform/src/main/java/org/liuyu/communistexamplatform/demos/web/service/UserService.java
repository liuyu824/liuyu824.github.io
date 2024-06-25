package org.liuyu.communistexamplatform.demos.web.service;

import org.liuyu.communistexamplatform.demos.web.entity.User;

import java.util.List;

public interface UserService {

    List<User> listAll();

    void saveFinalGrade(String userName, String finalGrade);
}
