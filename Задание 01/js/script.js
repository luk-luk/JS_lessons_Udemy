
let money = +prompt ('Ваш бюджет в месяц?', ''); // Плюс чтобы из строки получить число
let time = prompt ('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses:{},
	income: [],
	savings: false
};

//console.log (appData.budget)

for (let i = 0; i < 2; i++){
	let a = prompt ('Введите обязательную статью расходов в этом месяце', '');
	let b = prompt ('Во сколько обойдется?', '');

	if ( (typeof(a)) === 'string' && (typeof(a)) !== null && (typeof(b)) !== null && a !== "" && b !== "" && a.length < 50){
		
		appData.expenses[a] = b; // в качестве ключей передаст значения из переменной "a", если написать через точку, то ключом будет буква "a" 
		console.log('Done!')
	} else {
		console.log('Bad result!')
		i--
	}

	
}

appData.moneyPerDay = appData.budget / 30
//console.log(appData.moneyPerDay);

alert ('Бюджет на один день: ' + appData.moneyPerDay);

console.log(appData.moneyPerDay);

if (appData.moneyPerDay < 100){
	console.log("Минимальный уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
	console.log("Средний уровень достатка")
} else if (appData.moneyPerDay > 2000){
	console.log("Высокий уровень достатка")
} else {
	console.log("Произошла ошибка")
}