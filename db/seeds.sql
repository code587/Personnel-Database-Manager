
-- seed data below to be used for queries

INSERT INTO department (department_name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Marketing'),
    ('Legal');

INSERT INTO roles   
    (title, salary, department_id)
VALUES
    ('Sales Manager', 90000, 1),
    ('Jr Software Engineer', 61000, 2),
    ('Controller', 110000, 3),
    ('Social Media Coordinator', 48000, 4),
    ('Legal Analyst', 65000, 5);


INSERT INTO employee
    (first_name, last_name, roles_id, manager_id)
VALUES
    ('Dean', 'Winchester', 1, 1),
    ('Bruno', 'Mars', 2, 2) ,
    ('Dojo', 'Cat', 3, 3),
    ('Kerry', 'Washington', 4, 4),
    ('KeKe', 'Palmer', 5, 5);




