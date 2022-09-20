SELECT * FROM mail.person;
select *from person;
delete p2
FROM person p1 join person p2
on p1.email=p2.email
and p1.id>p2.id;