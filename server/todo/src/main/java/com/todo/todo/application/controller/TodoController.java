package com.todo.todo.application.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.todo.todo.application.resouce.model.TaskModel;
import com.todo.todo.application.resouce.response.TaskResponse;
import com.todo.todo.domain.service.TodoService;

@RestController
@RequestMapping("/api/todo")
public class TodoController {

    @Autowired
    private TodoService service;

    @GetMapping("")
    public List<TaskResponse> list(){
        var tasks = service.selectAll();
        return tasks.stream()
            .map(TaskResponse::convertDtoToResponse)
            .collect(Collectors.toList());
    }

    @GetMapping("detail")
    public TaskResponse detail(@RequestParam Integer taskId){
        var task = service.select(taskId);
        return TaskResponse.convertDtoToResponse(task);
    }

    @PostMapping("insert")
    public void insert(@RequestBody TaskModel taskModel){
        service.insert(taskModel);
    }


    @PostMapping("update")
    public void update(@RequestBody TaskModel taskModel){
        service.update(taskModel);
    }

    @PostMapping("delete")
    public void delete(@RequestBody Integer taskId){
        service.delete(taskId);
    }

}