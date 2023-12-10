package com.todo.todo.domain.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.todo.application.resouce.model.TaskModel;
import com.todo.todo.domain.dto.TaskDto;
import com.todo.todo.domain.mapper.TaskMapper;
import com.todo.todo.infrastructure.entity.Task;

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

    public TaskDto select(Integer id){
        return TaskDto.convertEntityToDto( mapper.select(id));
    }

    public void insert(TaskModel taskModel) {
        var entity = new Task();
        BeanUtils.copyProperties(taskModel, entity);
        mapper.insert(entity);
    }

    public void update(TaskModel taskModel) {
        var entity = new Task();
        BeanUtils.copyProperties(taskModel, entity);
        mapper.update(entity);
    }

    public void delete(Integer id) {
        mapper.deleteById(id);
    }
}
