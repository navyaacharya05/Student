package student.basic.react.StudentData.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import student.basic.react.StudentData.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer>
{

}
