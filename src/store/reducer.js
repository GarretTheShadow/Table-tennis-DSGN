//Стор для хранения АДРЕСА текущей выведенной таблицы
const neededTable = {
	neededDivisionId: '',
	neededTournamentName: '',
}

const SET_TABLE = 'SET_TABLE';

export const setTable = (payload) => {
	return {
		type: SET_TABLE,
		payload
	}
}

export function reducerTable(state = neededTable, action) {
	switch (action.type) {
		case 'SET_TABLE':
			return { ...state, neededDivisionId: action.payload.neededDivisionId, neededTournamentName: action.payload.neededTournamentName }
		default:
			return state;
	}
}

//Стор для хранения ссылок на таблицы (получаем из настроечной при ините апа и больше не трогаем)
const spreadsheetsIds = {
	free: '',
	first: '',
	second: '',
	third: '',
	high: '',
	ttClub: ''
}

const SET_Ids = 'SET_Ids';

export const setIds = (payload) => {
	return {
		type: SET_Ids,
		payload
	}
}

export function reducerSpreadsheetsIds(state = spreadsheetsIds, action) {
	switch (action.type) {
		case 'SET_Ids':
			return {
				...state,
				free: action.payload.free,
				first: action.payload.first,
				second: action.payload.second,
				third: action.payload.third,
				high: action.payload.high,
				ttClub: action.payload.ttClub,
			}
		default:
			return state;
	}
}

//Стор для хранения ДАННЫХ текущей выведенной таблицы
const fetchedData = {
	tournamentPlace: '',
	tournamentTell: '',
	tournamentRate: '',
	tableDivisionName: '',
	tableDate: '',
	tableTime: '',
	tableTotal: '',
	tableFio: [],
	tableZapas: []
}

const SET_DATA = 'SET_DATA';

export const setData = (payload) => {
	return {
		type: SET_DATA,
		payload
	}
}

export function reducerData(state = fetchedData, action) {
	switch (action.type) {
		case 'SET_DATA':
			return {
				...state,
				tournamentPlace: action.payload.tournamentPlace,
				tournamentTell: action.payload.tournamentTell,
				tournamentRate: action.payload.tournamentRate,
				tableDivisionName: action.payload.tableDivisionName,
				tableDate: action.payload.tableDate,
				tableTime: action.payload.tableTime,
				tableTotal: action.payload.tableTotal,
				tableFio: action.payload.tableFio,
				tableZapas: action.payload.tableZapas,
			}
		default:
			return state;
	}
}
//стор для ВК
const vk = {
	name: '',
	lastName: '',
	id: '',
	fullfield: false
}

const SET_vk = 'SET_vk';

export const setVk = (payload) => {
	return {
		type: SET_vk,
		payload
	}
}

export function reducerVK(state = vk, action) {
	switch (action.type) {

		case SET_vk:
			return {
				...state,
				name: action.payload.name,
				lastName: action.payload.lastName,
				id: action.payload.id,
				fullfield: action.payload.fullfield
			};

		default:
			return state;
	}
}