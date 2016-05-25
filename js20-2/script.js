/*1. Массив скиллов (поле skills) всех людей, не должно быть повторяющихся скиллов, так же они должны быть отсортированы по алфавиту;*/

var dataSkills = _.map(data,"skills");
dataSkills = ((_.sortBy(_.uniq(_.flattenDeep(dataSkills)), function(o) { return o.toLowerCase(); })));
console.log(dataSkills);


/*2. Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (friends); */

var dataNames = _.flatMap(_.sortBy(data, function (o) { return o.friends.length; }), 'name');
console.log(dataNames);

/*3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей*/
var friends = _.uniq(_.map(_.flattenDeep(_.map(data, 'friends')), 'name'));
console.log(friends);
