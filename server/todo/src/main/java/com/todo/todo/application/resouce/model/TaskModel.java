package com.todo.todo.application.resouce.model;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class TaskModel {
    private Integer id;
    private Integer userId;
    private String title;
    private String description;
    private Integer statusId;
    private LocalDateTime dueDate;
}
