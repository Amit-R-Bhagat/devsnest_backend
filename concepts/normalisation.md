# Normalisation
---------------------------------------
Normalization is a database design technique that reduces data redundancy and eliminates undesirable characteristics like Insertion, Update and Deletion Anomalies. Normalization rules divides larger tables into smaller tables and links them using relationships. The purpose of Normalisation in SQL is to eliminate redundant (repetitive) data and ensure data is stored logically.

## Anomalies
-------------------------------------
Update anomaly: In the above table we have two rows for employee Rick as he belongs to two departments of the company. If we want to update the address of Rick then we have to update the same in two rows or the data will become inconsistent. If somehow, the correct address gets updated in one department but not in other then as per the database, Rick would be having two different addresses, which is not correct and would lead to inconsistent data.

Insert anomaly: Suppose a new employee joins the company, who is under training and currently not assigned to any department then we would not be able to insert the data into the table if emp_dept field doesn’t allow nulls.

Delete anomaly: Suppose, if at a point of time the company closes the department D890 then deleting the rows that are having emp_dept as D890 would also delete the information of employee Maggie since she is assigned only to this department.

Common Types of normal forms :

1. 1NF  
	As per the rule of first normal form, an attribute (column) of a table cannot hold multiple values. It should hold only atomic values.

2. 2NF
	+ A table is said to be in 2NF if both the following conditions hold:
	+ Table is in 1NF (First normal form)
	  No non-prime attribute is dependent on the proper subset of any candidate key of table.
	  An attribute that is not part of any candidate key is known as non-prime attribute.
3. 3NF
	+ A table design is said to be in 3NF if both the following conditions hold:

	+ Table must be in 2NF
	Transitive functional dependency of non-prime attribute on any super key should be removed.
	An attribute that is not part of any candidate key is known as non-prime attribute.

	+ In other words 3NF can be explained like this: A table is in 3NF if it is in 2NF and for each functional dependency X-> Y at least one of the following conditions hold:

	+ X is a super key of table
	+ Y is a prime attribute of table
	+ An attribute that is a part of one of the candidate keys is known as prime attribute.

4. BNCF
	+ It is an advance version of 3NF that’s why it is also referred as 3.5NF. BCNF is stricter than 3NF. A table complies with BCNF if it is in 3NF and for every functional dependency X->Y, X should be the super key of the table. 

