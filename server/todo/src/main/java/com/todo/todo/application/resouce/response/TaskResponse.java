package com.todo.todo.application.resouce.response;

import java.time.format.DateTimeFormatter;

import com.todo.todo.domain.dto.TaskDto;
import com.todo.todo.infrastructure.entity.Task;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TaskResponse {
    private Integer id;
    private Integer userId;
    private String title;
    private String description;
    private Integer statusId;
    private String dueDate;

    public static TaskResponse convertDtoToResponse(TaskDto taskDto){
        return new TaskResponse(
            taskDto.getId(),
            taskDto.getUserId(),
            taskDto.getTitle(),
            taskDto.getDescription(),
            taskDto.getStatusId(),
            taskDto.getDueDate()
        );
    }
}
