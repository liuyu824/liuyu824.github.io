package org.liuyu.communistexamplatform.demos.web.service.impl;

import org.liuyu.communistexamplatform.demos.web.entity.User;
import org.liuyu.communistexamplatform.demos.web.mapper.UserMapper;
import org.liuyu.communistexamplatform.demos.web.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public List<User> listAll() {
        return userMapper.listAll();
    }

    @Override
    public void saveFinalGrade(String userName, String finalGrade) {
        userMapper.saveFinalGrade(userName,finalGrade);
    }


}
