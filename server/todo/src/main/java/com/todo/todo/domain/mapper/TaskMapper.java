package com.todo.todo.domain.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.todo.todo.infrastructure.entity.Task;

@Mapper
public interface TaskMapper {
	List<Task> selectAll();

    void insert(Task entity);

	void update(Task entity);

    void deleteById(Integer id);

    Task select(Integer id);
}
