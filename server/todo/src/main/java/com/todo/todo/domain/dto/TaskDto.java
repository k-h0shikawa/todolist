package com.todo.todo.domain.dto;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.todo.todo.infrastructure.entity.Task;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TaskDto {
    private Integer id;
    private Integer userId;
    private String title;
    private String description;
    private Integer statusId;
    private String dueDate;

    public static TaskDto convertEntityToDto(Task taskEntity){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return new TaskDto(
            taskEntity.getId(),
            taskEntity.getUserId(),
            taskEntity.getTitle(),
            taskEntity.getDescription(),
            taskEntity.getStatusId(),
            taskEntity.getDueDate().format(formatter)
        );
    }
}
