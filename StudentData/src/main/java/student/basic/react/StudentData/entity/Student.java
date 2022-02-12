package student.basic.react.StudentData.entity;

import java.sql.Date;
import java.util.ArrayList;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.Id;

import java.util.List;

@Entity
public class Student 
{
	@Id
	private int studentId;
	private String name,gender;
	private Date birthdate;
	private long contactNo;
	
	@ElementCollection
	private List<String> address=new ArrayList<String>();
	
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Date getBirthdate() {
		return birthdate;
	}
	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}
	public long getContactNo() {
		return contactNo;
	}
	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}
	public List<String> getAddress() {
		return address;
	}
	public void setAddress(List<String> address) {
		this.address = address;
	}
	
}
