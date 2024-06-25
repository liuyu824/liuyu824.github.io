/*
 * Copyright 2013-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.liuyu.communistexamplatform.demos.web.entity;

/**
 * @author <a href="mailto:chenxilzx1@gmail.com">theonefx</a>
 */
public class User {

    private int user_id;
    private String userName;
    private String userJobID;
    private String userDepartment;
    private String userOffice;
    private String userEmail;
    private String startTIme;
    private String endTIme;
    private Integer finalGrade;

    public User(int user_id, String userName, String userJobID, String userDepartment, String userOffice, String userEmail, String startTIme, String endTIme, Integer finalGrade) {
        this.user_id = user_id;
        this.userName = userName;
        this.userJobID = userJobID;
        this.userDepartment = userDepartment;
        this.userOffice = userOffice;
        this.userEmail = userEmail;
        this.startTIme = startTIme;
        this.endTIme = endTIme;
        this.finalGrade = finalGrade;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserJobID() {
        return userJobID;
    }

    public void setUserJobID(String userJobID) {
        this.userJobID = userJobID;
    }

    public String getUserDepartment() {
        return userDepartment;
    }

    public void setUserDepartment(String userDepartment) {
        this.userDepartment = userDepartment;
    }

    public String getUserOffice() {
        return userOffice;
    }

    public void setUserOffice(String userOffice) {
        this.userOffice = userOffice;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getStartTIme() {
        return startTIme;
    }

    public void setStartTIme(String startTIme) {
        this.startTIme = startTIme;
    }

    public String getEndTIme() {
        return endTIme;
    }

    public void setEndTIme(String endTIme) {
        this.endTIme = endTIme;
    }

    public Integer getFinalGrade() {
        return finalGrade;
    }

    public void setFinalGrade(Integer finalGrade) {
        this.finalGrade = finalGrade;
    }
}
