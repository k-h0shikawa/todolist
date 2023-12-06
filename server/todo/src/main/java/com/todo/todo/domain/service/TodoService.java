package com.todo.todo.domain.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.todo.application.resouce.model.TaskModel;
import com.todo.todo.domain.dto.TaskDto;
import com.todo.todo.domain.mapper.TaskMapper;

@Service
public class TodoService {

    @Autowired
    private TaskMapper mapper;

    public List<TaskDto> selectAll(){
        var tasks = mapper.selectAll();
        return tasks.stream()
            .map(TaskDto::convertEntityToDto)
            .collect(Collectors.toList());
    }

    public void insert(TaskModel task) {
    }
}
