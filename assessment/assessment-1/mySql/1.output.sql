SELECT DENSE_RANK() over(ORDER BY scores DESC) AS id,
scores

FROM points.scores;