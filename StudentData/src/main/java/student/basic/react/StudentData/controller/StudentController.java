package student.basic.react.StudentData.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import student.basic.react.StudentData.entity.Student;
import student.basic.react.StudentData.service.StudentService;

@RestController
@RequestMapping("/std")

@CrossOrigin(origins="http://localhost:3000")
public class StudentController 
{
	@Autowired
	StudentService service;
	
	
	@PostMapping("/new")
	public String happy(@RequestBody Student corp)
	{
		return service.interact(corp). getStudentId()+" has successfully inserted";
	}
	
	@PutMapping("/up")
	public String evans(@RequestBody Student corp)
	{
		return service.interact(corp).getStudentId()+" has successfully updated";
	}
	
	@GetMapping("/")
	public List<Student> hogan()
	{
		return service.readEverything();
	}
	
	@GetMapping("/{comp}")
	public Student downey(@PathVariable("comp") Integer comp)
	{
		return service.readOne(comp);
	}
	
	// 		localhost:8082//DLitheBootcampJan2022/rest/remove/Infosys
	@DeleteMapping("/remove/{id}")
	public String hemsworth(@PathVariable("id") Integer id)
	{
		return service.eraseOne(id);
	}
	
	
	
}
