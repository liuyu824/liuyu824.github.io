package org.liuyu.communistexamplatform.demos.web.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.liuyu.communistexamplatform.demos.web.entity.User;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Mapper
public interface UserMapper {

    // 查询
    @Select("select * from user_inf")
    List<User> listAll();


    @Update("update user_inf set finalGrade = #{finalGrade} where userName = #{userName};")
    void saveFinalGrade(String userName, String finalGrade);

}
