SELECT * FROM person_1.address;
SELECT 
    p.firstName AS 'First Name',
    p.lastName AS 'Last Name',
    a.City,
    a.State
FROM
    person AS p
        LEFT JOIN
    address a ON a.personid = p.personid;