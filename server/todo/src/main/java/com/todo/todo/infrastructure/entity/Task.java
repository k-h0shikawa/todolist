package com.todo.todo.infrastructure.entity;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class Task {
    private Integer id;
    private Integer userId;
    private String title;
    private String description;
    private Integer statusId;
    private LocalDateTime dueDate;
}
