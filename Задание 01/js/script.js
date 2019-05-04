
let money = null
let time = null

function start (){
	money = +prompt ('Ваш бюджет в месяц?', '5000'); // Плюс чтобы из строки получить число
	time = prompt ('Введите дату в формате YYYY-MM-DD', '05.2019');

	while(isNaN(money) || money == "" || money == null){
		money = +prompt ('Ваш бюджет в месяц?', '5000');
	}
}
start() // чтобы функция заработала ее надо вызвать

let appData = {
	 	budget: money,
	 	timeData: time,
	 	expenses: {},
	 	optionalExpenses:{},
	 	income: [],
	 	savings: true
};

function chooseExpences(){
	for (let i = 0; i < 2; i++){
		let a = prompt ('Введите обязательную статью расходов в этом месяце', 'Что то');
		let b = prompt ('Во сколько обойдется?', '100');
	
		if ( (typeof(a)) === 'string' && (typeof(a)) !== null && (typeof(b)) !== null && a !== "" && b !== "" && a.length < 50){
			
			appData.expenses[a] = b; // в качестве ключей передаст значения из переменной "a", если написать через точку, то ключом будет буква "a" 
			console.log('Done!')
		} else {
			console.log('Bad result!')
			i--
		}	
	}
}
chooseExpences()

appData.moneyPerDay = (appData.budget / 30).toFixed(1) // округляет, но возвращает строку
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

function checkSavings() {
	if(appData.savings === true) {
		let save = +prompt('Какова сумма накоплений?', '1000')
		let percent = +prompt('Под какой процент?', '9')

		appData.monthIncome = save/100/30*percent
		alert('Доход с вашего депозита: ' + appData.monthIncome)
	}
}
checkSavings()

console.log(appData)