

SELECT 
    name AS bi_country, area, population
FROM
    country.worlds
WHERE
    area > 3000000 OR population > 25000000