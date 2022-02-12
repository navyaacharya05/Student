package student.basic.react.StudentData.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import student.basic.react.StudentData.entity.Student;
import student.basic.react.StudentData.repository.StudentRepository;

@Service
public class StudentService 
{
	@Autowired
	StudentRepository repo;
	
	
	
	
	public Student interact(Student object)
	{
		return repo.save(object);// pass the entity object that can be converted as record in the table
	}
	
	public List<Student> readEverything()
	{
		return repo.findAll();
	}
	
	public Student readOne(Integer id)
	{
		return repo.findById(id).orElse(new Student());
	}
	
	public String eraseOne(Integer id)
	{
		String name=readOne(id).getStudentId()+" "+readOne(id).getAddress()+" has deleted\n";
		repo.deleteById(id);
		return name;
	}
	
}
